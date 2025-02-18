import React, { useState } from "react";
import axios from "axios";
import * as S from "./CentralClubPage.styles";

function CentralClubPage() {
  const [clubName, setClubName] = useState("");
  const clubType = "중앙동아리"; // 동아리 구분을 중앙동아리로 고정
  const [clubLocation, setClubLocation] = useState("");
  const [clubSNS, setClubSNS] = useState("");
  const [clubPhoneNumber, setClubPhoneNumber] = useState("");
  const [clubEmail, setClubEmail] = useState("");
  const [clubCategory, setClubCategory] = useState("");
  const [clubDescription, setClubDescription] = useState("");
  const [details, setDetails] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const API_URL = "http://43.203.79.210:5001/api/clubs/central";

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!clubName || !clubLocation || !clubCategory || !clubDescription) {
      setError("필수 항목을 모두 입력해주세요.");
      return;
    }

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
        setClubName(""); setClubLocation(""); setClubSNS("");
        setClubPhoneNumber(""); setClubEmail(""); setClubCategory("");
        setClubDescription(""); setDetails("");
      }
    } catch (err) {
      if (err.response) {
        console.error("❌ [서버 응답 오류]:", err.response.data);
        console.error("❌ [서버 상태 코드]:", err.response.status);
        console.error("❌ [서버 응답 헤더]:", err.response.headers);
        setError(`서버 오류: ${err.response.data.message || '알 수 없는 오류 발생'}`);
      } else if (err.request) {
        console.error("❌ [요청 오류]: 요청이 서버에 도달하지 못했습니다.", err.request);
        setError("서버에 연결할 수 없습니다. 네트워크 상태를 확인하세요.");
      } else {
        console.error("❌ [설정 오류]:", err.message);
        setError("요청을 설정하는 중 오류가 발생했습니다.");
      }
    }
  };

  return (
    <S.Container>
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
          <S.Input value={clubType} disabled />

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
          <S.Select 
            value={clubCategory} 
            onChange={(e) => setClubCategory(e.target.value)}
            required
          >
            <option value="">카테고리를 선택하세요</option>
            <option value="스포츠">스포츠</option>
            <option value="학술">학술</option>
            <option value="종교">종교</option>
            <option value="문화/예술">문화/예술</option>
            <option value="창업">창업</option>
            <option value="사교">사교</option>
            <option value="봉사">봉사</option>
          </S.Select>

          <S.Label>동아리 설명</S.Label>
          <S.TextArea 
            placeholder="기술과 혁신을 사랑하는 사람들을 위한 동아리입니다." 
            value={clubDescription} 
            onChange={(e) => setClubDescription(e.target.value)}
            required
          />

          <S.Label>세부 카테고리</S.Label>
          <S.Select 
            value={details} 
            onChange={(e) => setDetails(e.target.value)}
          >
            <option value="">세부 카테고리를 선택하세요</option>
            <option value="과학기술분과">과학기술분과</option>
            <option value="레저스포츠분과">레저스포츠분과</option>
            <option value="사회활동분과">사회활동분과</option>
            <option value="연행예술분과">연행예술분과</option>
            <option value="준동아리">준동아리</option>
            <option value="종교분과">종교분과</option>
            <option value="창작전시분과">창작전시분과</option>
            <option value="체육분과">체육분과</option>
            <option value="학술언론분과">학술언론분과</option>
          </S.Select>

          <S.SubmitButton type="submit">신청</S.SubmitButton>
        </S.Form>
      </S.Content>
    </S.Container>
  );
}

export default CentralClubPage;

