import React, { useState } from "react";
import axios from "axios"; // API 요청을 위한 axios 추가
import * as S from "./RecruitmentPage.styles";

function RecruitmentPage() {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("상시모집"); // 🔥 변경: club_category로 사용됨
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(""); // 오류 메시지 상태
  const [success, setSuccess] = useState(""); // 성공 메시지 상태

  // ✅ 클럽 ID를 설정 (이 값을 실제 환경에 맞게 변경해야 함)
  //const clubId = "123"; // 👉 여기에 실제 club_id를 넣어야 함!

  // ✅ API URL 변경 (club_id 추가)
  const API_URL = `http://43.203.79.210:5001/api/recruitments/19`;

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 필수 입력 검증
    if (!title || !description || !startDate || !endDate) {
      setError("제목, 모집 내용, 시작일, 종료일은 필수 입력 사항입니다.");
      return;
    }

    const requestData = {
      recruitment_title: title,
      recruitment_type: type, // 🔥 변경: `recruitment_type` → `club_category`
      recruitment_phone_number: phoneNumber || null,
      recruitment_email: email || null,
      recruitment_start_date: startDate,
      recruitment_end_date: endDate,
      recruitment_description: description,
    };

    try {
      console.log("🔹 [API 요청 데이터]:", requestData); // 요청 데이터 콘솔 확인

      const response = await axios.post(API_URL, requestData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("✅ [API 응답]:", response.data);

      if (response.status === 201) {
        setSuccess("모집공고가 성공적으로 등록되었습니다.");
        setTitle("");
        setType("상시모집");
        setPhoneNumber("");
        setEmail("");
        setStartDate("");
        setEndDate("");
        setDescription("");
        setError("");
      }
    } catch (err) {
      console.error("❌ [API 요청 실패]:", err.response ? err.response.data : err);
      setError("서버 오류가 발생했습니다. 다시 시도해주세요.");
    }
  };

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

            <S.Label>모집 유형</S.Label>
            <S.Select value={type} onChange={(e) => setType(e.target.value)}>
              <option value="상시모집">상시모집</option>
              <option value="수시모집">수시모집</option>
            </S.Select>

            <S.Label>연락처 (선택 입력)</S.Label>
            <S.Input 
              type="text" 
              placeholder="010-0000-0000"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />

            <S.Label>이메일 (선택 입력)</S.Label>
            <S.Input 
              type="email" 
              placeholder="example@ajou.ac.kr"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <S.Label>모집 시작일</S.Label>
            <S.Input 
              type="date" 
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              required
            />

            <S.Label>모집 종료일</S.Label>
            <S.Input 
              type="date" 
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              required
            />

            <S.Label>모집 내용</S.Label>
            <S.TextArea 
              placeholder="모집에 대한 상세 설명을 입력하세요."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />

            <S.SubmitButton type="submit">게시</S.SubmitButton>
          </S.Form>
        </S.Main>
      </S.Content>
    </S.Container>
  );
}

export default RecruitmentPage;
//성공했으니깐 모집공고 창으로 가도록 만들기!

