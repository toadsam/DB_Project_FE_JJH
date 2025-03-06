import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';
import * as S from './LoginPage.styles';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

const decodeToken = (token) => {
  if (!token) return null;
  try {
    return jwtDecode(token);
  } catch (error) {
    console.error('🚨 토큰 디코딩 오류:', error);
    return null;
  }
};

// 인앱 브라우저 판별 함수
function isInAppBrowser() {
  const ua = navigator.userAgent.toLowerCase();
  return (
    ua.includes('instagram') ||
    ua.includes('fbav') ||
    ua.includes('fban') ||
    ua.includes('everytime') ||
    ua.includes('kakao')
  );
}

function LoginPage() {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const [inAppBrowser, setInAppBrowser] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setInAppBrowser(isInAppBrowser());

    const storedToken = localStorage.getItem('accessToken');
    const storedUser = localStorage.getItem('userInfo');
    if (storedToken && storedUser) {
      setToken(storedToken);
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = useCallback(async () => {
    try {
      await axios.post(
        `${API_URL}/api/auth/logout`,
        {},
        { withCredentials: true }
      );
      alert('✅ 로그아웃 되었습니다.');
      localStorage.clear();
      sessionStorage.clear();
      window.google?.accounts.id.disableAutoSelect();
      delete axios.defaults.headers.common['Authorization'];
      setToken(null);
      setUser(null);
      navigate('/login');
    } catch (error) {
      console.error('🚨 로그아웃 실패:', error);
      alert('로그아웃 중 오류가 발생했습니다.');
    }
  }, [navigate]);

  const refreshAccessToken = useCallback(async () => {
    try {
      const response = await axios.post(
        `${API_URL}/api/auth/refresh`,
        {},
        { withCredentials: true }
      );
      const { accessToken } = response.data;
      localStorage.setItem('accessToken', accessToken);
      axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
      setToken(accessToken);
      console.log('✅ Access Token이 갱신되었습니다.');
    } catch (error) {
      console.error('🚨 Access Token 갱신 실패:', error);
      handleLogout();
    }
  }, [handleLogout]);

  const checkTokenExpiration = useCallback(() => {
    const storedToken = localStorage.getItem('accessToken');
    if (!storedToken) return;
    const decodedToken = decodeToken(storedToken);
    if (!decodedToken) {
      console.warn('🚨 유효하지 않은 토큰입니다. 로그아웃 처리!');
      handleLogout();
      return;
    }
    const now = Date.now() / 1000;
    if (decodedToken.exp < now) {
      console.warn('🔄 Access Token이 만료되었습니다. 갱신 시도 중...');
      refreshAccessToken();
    }
  }, [refreshAccessToken, handleLogout]);

  useEffect(() => {
    const interval = setInterval(checkTokenExpiration, 60000);
    return () => clearInterval(interval);
  }, [checkTokenExpiration]);

  // 외부 브라우저에서 현재 페이지 열기
  const handleOpenExternalBrowser = () => {
    const url = window.location.href;
    const ua = navigator.userAgent.toLowerCase();
    if (ua.includes('android')) {
      window.location.href = `intent://${url.replace(
        /^https?:\/\//,
        ''
      )}#Intent;scheme=https;package=com.android.chrome;end`;
    } else {
      window.open(url, '_blank');
    }
  };

  return (
    <GoogleOAuthProvider clientId="67500785353-oq4u26r3uek1s7b569sfr52sjkvj7j36.apps.googleusercontent.com">
      <S.LoginContainer>
        <S.LoginWrapper>
          <S.LoginFormSection>
            {/* ✅ ACM 텍스트 로고 적용 */}
            <S.ACMText>ACM</S.ACMText>
            <S.Title>ACM 회원만 이용 가능합니다.</S.Title>
            {!token ? (
              inAppBrowser ? (
                <div style={{ textAlign: 'center', margin: '0 0 16px 0' }}>
                  <p style={{ color: '#ff4f4f', fontWeight: 'bold' }}>
                    인앱 브라우저에서는 구글 로그인이 원활하지 않을 수 있습니다.
                  </p>
                  <S.Button onClick={handleOpenExternalBrowser}>
                    외부 브라우저에서 열기
                  </S.Button>
                  <p style={{ fontSize: '0.8rem', marginTop: '16px' }}>
                    * 자동 이동이 되지 않으면, 브라우저 우측 상단 메뉴에서
                    "외부 브라우저에서 열기"를 선택해 주세요.
                  </p>
                </div>
              ) : (
                <GoogleLogin
                  onSuccess={async (credentialResponse) => {
                    try {
                      console.log('✅ Google OAuth 성공:', credentialResponse);
                      const decodedGoogleToken = jwtDecode(
                        credentialResponse.credential
                      );
                      console.log(
                        '🔹 현재 로그인한 Google 이메일:',
                        decodedGoogleToken.email
                      );
                      const authResponse = await axios.post(
                        `${API_URL}/api/auth/google`,
                        { token: credentialResponse.credential },
                        { withCredentials: true }
                      );
                      const { accessToken } = authResponse.data;
                      const decodedToken = decodeToken(accessToken);
                      console.log('✅ 디코딩된 Access Token:', decodedToken);
                      localStorage.setItem('accessToken', accessToken);
                      localStorage.setItem(
                        'userInfo',
                        JSON.stringify(decodedToken)
                      );
                      axios.defaults.headers.common[
                        'Authorization'
                      ] = `Bearer ${accessToken}`;
                      setToken(accessToken);
                      setUser(decodedToken);
                      alert(`환영합니다, ${decodedToken.user_name}님!`);
                      navigate('/');
                    } catch (err) {
                      console.error(
                        '🚨 Google 로그인 실패:',
                        err.response || err
                      );
                      alert('Google 로그인 중 오류가 발생했습니다.');
                    }
                  }}
                  onError={() => alert('Google 로그인 실패!')}
                  auto_select={false}
                  useOneTap={false}
                  prompt="select_account"
                />
              )
            ) : (
              <S.UserSection>
                <S.UserInfo>
                  환영합니다,{' '}
                  {user?.user_name ||
                    user?.name ||
                    user?.nickname ||
                    user?.email}{' '}
                  님!
                </S.UserInfo>
                <S.Button className="logout" onClick={handleLogout}>
                  로그아웃
                </S.Button>
              </S.UserSection>
            )}
          </S.LoginFormSection>
          <S.BoxFooter>
            <span>개인정보처리방침</span>
            <span>© 2024 ACM</span>
          </S.BoxFooter>
        </S.LoginWrapper>
      </S.LoginContainer>
    </GoogleOAuthProvider>
  );
}

export default LoginPage;
