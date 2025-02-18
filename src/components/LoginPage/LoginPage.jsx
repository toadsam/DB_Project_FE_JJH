import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import * as S from "./LoginPage.styles";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000"; // 환경 변수에서 API URL 가져오기
const ACCESS_TOKEN_LIFETIME = 15 * 60 * 1000; // Access Token 유효시간 (15분)

function LoginPage() {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // ✅ Google 로그인 성공 시 처리
  const handleGoogleLoginSuccess = async (credentialResponse) => {
    try {
      console.log("✅ Google OAuth 성공:", credentialResponse);

      // 🔹 Google ID 토큰 디코딩하여 실제 로그인된 이메일 확인
      const decodedToken = jwtDecode(credentialResponse.credential);
      console.log("🔹 현재 로그인한 Google 이메일:", decodedToken.email);

      // 1️⃣ Google에서 받은 id_token을 백엔드로 전송
      const authResponse = await axios.post(`${API_URL}/api/auth/google`, {
        token: credentialResponse.credential,
      });

      const { accessToken, user } = authResponse.data; // 백엔드에서 받은 JWT 토큰 & 사용자 정보

      // 2️⃣ JWT 토큰과 사용자 정보 저장
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("accessTokenExpiry", Date.now() + ACCESS_TOKEN_LIFETIME);
      localStorage.setItem("userInfo", JSON.stringify(user));

      axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;

      setToken(accessToken);
      setUser(user);

      alert(`환영합니다, ${user.user_name}!`);
      navigate("/"); // 로그인 성공 후 홈으로 이동
    } catch (err) {
      console.error("🚨 Google 로그인 실패:", err.response || err);
      alert("Google 로그인 중 오류가 발생했습니다.");
    }
  };

  // ✅ Google 로그인 실패 시 처리
  const handleGoogleLoginFailure = () => {
    alert("Google 로그인 실패!");
  };

  // ✅ 로그아웃 처리
  const handleLogout = async () => {
    try {
      await axios.post(`${API_URL}/api/auth/logout`, {}, { withCredentials: true });
      alert("✅ 로그아웃 되었습니다.");

      localStorage.clear(); // 🚀 모든 localStorage 데이터 삭제
      sessionStorage.clear(); // 🚀 추가로 sessionStorage도 삭제

      // ✅ Google 세션 캐시 삭제 (자동 로그인 방지)
      window.google?.accounts.id.disableAutoSelect();

      delete axios.defaults.headers.common["Authorization"];
      setToken(null);
      setUser(null);
      navigate("/login");
    } catch (error) {
      console.error("🚨 로그아웃 실패:", error);
      alert("로그아웃 중 오류가 발생했습니다.");
    }
  };

  // ✅ 로그인 상태 유지 (새로고침 시에도 로그인 정보 유지)
  useEffect(() => {
    const storedToken = localStorage.getItem("accessToken");
    const storedUser = localStorage.getItem("userInfo");

    if (storedToken && storedUser) {
      setToken(storedToken);
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <GoogleOAuthProvider clientId="67500785353-oq4u26r3uek1s7b569sfr52sjkvj7j36.apps.googleusercontent.com">
      <S.Container>
        <S.Main>
          <S.Title>로그인 페이지</S.Title>
          <S.SubText>Google 계정으로 로그인하세요.</S.SubText>

          {/* ✅ 로그인 상태 확인하여 Google 로그인 버튼 숨기기 */}
          {!token ? (
            <GoogleLogin
              onSuccess={handleGoogleLoginSuccess} // Google 로그인 성공
              onError={handleGoogleLoginFailure} // Google 로그인 실패
              auto_select={false} // 🚀 자동 로그인 방지
              useOneTap={false} // 🚀 자동 로그인 팝업 방지
              prompt="select_account" // 🚀 "Sign in with Google" 버튼만 표시
            />
          ) : (
            <S.UserSection>
              <S.UserInfo>
                환영합니다, {user?.user_name || user?.email}님! (역할: {user?.role})
              </S.UserInfo>
              <S.Button className="logout" onClick={handleLogout}>
                로그아웃
              </S.Button>
            </S.UserSection>
          )}

          <S.LinksContainer>
            <S.NavLink as={Link} to="/edit-profile">내 정보 수정</S.NavLink>
            <S.NavLink as={Link} to="/change-password">비밀번호 변경</S.NavLink>
            <S.NavLink as={Link} to="/central-club">중앙 동아리</S.NavLink>
            <S.NavLink as={Link} to="/small-club">소확회</S.NavLink>
            <S.NavLink as={Link} to="/recruitment">모집공고</S.NavLink>

            {/* ✅ 관리자만 볼 수 있는 메뉴 */}
            {user?.role === "admin" && (
              <>
                <S.NavLink as={Link} to="/member-management">부원관리</S.NavLink>
                <S.NavLink as={Link} to="/application-list">신청목록</S.NavLink>
              </>
            )}
          </S.LinksContainer>
        </S.Main>
      </S.Container>
    </GoogleOAuthProvider>
  );
}

export default LoginPage;
