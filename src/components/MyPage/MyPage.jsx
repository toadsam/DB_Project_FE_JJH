import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./MyPage.styles";

function MyPage() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // ✅ 로그인한 사용자 정보 불러오기
  useEffect(() => {
    const storedUser = localStorage.getItem("userInfo");
    
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      alert("로그인이 필요합니다.");
      navigate("/login"); // 로그인 페이지로 이동
    }
  }, [navigate]);

  return (
    <S.Container>
      <S.Header>
        <S.Logo>ACM</S.Logo>
        <S.Nav>
          <S.NavItem>Home</S.NavItem>
          <S.NavItem>ACM소개</S.NavItem>
          <S.NavItem>내정보</S.NavItem>
          <S.NavItem onClick={() => navigate("/login")}>로그아웃</S.NavItem>
        </S.Nav>
      </S.Header>
      <S.Content>
        <S.Sidebar>
          <S.SidebarItem onClick={() => navigate("/edit-profile")}>내 정보 수정</S.SidebarItem>
          <S.SidebarItem onClick={() => navigate("/change-password")}>비밀번호 변경</S.SidebarItem>
        </S.Sidebar>
        <S.Main>
          <S.Title>내 정보</S.Title>

          {/* ✅ 사용자 정보 표시 */}
          {user ? (
            <>
              <S.Profile>
                <S.ProfileImage />
                <S.ProfileInfo>
                  <S.Name>{user.user_name} 님</S.Name>
                  <S.Detail>학과: {user.department || "정보 없음"}</S.Detail>
                  <S.Detail>학번: {user.student_number || "정보 없음"}</S.Detail>
                  <S.Detail>상태: {user.status1 || "정보 없음"}</S.Detail>
                </S.ProfileInfo>
              </S.Profile>

              {/* ✅ 가입 동아리 표시 */}
              <S.Section>
                <S.SectionTitle>가입 동아리</S.SectionTitle>
                {user.joined_clubs && user.joined_clubs.length > 0 ? (
                  user.joined_clubs.map((club, index) => (
                    <S.SectionItem key={`joined-${index}`}>{club}</S.SectionItem>
                  ))
                ) : (
                  <S.SectionItem>가입한 동아리가 없습니다.</S.SectionItem>
                )}
              </S.Section>

              {/* ✅ 지원한 동아리 표시 */}
              <S.Section>
                <S.SectionTitle>지원 동아리</S.SectionTitle>
                {user.applied_clubs && user.applied_clubs.length > 0 ? (
                  user.applied_clubs.map((club, index) => (
                    <S.SectionItem key={`applied-${index}`}>{club}</S.SectionItem>
                  ))
                ) : (
                  <S.SectionItem>지원한 동아리가 없습니다.</S.SectionItem>
                )}
              </S.Section>

              {/* ✅ 관리하는 동아리 표시 (관리자만) */}
              {user.role === "admin" && (
                <S.Section>
                  <S.SectionTitle>관리 동아리</S.SectionTitle>
                  {user.managed_clubs && user.managed_clubs.length > 0 ? (
                    user.managed_clubs.map((club, index) => (
                      <S.SectionItem key={`managed-${index}`}>{club}</S.SectionItem>
                    ))
                  ) : (
                    <S.SectionItem>관리하는 동아리가 없습니다.</S.SectionItem>
                  )}
                </S.Section>
              )}
            </>
          ) : (
            <S.Detail>사용자 정보를 불러오는 중...</S.Detail>
          )}
        </S.Main>
      </S.Content>
    </S.Container>
  );
}

export default MyPage;
