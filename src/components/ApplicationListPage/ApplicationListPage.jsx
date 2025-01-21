import React from "react";
import * as S from "./ApplicationListPage.styles";

function ApplicationListPage() {
  const applications = [
    { name: "홍길동", gender: "남", major: "디지털미디어학과", studentId: "202000000", contact: "010-0000-0000", status: "승인", note: "승인" },
    ...Array(20).fill({ name: "", gender: "", major: "", studentId: "", contact: "", status: "부원", note: "부원" }),
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
            <S.Highlight>SWeat</S.Highlight> - 신청 목록
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
                <S.TableHeader>승인/기각</S.TableHeader>
              </tr>
            </thead>
            <tbody>
              {applications.map((application, index) => (
                <S.TableRow key={index}>
                  <S.TableCell>{application.name}</S.TableCell>
                  <S.TableCell>{application.gender}</S.TableCell>
                  <S.TableCell>{application.major}</S.TableCell>
                  <S.TableCell>{application.studentId}</S.TableCell>
                  <S.TableCell>{application.contact}</S.TableCell>
                  <S.TableCell>{application.status}</S.TableCell>
                  <S.TableCell>{application.note}</S.TableCell>
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

export default ApplicationListPage;
