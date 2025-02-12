import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode"; // ✅ named import로 수정
import axios from "axios";
import * as S from "./LoginPage.styles";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

function LoginPage() {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // ✅ Google 로그인 성공 시 처리
  const handleGoogleLoginSuccess = async (credentialResponse) => {
    try {
      console.log("Google OAuth 성공:", credentialResponse);

      // Google에서 받은 id_token을 백엔드로 전송
      const response = await axios.post(`${API_URL}/api/auth/google-login`, {
        token: credentialResponse.credential,
      });

      const { token, role } = response.data; // 백엔드에서 받은 JWT 토큰 & 역할
      localStorage.setItem("token", token); // 토큰 저장
      localStorage.setItem("role", role); // 역할 저장
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      setToken(token);
      setUser(jwtDecode(token)); // ✅ jwtDecode 사용

      alert("Google 로그인 성공!");
      navigate("/");
    } catch (err) {
      console.error("Google 로그인 실패:", err.response || err);
      alert("Google 로그인 중 오류가 발생했습니다.");
    }
  };

  // ✅ Google 로그인 실패 시 처리
  const handleGoogleLoginFailure = () => {
    alert("Google 로그인 실패!");
  };

  // ✅ 로그아웃 처리
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    delete axios.defaults.headers.common["Authorization"];
    setToken(null);
    setUser(null);
    alert("로그아웃 되었습니다.");
    navigate("/login");
  };

  // ✅ JWT 토큰 확인 및 유지
  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    if (savedToken) {
      try {
        setToken(savedToken);
        setUser(jwtDecode(savedToken)); // ✅ jwtDecode 사용
      } catch (error) {
        console.error("유효하지 않은 토큰:", error);
        localStorage.removeItem("token");
      }
    }
  }, []);

  return (
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
      <S.Container>
        <S.Main>
          <S.Title>로그인 페이지</S.Title>
          <S.SubText>Google 계정으로 로그인하세요.</S.SubText>

          {!token ? (
            <GoogleLogin
              onSuccess={handleGoogleLoginSuccess} // Google 로그인 성공
              onError={handleGoogleLoginFailure} // Google 로그인 실패
            />
          ) : (
            <S.UserSection>
              <S.UserInfo>
                환영합니다, {user?.email}님! (역할: {user?.role})
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
