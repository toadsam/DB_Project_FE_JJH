import React, { useState } from "react";
import axios from "axios"; // API 요청을 위한 axios 추가
import * as S from "./CentralClubPage.styles";

function CentralClubPage() {
  // ✅ 입력값 상태 관리
  const [clubName, setClubName] = useState("");
  const [clubType, setClubType] = useState("");
  const [clubLocation, setClubLocation] = useState("");
  const [clubSNS, setClubSNS] = useState("");
  const [clubPhoneNumber, setClubPhoneNumber] = useState("");
  const [clubEmail, setClubEmail] = useState("");
  const [clubCategory, setClubCategory] = useState("");
  const [clubDescription, setClubDescription] = useState("");
  const [details, setDetails] = useState("");

  const [error, setError] = useState(""); // 오류 메시지 상태
  const [success, setSuccess] = useState(""); // 성공 메시지 상태

  const API_URL = "http://43.203.79.210:5001/api/clubs/central"; // ✅ 실제 백엔드 API 주소

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 필수 입력 검증
    if (!clubName || !clubType || !clubLocation || !clubCategory || !clubDescription) {
      setError("필수 항목을 모두 입력해주세요.");
      return;
    }

    // 전송할 데이터 준비
    const requestData = {
      club_name: clubName,
      club_type: clubType,
      club_location: clubLocation,
      club_sns: clubSNS || null,
      club_contact_phone_number: clubPhoneNumber || null,
      club_contact_email: clubEmail || null,
      club_category: clubCategory,
      club_description: clubDescription,
      details: details || null,
    };

    try {
      const response = await axios.post(API_URL, requestData, {
        headers: { "Content-Type": "application/json" },
      });
      
      console.log("✅ [API 응답]:", response.data);
    
      if (response.status === 201) {
        setSuccess("동아리 등록 신청이 완료되었습니다.");
        setError("");
        // 폼 초기화
        setClubName(""); setClubType(""); setClubLocation(""); setClubSNS("");
        setClubPhoneNumber(""); setClubEmail(""); setClubCategory(""); 
        setClubDescription(""); setDetails("");
      }
    } catch (err) {
      // 서버 응답 메시지 출력
      console.error("❌ [API 요청 실패]:", err.response ? err.response.data : err);
      setError(err.response?.data?.message || "서버 오류가 발생했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <S.Container>
      <S.Header>
        <S.Logo>ACM</S.Logo>
      </S.Header>
      <S.Content>
        <S.Title>동아리 등록</S.Title>
        <S.Form onSubmit={handleSubmit}>
          {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
          {success && <S.SuccessMessage>{success}</S.SuccessMessage>}

          <S.Label>동아리 명</S.Label>
          <S.Input 
            placeholder="Tech Club" 
            value={clubName} 
            onChange={(e) => setClubName(e.target.value)}
            required
          />

          <S.Label>동아리 구분</S.Label>
          <S.Input 
            placeholder="중앙동아리 or 소학회" 
            value={clubType} 
            onChange={(e) => setClubType(e.target.value)}
            required
          />

          <S.Label>동아리 위치</S.Label>
          <S.Input 
            placeholder="신학생회관 229호" 
            value={clubLocation} 
            onChange={(e) => setClubLocation(e.target.value)}
            required
          />

          <S.Label>동아리 SNS</S.Label>
          <S.Input 
            placeholder="https://instagram.com/techclub" 
            value={clubSNS} 
            onChange={(e) => setClubSNS(e.target.value)}
          />

          <S.Label>연락처(휴대전화)</S.Label>
          <S.Input 
            placeholder="010-1234-5678" 
            value={clubPhoneNumber} 
            onChange={(e) => setClubPhoneNumber(e.target.value)}
          />

          <S.Label>연락처(이메일)</S.Label>
          <S.Input 
            placeholder="techclub@example.com" 
            value={clubEmail} 
            onChange={(e) => setClubEmail(e.target.value)}
          />

          <S.Label>동아리 카테고리</S.Label>
          <S.Input 
            placeholder="학술" 
            value={clubCategory} 
            onChange={(e) => setClubCategory(e.target.value)}
            required
          />

          <S.Label>동아리 설명</S.Label>
          <S.TextArea 
            placeholder="기술과 혁신을 사랑하는 사람들을 위한 동아리입니다." 
            value={clubDescription} 
            onChange={(e) => setClubDescription(e.target.value)}
            required
          />

          <S.Label>세부 카테고리</S.Label>
          <S.Input 
            placeholder="과학기술분과" 
            value={details} 
            onChange={(e) => setDetails(e.target.value)}
          />

          <S.SubmitButton type="submit">신청</S.SubmitButton>
        </S.Form>
      </S.Content>
    </S.Container>
  );
}

export default CentralClubPage;
