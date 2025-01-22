import React from "react";
import * as S from "./RecruitmentPage.styles";

function RecruitmentPage() {
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
          <S.SidebarItem>모집글 설정 </S.SidebarItem>
          <S.SidebarItem>모집 공고 </S.SidebarItem>
          <S.SidebarItem>행사 관리 </S.SidebarItem>
          <S.SidebarItem>회원 관리 </S.SidebarItem>
          <S.SidebarItem>가입신청서 처리 </S.SidebarItem>
          <S.SidebarItem>기타 </S.SidebarItem>
        </S.Sidebar>
        <S.Main>
          <S.Title>
            <S.Highlight>SWeat</S.Highlight> - 모집공고
          </S.Title>
          <S.Form>
            <S.Label>제목</S.Label>
            <S.Input placeholder="2025-1 신입부원 모집" />

            <S.Label>모집내용</S.Label>
            <S.Input placeholder="상세모집" />

            <S.Label>연락처</S.Label>
            <S.Input placeholder="010-0000-0000" />

            <S.Label>상세내용</S.Label>
            <S.TextArea placeholder="상세내용" />

            <S.SubmitButton>게시</S.SubmitButton>
          </S.Form>
        </S.Main>
      </S.Content>
    </S.Container>
  );
}

export default RecruitmentPage;
