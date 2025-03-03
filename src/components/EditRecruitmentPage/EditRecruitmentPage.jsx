import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import * as S from "./EditRecruitmentPage.styles"; // 스타일 파일 추가

const API_BASE_URL = "http://43.203.79.210:5001/api";

function EditRecruitmentPage() {
  const { club_id } = useParams();
  const navigate = useNavigate();
  const [clubName, setClubName] = useState("동아리 이름");
  const [title, setTitle] = useState("");
  const [type, setType] = useState("상시모집");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const API_URL = `${API_BASE_URL}/recruitments/${club_id}`;

  useEffect(() => {
    const fetchClubInfo = async () => {
      try {
        const clubResponse = await axios.get(`${API_BASE_URL}/clubs/${club_id}`);
        setClubName(clubResponse.data.club_name || "동아리 이름");

        const recruitmentResponse = await axios.get(API_URL);
        const data = recruitmentResponse.data;

        setTitle(data.recruitment_title || "");
        setType(data.recruitment_type || "상시모집");
        setPhoneNumber(data.recruitment_phone_number || "");
        setEmail(data.recruitment_email || "");
        setStartDate(data.recruitment_start_date || "");
        setEndDate(data.recruitment_end_date || "");
        setDescription(data.recruitment_description || "");
      } catch (err) {
        console.error("❌ 데이터 불러오기 실패:", err);
        setError("데이터를 불러오는 중 오류가 발생했습니다.");
      }
    };

    fetchClubInfo();
  }, [club_id, API_URL]); // ✅ API_URL 포함하여 경고 해결

  const handleUpdate = async (e) => {
    e.preventDefault();

    if (!title || !description || (!startDate && type === "수시모집") || (!endDate && type === "수시모집")) {
      setError("제목, 모집 내용, 시작일(수시모집), 종료일(수시모집)은 필수 입력 사항입니다.");
      return;
    }

    const updatedData = {
      recruitment_title: title,
      recruitment_type: type,
      recruitment_phone_number: phoneNumber || null,
      recruitment_email: email || null,
      recruitment_start_date: type === "상시모집" ? new Date().toISOString().split("T")[0] : startDate,
      recruitment_end_date: type === "상시모집" ? "2099-12-31" : endDate,
      recruitment_description: description,
    };

    try {
      await axios.put(API_URL, updatedData, { headers: { "Content-Type": "application/json" } });
      setSuccess("모집공고가 성공적으로 수정되었습니다.");
      setTimeout(() => navigate(`/clubinfo/${club_id}`), 2000); // 2초 후 동아리 정보 페이지로 이동
    } catch (err) {
      console.error("❌ 수정 실패:", err);
      setError("수정 중 오류가 발생했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <S.Container>
      <S.Content>
        <S.Main>
          <S.Title>
            <S.Highlight>{clubName}</S.Highlight> - 모집공고 수정
          </S.Title>
          <S.Form onSubmit={handleUpdate}>
            {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
            {success && <S.SuccessMessage>{success}</S.SuccessMessage>}

            <S.Label>제목</S.Label>
            <S.Input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />

            <S.Label>모집 유형</S.Label>
            <S.Select value={type} onChange={(e) => setType(e.target.value)}>
              <option value="상시모집">상시모집</option>
              <option value="수시모집">수시모집</option>
            </S.Select>

            <S.Label>연락처 (선택 입력)</S.Label>
            <S.Input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />

            <S.Label>이메일 (선택 입력)</S.Label>
            <S.Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

            {type === "수시모집" && (
              <>
                <S.Label>모집 시작일</S.Label>
                <S.Input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} required />

                <S.Label>모집 종료일</S.Label>
                <S.Input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} required />
              </>
            )}

            <S.Label>모집 내용</S.Label>
            <S.TextArea value={description} onChange={(e) => setDescription(e.target.value)} required />

            <S.SubmitButton type="submit">수정 완료</S.SubmitButton>
          </S.Form>
        </S.Main>
      </S.Content>
    </S.Container>
  );
}

export default EditRecruitmentPage;
