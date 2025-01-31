import React, { useState } from "react";
import axios from "axios"; // API 연동 추가
import * as S from "./RecruitmentPage.styles";

function RecruitmentPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [contact, setContact] = useState("");
  const [details, setDetails] = useState("");
  const [error, setError] = useState(""); // 오류 메시지 상태
  const [success, setSuccess] = useState(""); // 성공 메시지 상태

  const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api/recruitments"; // 환경변수 활용

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 필수 입력 검증
    if (!title || !content) {
      setError("제목과 모집내용은 필수 입력 사항입니다.");
      return;
    }

    const requestData = {
      title,
      content,
      contact: contact || null, // 연락처가 없으면 null 처리
      details,
    };

    try {
      const response = await axios.post(API_URL, requestData);
      if (response.status === 201) {
        setSuccess("모집공고가 성공적으로 등록되었습니다.");
        setTitle("");
        setContent("");
        setContact("");
        setDetails("");
        setError("");
      }
    } catch (err) {
      console.error("API 요청 실패:", err);
      setError("서버 오류가 발생했습니다. 다시 시도해주세요.");
    }
  };

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
          <S.Form onSubmit={handleSubmit}>
            {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
            {success && <S.SuccessMessage>{success}</S.SuccessMessage>}

            <S.Label>제목</S.Label>
            <S.Input 
              type="text" 
              placeholder="2025-1 신입부원 모집" 
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />

            <S.Label>모집내용</S.Label>
            <S.Input 
              type="text" 
              placeholder="상세모집" 
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            />

            <S.Label>연락처 (선택 입력)</S.Label>
            <S.Input 
              type="text" 
              placeholder="010-0000-0000"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />

            <S.Label>상세내용</S.Label>
            <S.TextArea 
              placeholder="상세내용"
              value={details}
              onChange={(e) => setDetails(e.target.value)}
            />

            <S.SubmitButton type="submit">게시</S.SubmitButton>
          </S.Form>
        </S.Main>
      </S.Content>
    </S.Container>
  );
}

export default RecruitmentPage;
