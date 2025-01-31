import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

function LoginPage() {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);

  // ✅ 올바른 JWT (임시로 직접 생성)
  const fakeToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9." +
    "eyJlbWFpbCI6ImFkbWluQGV4YW1wbGUuY29tIiwicm9sZSI6ImFkbWluIiwiZXhwIjoxNzE2MzQ1NjAwfQ." +
    "s6QUvF8BpG8TTvJgdc7LUxAzS5UVuZHTx-ZU9FX4ff8"; // 실제 JWT 형식

  // 로그인 시 JWT 저장
  const handleLogin = () => {
    localStorage.setItem("token", fakeToken);
    setToken(fakeToken);
    setUser(jwtDecode(fakeToken)); // ✅ jwtDecode로 해석
  };

  // 로그아웃 시 JWT 삭제
  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
  };

  // 페이지가 로드될 때 JWT 확인
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
    <div>
      <h2>로그인 페이지</h2>
      <p>여기에 로그인 폼을 추가하세요.</p>

      {!token ? (
        <button onClick={handleLogin}>로그인</button>
      ) : (
        <div>
          <p>환영합니다, {user?.email}님! (역할: {user?.role})</p>
          <button onClick={handleLogout}>로그아웃</button>
        </div>
      )}

      <div style={{ marginTop: "20px" }}>
        <Link to="/edit-profile" style={{ marginRight: "10px" }}>내 정보 수정</Link>
        <Link to="/change-password">비밀번호 변경</Link>
        <Link to="/central-club">중앙 동아리</Link>
        <Link to="/small-club">소확회</Link>
        <Link to="/recruitment">모집공고</Link>
        <Link to="/member-management">부원관리</Link>
        <Link to="/application-list">신청목록</Link>
      </div>
    </div>
  );
}

export default LoginPage;
