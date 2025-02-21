import React, { useState, useEffect, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import * as S from "./LoginPage.styles"; // 스타일 파일 유지
import ajouLogo from "../../asset/img.jpg"; // 아주대 로고 이미지 추가
import mascotImage from "../../asset/치토.jpeg"; // 아주대 마스코트 이미지 추가

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000"; 

const decodeToken = (token) => {
  if (!token) return null;
  try {
    return jwtDecode(token);
  } catch (error) {
    console.error("🚨 토큰 디코딩 오류:", error);
    return null;
  }
};

function LoginPage() {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // ✅ 로그아웃 처리
  const handleLogout = useCallback(async () => {
    try {
      await axios.post(`${API_URL}/api/auth/logout`, {}, { withCredentials: true });

      alert("✅ 로그아웃 되었습니다.");
      localStorage.clear();
      sessionStorage.clear();

      window.google?.accounts.id.disableAutoSelect();
      delete axios.defaults.headers.common["Authorization"];

      setToken(null);
      setUser(null);
      navigate("/login");
    } catch (error) {
      console.error("🚨 로그아웃 실패:", error);
      alert("로그아웃 중 오류가 발생했습니다.");
    }
  }, [navigate]);

  // ✅ Access Token 갱신 (Refresh Token 사용)
  const refreshAccessToken = useCallback(async () => {
    try {
      const refreshToken = localStorage.getItem("refreshToken");
      if (!refreshToken) {
        console.warn("🚨 Refresh Token이 없습니다. 로그아웃 처리!");
        handleLogout();
        return;
      }

      const response = await axios.post(`${API_URL}/api/auth/refresh`, { refreshToken });
      const { accessToken } = response.data;

      localStorage.setItem("accessToken", accessToken);
      axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
      setToken(accessToken);

      console.log("✅ Access Token이 갱신되었습니다.");
    } catch (error) {
      console.error("🚨 Access Token 갱신 실패:", error);
      handleLogout();
    }
  }, [handleLogout]);

  // ✅ 토큰 만료 여부 확인 및 자동 로그아웃
  const checkTokenExpiration = useCallback(() => {
    const storedToken = localStorage.getItem("accessToken");
    if (!storedToken) return;

    const decodedToken = decodeToken(storedToken);
    if (!decodedToken) {
      console.warn("🚨 유효하지 않은 토큰입니다. 로그아웃 처리!");
      handleLogout();
      return;
    }

    const now = Date.now() / 1000;
    if (decodedToken.exp < now) {
      console.warn("🔄 Access Token이 만료되었습니다. 갱신 시도 중...");
      refreshAccessToken();
    }
  }, [refreshAccessToken, handleLogout]);

  // ✅ 로그인 상태 유지 및 토큰 만료 체크
  useEffect(() => {
    const storedToken = localStorage.getItem("accessToken");
    const storedUser = localStorage.getItem("userInfo");

    if (storedToken && storedUser) {
      setToken(storedToken);
      setUser(JSON.parse(storedUser));
    }

    // ✅ 일정 간격으로 토큰 만료 여부 체크 (1분마다 실행)
    const interval = setInterval(checkTokenExpiration, 60000);
    return () => clearInterval(interval);
  }, [checkTokenExpiration]);

  return (
    <GoogleOAuthProvider clientId="67500785353-oq4u26r3uek1s7b569sfr52sjkvj7j36.apps.googleusercontent.com">
      <S.LoginContainer>
        <S.LoginWrapper>
          {/* ✅ 왼쪽: 마스코트 이미지 */}
          <S.ImageSection>
            <S.MascotImage src={mascotImage} alt="아주대학교 마스코트" />
          </S.ImageSection>

          {/* ✅ 오른쪽: 로그인 폼 */}
          <S.LoginFormSection>
            <S.Logo src={ajouLogo} alt="아주대학교 로고" />
            <S.Title>아주대학교 통합인증</S.Title>

            {!token ? (
              <>
                <GoogleLogin
                  onSuccess={async (credentialResponse) => {
                    try {
                      console.log("✅ Google OAuth 성공:", credentialResponse);

                      const decodedGoogleToken = jwtDecode(credentialResponse.credential);
                      console.log("🔹 현재 로그인한 Google 이메일:", decodedGoogleToken.email);

                      const authResponse = await axios.post(`${API_URL}/api/auth/google`, {
                        token: credentialResponse.credential,
                      });

                      const { accessToken, refreshToken } = authResponse.data;

                      const decodedToken = decodeToken(accessToken);
                      console.log("✅ 디코딩된 Access Token:", decodedToken);

                      localStorage.setItem("accessToken", accessToken);
                      localStorage.setItem("refreshToken", refreshToken);
                      localStorage.setItem("userInfo", JSON.stringify(decodedToken));

                      axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;

                      setToken(accessToken);
                      setUser(decodedToken);

                      alert(`환영합니다, ${decodedToken.user_name || decodedToken.name || decodedToken.nickname || decodedToken.email}!`);
                      navigate("/");
                    } catch (err) {
                      console.error("🚨 Google 로그인 실패:", err.response || err);
                      alert("Google 로그인 중 오류가 발생했습니다.");
                    }
                  }}
                  onError={() => alert("Google 로그인 실패!")}
                  auto_select={false}
                  useOneTap={false}
                  prompt="select_account"
                />
              </>
            ) : (
              <S.UserSection>
                <S.UserInfo>
                  환영합니다, {user?.user_name || user?.name || user?.nickname || user?.email}님! (역할: {user?.role})
                </S.UserInfo>
                <S.Button className="logout" onClick={handleLogout}>
                  로그아웃
                </S.Button>
              </S.UserSection>
            )}
          </S.LoginFormSection>
        </S.LoginWrapper>
      </S.LoginContainer>
    </GoogleOAuthProvider>
  );
}

export default LoginPage;
