import React from "react";
import * as S from "./MyPage.styles";

function MyPage() {
  return (
    <S.Container>
      <S.Header>
        <S.Logo>ACM</S.Logo>
        <S.Nav>
          <S.NavItem>Home</S.NavItem>
          <S.NavItem>ACM소개</S.NavItem>
          <S.NavItem>내정보</S.NavItem>
          <S.NavItem>로그인</S.NavItem>
        </S.Nav>
      </S.Header>
      <S.Content>
        <S.Sidebar>
          <S.SidebarItem>내 정보 수정 </S.SidebarItem>
          <S.SidebarItem>비밀번호 변경 </S.SidebarItem>
        </S.Sidebar>
        <S.Main>
          <S.Title>내 정보</S.Title>
          <S.Profile>
            <S.ProfileImage />
            <S.ProfileInfo>
              <S.Name>홍길동 님</S.Name>
              <S.Detail>학과: 디지털미디어학과</S.Detail>
              <S.Detail>학번: 202000000</S.Detail>
              <S.Detail>상태: 재학</S.Detail>
            </S.ProfileInfo>
          </S.Profile>
          <S.Section>
            <S.SectionTitle>가입 동아리</S.SectionTitle>
            <S.SectionItem>AKO</S.SectionItem>
            <S.SectionItem>녹두벌</S.SectionItem>
            <S.SectionItem>돌벗</S.SectionItem>
          </S.Section>
          <S.Section>
            <S.SectionTitle>지원 동아리</S.SectionTitle>
            <S.SectionItem>아미클</S.SectionItem>
            <S.SectionItem>드말인</S.SectionItem>
          </S.Section>
          <S.Section>
            <S.SectionTitle>관리 동아리</S.SectionTitle>
            <S.SectionItem>아미클</S.SectionItem>
          </S.Section>
        </S.Main>
      </S.Content>
    </S.Container>
  );
}

export default MyPage;
