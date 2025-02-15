import React, { useState } from "react";
import axios from "axios";
import * as S from "./RecruitmentPage.styles";

function RecruitmentPage() {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("상시모집");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [selectedItem, setSelectedItem] = useState("모집 공고"); // 현재 선택된 항목

  const API_URL = `http://43.203.79.210:5001/api/recruitments/19`;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const recruitmentStartDate =
      type === "상시모집" ? new Date().toISOString().split("T")[0] : startDate;
    const recruitmentEndDate = type === "상시모집" ? "2099-12-31" : endDate;

    if (!title || !description || (!startDate && type === "수시모집") || (!endDate && type === "수시모집")) {
      setError("제목, 모집 내용, 시작일(수시모집), 종료일(수시모집)은 필수 입력 사항입니다.");
      return;
    }

    const requestData = {
      recruitment_title: title,
      recruitment_type: type,
      recruitment_phone_number: phoneNumber || null,
      recruitment_email: email || null,
      recruitment_start_date: recruitmentStartDate,
      recruitment_end_date: recruitmentEndDate,
      recruitment_description: description,
    };

    try {
      console.log("🔹 [API 요청 데이터]:", requestData);

      const response = await axios.post(API_URL, requestData, {
        headers: { "Content-Type": "application/json" },
      });

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
        {/* ✅ 새로운 카테고리 디자인 적용 */}
        <S.Sidebar>
          <S.SidebarTitle>카테고리</S.SidebarTitle>
          <S.SidebarList>
            {["동아리 소개", "모집 공고", "행사 공고", "중앙동아리", "소학회", "모집공고", "부원관리", "신청목록"].map(
              (item, index) => (
                <S.SidebarItem
                  key={index}
                  $isSelected={selectedItem === item}
                  onClick={() => setSelectedItem(item)}
                >
                  {item}
                </S.SidebarItem>
              )
            )}
          </S.SidebarList>
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

            {type === "수시모집" && (
              <>
                <S.Label>모집 시작일</S.Label>
                <S.Input 
                  type="date" 
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  required={type === "수시모집"} 
                />

                <S.Label>모집 종료일</S.Label>
                <S.Input 
                  type="date" 
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  required={type === "수시모집"} 
                />
              </>
            )}

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
