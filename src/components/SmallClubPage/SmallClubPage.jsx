import React, { useState } from "react";
import axios from "axios"; // API 연동 추가
import * as S from "./SmallClubPage.styles";

function SmallClubPage() {
  const [clubType] = useState("소학회"); // 동아리 구분 (변경 불가)
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [subCategoryType, setSubCategoryType] = useState("");
  const [clubName, setClubName] = useState("");
  const [leaderName, setLeaderName] = useState("");
  const [leaderId, setLeaderId] = useState("");
  const [phone, setPhone] = useState("");
  const [messageLocation, setMessageLocation] = useState("");
  const [email, setEmail] = useState("");
  const [clubLink, setClubLink] = useState(null); // 동아리 연계 파일
  const [error, setError] = useState(""); // 오류 메시지 상태
  const [success, setSuccess] = useState(""); // 성공 메시지 상태

  const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api/small-clubs"; // 환경변수 활용

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 필수 입력 검증
    if (!category || !subCategory || !clubName || !leaderName || !leaderId) {
      setError("필수 입력 항목을 모두 작성해주세요.");
      return;
    }

    const formData = new FormData();
    formData.append("clubType", clubType);
    formData.append("category", category);
    formData.append("subCategory", subCategory);
    formData.append("subCategoryType", subCategoryType);
    formData.append("clubName", clubName);
    formData.append("leaderName", leaderName);
    formData.append("leaderId", leaderId);
    formData.append("phone", phone || null); // 연락처는 필수 아님
    formData.append("messageLocation", messageLocation);
    formData.append("email", email);
    if (clubLink) {
      formData.append("clubLink", clubLink);
    }

    try {
      const response = await axios.post(API_URL, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (response.status === 201) {
        setSuccess("소학회 등록 신청이 완료되었습니다.");
        setCategory("");
        setSubCategory("");
        setSubCategoryType("");
        setClubName("");
        setLeaderName("");
        setLeaderId("");
        setPhone("");
        setMessageLocation("");
        setEmail("");
        setClubLink(null);
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
        <S.Title>동아리 등록</S.Title>
        <S.Form onSubmit={handleSubmit}>
          {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
          {success && <S.SuccessMessage>{success}</S.SuccessMessage>}

          <S.Label>동아리 구분</S.Label>
          <S.Input value="소학회" disabled />

          <S.Label>동아리 카테고리</S.Label>
          <S.Input placeholder="봉사" value={category} onChange={(e) => setCategory(e.target.value)} required />

          <S.Label>소속된 세부 카테고리</S.Label>
          <S.Input placeholder="소프트웨어융합대학" value={subCategory} onChange={(e) => setSubCategory(e.target.value)} required />

          <S.Label>소속된 세부 카테고리 구분</S.Label>
          <S.Input placeholder="디지털미디어학과" value={subCategoryType} onChange={(e) => setSubCategoryType(e.target.value)} />

          <S.Label>동아리 명</S.Label>
          <S.Input placeholder="Sweat" value={clubName} onChange={(e) => setClubName(e.target.value)} required />

          <S.Label>대표 성명</S.Label>
          <S.Input placeholder="홍길동" value={leaderName} onChange={(e) => setLeaderName(e.target.value)} required />

          <S.Label>대표 학번</S.Label>
          <S.Input placeholder="202000000" value={leaderId} onChange={(e) => setLeaderId(e.target.value)} required />

          <S.Label>연락처(휴대전화)</S.Label>
          <S.Input placeholder="010-0000-0000" value={phone} onChange={(e) => setPhone(e.target.value)} />

          <S.Label>문자 가능한 장소</S.Label>
          <S.Input placeholder="전공과목관" value={messageLocation} onChange={(e) => setMessageLocation(e.target.value)} />

          <S.Label>연락처(이메일)</S.Label>
          <S.Input placeholder="AjouEmail@ajou.ac.kr" value={email} onChange={(e) => setEmail(e.target.value)} />

          <S.Label>동아리 연계</S.Label>
          <S.UploadBox>
            <S.UploadIcon onClick={() => document.getElementById("fileInput").click()}>+</S.UploadIcon>
            <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              onChange={(e) => setClubLink(e.target.files[0])}
            />
          </S.UploadBox>

          <S.SubmitButton type="submit">신청</S.SubmitButton>
        </S.Form>
      </S.Content>
    </S.Container>
  );
}

export default SmallClubPage;
