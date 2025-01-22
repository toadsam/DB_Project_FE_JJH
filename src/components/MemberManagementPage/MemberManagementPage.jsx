import React from "react";
import * as S from "./MemberManagementPage.styles";

function MemberManagementPage() {
  const members = [
    { name: "홍길동", gender: "남", major: "디지털미디어학과", studentId: "202000000", contact: "010-0000-0000", status: "재학", role: "부원" },
    ...Array(20).fill({ name: "", gender: "", major: "", studentId: "", contact: "", status: "", role: "부원" }),
  ];

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
            <S.Highlight>SWeat</S.Highlight> - 부원 관리
          </S.Title>
          <S.Table>
            <thead>
              <tr>
                <S.TableHeader>이름</S.TableHeader>
                <S.TableHeader>성별</S.TableHeader>
                <S.TableHeader>학과</S.TableHeader>
                <S.TableHeader>학번</S.TableHeader>
                <S.TableHeader>연락처</S.TableHeader>
                <S.TableHeader>상태</S.TableHeader>
                <S.TableHeader>역할</S.TableHeader>
              </tr>
            </thead>
            <tbody>
              {members.map((member, index) => (
                <S.TableRow key={index}>
                  <S.TableCell>{member.name}</S.TableCell>
                  <S.TableCell>{member.gender}</S.TableCell>
                  <S.TableCell>{member.major}</S.TableCell>
                  <S.TableCell>{member.studentId}</S.TableCell>
                  <S.TableCell>{member.contact}</S.TableCell>
                  <S.TableCell>{member.status}</S.TableCell>
                  <S.TableCell>{member.role}</S.TableCell>
                </S.TableRow>
              ))}
            </tbody>
          </S.Table>
          <S.ButtonGroup>
            <S.Button className="cancel">취소</S.Button>
            <S.Button className="save">확인</S.Button>
          </S.ButtonGroup>
        </S.Main>
      </S.Content>
    </S.Container>
  );
}

export default MemberManagementPage;
