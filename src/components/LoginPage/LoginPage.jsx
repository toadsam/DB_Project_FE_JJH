import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import * as S from "./LoginPage.styles"; // ✅ 스타일 파일 추가

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
    <S.Container>
      <S.Header>
        <S.Logo>ACM</S.Logo>
        <S.Nav>
          <S.NavItem as={Link} to="/">Home</S.NavItem>
          <S.NavItem as={Link} to="/about">ACM소개</S.NavItem>
          <S.NavItem as={Link} to="/profile">내정보</S.NavItem>
          <S.NavItem as={Link} to="/login">로그인</S.NavItem>
        </S.Nav>
      </S.Header>

      <S.Main>
        <S.Title>로그인 페이지</S.Title>
        <S.SubText>여기에 로그인 폼을 추가하세요.</S.SubText>

        {!token ? (
          <S.Button onClick={handleLogin}>로그인</S.Button>
        ) : (
          <S.UserSection>
            <S.UserInfo>환영합니다, {user?.email}님! (역할: {user?.role})</S.UserInfo>
            <S.Button className="logout" onClick={handleLogout}>로그아웃</S.Button>
          </S.UserSection>
        )}

        <S.LinksContainer>
          <S.NavLink as={Link} to="/edit-profile">내 정보 수정</S.NavLink>
          <S.NavLink as={Link} to="/change-password">비밀번호 변경</S.NavLink>
          <S.NavLink as={Link} to="/central-club">중앙 동아리</S.NavLink>
          <S.NavLink as={Link} to="/small-club">소확회</S.NavLink>
          <S.NavLink as={Link} to="/recruitment">모집공고</S.NavLink>
          <S.NavLink as={Link} to="/member-management">부원관리</S.NavLink>
          <S.NavLink as={Link} to="/application-list">신청목록</S.NavLink>
        </S.LinksContainer>
      </S.Main>
    </S.Container>
  );
}

export default LoginPage;
