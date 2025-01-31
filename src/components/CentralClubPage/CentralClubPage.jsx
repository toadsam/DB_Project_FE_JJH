import React, { useState } from "react";
import axios from "axios"; // API 요청을 위한 axios 추가
import * as S from "./CentralClubPage.styles";

function CentralClubPage() {
  // ✅ 입력값 상태 관리
  const [clubType, setClubType] = useState("");
  const [clubName, setClubName] = useState("");
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [leaderName, setLeaderName] = useState("");
  const [leaderId, setLeaderId] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const [error, setError] = useState(""); // 오류 메시지 상태
  const [success, setSuccess] = useState(""); // 성공 메시지 상태

  const API_URL = "http://localhost:5000/api/central-club"; // ✅ 실제 백엔드 API 주소

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 필수 입력 검증
    if (!clubType || !clubName || !category || !leaderName || !leaderId) {
      setError("필수 항목을 모두 입력해주세요.");
      return;
    }

    // 전송할 데이터 준비
    const requestData = {
      clubType,
      clubName,
      category,
      subCategory,
      leaderName,
      leaderId,
      phone: phone || null, // 연락처 입력하지 않으면 null 처리
      email,
    };

    try {
      const response = await axios.post(API_URL, requestData);
      if (response.status === 201) {
        setSuccess("동아리 등록 신청이 완료되었습니다.");
        setError(""); // 에러 초기화
        setClubType(""); setClubName(""); setCategory(""); setSubCategory("");
        setLeaderName(""); setLeaderId(""); setPhone(""); setEmail("");
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
        <S.Title>동아리 등록</S.Title>
        <S.Form onSubmit={handleSubmit}>
          {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
          {success && <S.SuccessMessage>{success}</S.SuccessMessage>}

          <S.Label>동아리 구분</S.Label>
          <S.Input 
            placeholder="중앙동아리 or 소학회" 
            value={clubType} 
            onChange={(e) => setClubType(e.target.value)}
            required
          />

          <S.Label>동아리 명</S.Label>
          <S.Input 
            placeholder="Sweat" 
            value={clubName} 
            onChange={(e) => setClubName(e.target.value)}
            required
          />

          <S.Label>동아리 카테고리</S.Label>
          <S.Input 
            placeholder="봉사" 
            value={category} 
            onChange={(e) => setCategory(e.target.value)}
            required
          />

          <S.Label>동아리의 세부 카테고리</S.Label>
          <S.Input 
            placeholder="Sweat" 
            value={subCategory} 
            onChange={(e) => setSubCategory(e.target.value)}
          />

          <S.Label>대표 성명</S.Label>
          <S.Input 
            placeholder="홍길동" 
            value={leaderName} 
            onChange={(e) => setLeaderName(e.target.value)}
            required
          />

          <S.Label>대표 학번</S.Label>
          <S.Input 
            placeholder="202000000" 
            value={leaderId} 
            onChange={(e) => setLeaderId(e.target.value)}
            required
          />

          <S.Label>연락처(휴대전화)</S.Label>
          <S.Input 
            placeholder="010-0000-0000" 
            value={phone} 
            onChange={(e) => setPhone(e.target.value)}
          />

          <S.Label>연락처(이메일)</S.Label>
          <S.Input 
            placeholder="AjouEmail@ajou.ac.kr" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
          />

          <S.SubmitButton type="submit">신청</S.SubmitButton>
        </S.Form>
      </S.Content>
    </S.Container>
  );
}

export default CentralClubPage;
