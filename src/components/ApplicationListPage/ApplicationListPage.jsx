import React, { useState, useEffect } from "react";
import axios from "axios"; // ✅ API 요청을 위한 axios 추가
import * as S from "./ApplicationListPage.styles";

function ApplicationListPage() {
  const [applications, setApplications] = useState([]); // ✅ 신청 목록 저장
  const [loading, setLoading] = useState(true); // ✅ 로딩 상태 추가
  const [error, setError] = useState(""); // ✅ 오류 메시지 저장

  // ✅ API URL 설정
  const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api/applications";

  // ✅ 신청 목록 불러오기
  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await axios.get(API_URL);
        setApplications(response.data); // ✅ 백엔드에서 받은 데이터 저장
      } catch (err) {
        console.error("API 요청 실패:", err);
        setError("데이터를 불러오는 중 오류가 발생했습니다.");
      } finally {
        setLoading(false); // ✅ 로딩 상태 해제
      }
    };

    fetchApplications();
  }, []);

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

          {/* ✅ 로딩 상태 표시 */}
          {loading && <S.LoadingText>데이터를 불러오는 중...</S.LoadingText>}
          {error && <S.ErrorMessage>{error}</S.ErrorMessage>}

          {/* ✅ 신청 목록 테이블 */}
          {!loading && !error && (
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
                    <S.TableCell>{application.name || "-"}</S.TableCell>
                    <S.TableCell>{application.gender || "-"}</S.TableCell>
                    <S.TableCell>{application.major || "-"}</S.TableCell>
                    <S.TableCell>{application.studentId || "-"}</S.TableCell>
                    <S.TableCell>{application.contact || "N/A"}</S.TableCell>
                    <S.TableCell>{application.status || "대기"}</S.TableCell>
                    <S.TableCell>{application.note || "미정"}</S.TableCell>
                  </S.TableRow>
                ))}
              </tbody>
            </S.Table>
          )}

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
