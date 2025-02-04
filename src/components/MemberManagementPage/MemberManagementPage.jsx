import React, { useState, useEffect } from "react";
import axios from "axios"; // API 요청을 위한 axios 추가
import * as S from "./MemberManagementPage.styles";

function MemberManagementPage() {
  const [members, setMembers] = useState([]); // 부원 목록 상태
  const [error, setError] = useState(""); // 에러 메시지 상태
  const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api/members"; // API 주소 설정

  // ✅ API에서 부원 목록 가져오기
  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await axios.get(API_URL);
        console.log("API 응답 데이터:", response.data);  // ✅ API 응답 데이터 확인

        // 응답 데이터가 배열인지 확인 후 상태 업데이트
        if (Array.isArray(response.data)) {
          setMembers(response.data);
        } else if (Array.isArray(response.data.members)) {
          setMembers(response.data.members);
        } else {
          throw new Error("부원 데이터를 불러올 수 없습니다.");
        }
      } catch (err) {
        console.error("API 요청 실패:", err);
        setError("부원 목록을 불러오는 데 실패했습니다.");
      }
    };

    fetchMembers();
  }, [API_URL]);

  return (
    <S.Container>
      <S.Content>
        <S.Sidebar>
          <S.SidebarItem>모집글 설정</S.SidebarItem>
          <S.SidebarItem>모집 공고</S.SidebarItem>
          <S.SidebarItem>행사 관리</S.SidebarItem>
          <S.SidebarItem>회원 관리</S.SidebarItem>
          <S.SidebarItem>가입신청서 처리</S.SidebarItem>
          <S.SidebarItem>기타</S.SidebarItem>
        </S.Sidebar>
        <S.Main>
          <S.Title>
            <S.Highlight>SWeat</S.Highlight> - 부원 관리
          </S.Title>

          {/* 에러 메시지 표시 */}
          {error && <S.ErrorMessage>{error}</S.ErrorMessage>} 
          
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
              {members.length > 0 ? (
                members.map((member, index) => (
                  <S.TableRow key={index}>
                    <S.TableCell>{member.name}</S.TableCell>
                    <S.TableCell>{member.gender}</S.TableCell>
                    <S.TableCell>{member.major}</S.TableCell>
                    <S.TableCell>{member.studentId}</S.TableCell>
                    <S.TableCell>{member.contact || "없음"}</S.TableCell>
                    <S.TableCell>{member.status}</S.TableCell>
                    <S.TableCell>{member.role}</S.TableCell>
                  </S.TableRow>
                ))
              ) : (
                <tr>
                  <S.TableCell colSpan="7">부원 목록이 없습니다.</S.TableCell>
                </tr>
              )}
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
