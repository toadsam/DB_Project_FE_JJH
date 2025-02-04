import React, { useState } from "react";
import axios from "axios"; // API 연동 추가
import * as S from "./SmallClubPage.styles";

function SmallClubPage() {
  const [clubName, setClubName] = useState("");
  const [clubType] = useState("소학회"); // 동아리 구분 (변경 불가)
  const [clubLocation, setClubLocation] = useState("");
  const [clubSNS, setClubSNS] = useState("");
  const [clubPhoneNumber, setClubPhoneNumber] = useState("");
  const [clubEmail, setClubEmail] = useState("");
  const [clubCategory, setClubCategory] = useState("");
  const [clubDescription, setClubDescription] = useState("");
  const [departmentName, setDepartmentName] = useState("");
  const [recruitmentScope, setRecruitmentScope] = useState("");

  const [error, setError] = useState(""); // 오류 메시지 상태
  const [success, setSuccess] = useState(""); // 성공 메시지 상태

  const API_URL = process.env.REACT_APP_API_URL || "http://43.203.79.210:5001/api/clubs/academic"; // 환경변수 활용

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 필수 입력 검증
    if (!clubName || !clubLocation || !clubCategory || !clubDescription) {
      setError("필수 입력 항목을 모두 작성해주세요.");
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
      department_name: departmentName,
      recruitment_scope: recruitmentScope,
    };

    try {
      console.log("🔍 [보내는 데이터]:", requestData);  // 요청 데이터 출력
  
      const response = await axios.post(API_URL, requestData, {
        headers: { "Content-Type": "application/json" },
      });
  
      console.log("✅ [서버 응답]:", response.data);  // 성공 시 서버 응답 출력
  
      if (response.status === 201) {
        setSuccess("소학회 등록 신청이 완료되었습니다.");
        setClubName("");
        setClubLocation("");
        setClubSNS("");
        setClubPhoneNumber("");
        setClubEmail("");
        setClubCategory("");
        setClubDescription("");
        setDepartmentName("");
        setRecruitmentScope("");
        setError("");
      }
    } catch (err) {
      // 에러 메시지와 서버 응답 상세 출력
      if (err.response) {
        console.error("❌ [서버 응답 에러]:", err.response.data);  // 서버가 반환한 오류 메시지
        console.error("❌ [서버 상태 코드]:", err.response.status);  // 서버 상태 코드 출력
        console.error("❌ [서버 응답 헤더]:", err.response.headers);  // 응답 헤더 출력
  
        setError(`서버 오류: ${err.response.data.message || '알 수 없는 오류'}`);
      } else if (err.request) {
        console.error("❌ [요청 오류]: 요청이 서버에 도달하지 못했습니다.", err.request);
        setError("서버에 연결할 수 없습니다. 네트워크 상태를 확인하세요.");
      } else {
        console.error("❌ [설정 오류]:", err.message);
        setError("요청 설정 중 오류가 발생했습니다.");
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
          <S.Input placeholder="Media Club" value={clubName} onChange={(e) => setClubName(e.target.value)} required />

          <S.Label>동아리 구분</S.Label>
          <S.Input value="소학회" disabled />

          <S.Label>동아리 위치</S.Label>
          <S.Input placeholder="소프트웨어융합대학 102호" value={clubLocation} onChange={(e) => setClubLocation(e.target.value)} required />

          <S.Label>동아리 SNS</S.Label>
          <S.Input placeholder="https://instagram.com/mediaclub" value={clubSNS} onChange={(e) => setClubSNS(e.target.value)} />

          <S.Label>연락처(휴대전화)</S.Label>
          <S.Input placeholder="010-1234-5678" value={clubPhoneNumber} onChange={(e) => setClubPhoneNumber(e.target.value)} />

          <S.Label>연락처(이메일)</S.Label>
          <S.Input placeholder="mediaclub@example.com" value={clubEmail} onChange={(e) => setClubEmail(e.target.value)} />

          <S.Label>동아리 카테고리</S.Label>
          <S.Input placeholder="학술" value={clubCategory} onChange={(e) => setClubCategory(e.target.value)} required />

          <S.Label>동아리 설명</S.Label>
          <S.TextArea placeholder="미디어 관련 활동을 중심으로 하는 학술 소학회입니다." value={clubDescription} onChange={(e) => setClubDescription(e.target.value)} required />

          <S.Label>소속 학과</S.Label>
          <S.Input placeholder="디지털미디어학과" value={departmentName} onChange={(e) => setDepartmentName(e.target.value)} />

          <S.Label>모집 범위</S.Label>
          <S.Input placeholder="전공무관" value={recruitmentScope} onChange={(e) => setRecruitmentScope(e.target.value)} />

          <S.SubmitButton type="submit">신청</S.SubmitButton>
        </S.Form>
      </S.Content>
    </S.Container>
  );
}

export default SmallClubPage;
