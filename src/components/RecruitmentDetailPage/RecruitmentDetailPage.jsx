import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import * as S from "./RecruitmentDetailPage.styles"; 

const API_URL = "https://ajouclubserver.shop/api/recruitments";

function RecruitmentDetailPage() {
  const { id } = useParams(); // ✅ 수정: recruitment_id ❌ → id ✅
  const [recruitment, setRecruitment] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecruitmentDetail = async () => {
      try {
        const response = await axios.get(`${API_URL}/${id}`); // ✅ URL 수정
        setRecruitment(response.data);
      } catch (err) {
        console.error("API Error:", err);
        setError("데이터를 불러오는 중 오류가 발생했습니다.");
      } finally {
        setLoading(false);
      }
    };
    fetchRecruitmentDetail();
  }, [id]);

  if (loading) return <S.Loading>Loading...</S.Loading>;
  if (error) return <S.Error>{error}</S.Error>;

  return (
    <S.Container>
      <S.Title>{recruitment.recruitment_title}</S.Title>
      <S.Info>모집 유형: {recruitment.recruitment_type}</S.Info>
      <S.Info>시작일: {recruitment.recruitment_start_date}</S.Info>
      <S.Info>종료일: {recruitment.recruitment_end_date}</S.Info>
      <S.Description>{recruitment.recruitment_description}</S.Description>
    </S.Container>
  );
}

export default RecruitmentDetailPage;
