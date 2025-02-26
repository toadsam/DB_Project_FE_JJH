import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import * as S from "./RecruitmentListPage.styles";

const API_URL = "https://ajouclubserver.shop/api/recruitments";

function RecruitmentListPage() {
  const [recruitments, setRecruitments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState("all");
  const [sortOrder, setSortOrder] = useState("latest");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRecruitments = async () => {
      try {
        const response = await axios.get(API_URL);
        setRecruitments(response.data);
      } catch (err) {
        console.error("API Error:", err);
        setError("데이터를 불러오는 중 오류가 발생했습니다.");
      } finally {
        setLoading(false);
      }
    };
    fetchRecruitments();
  }, []);

  const filteredRecruitments = recruitments.filter((item) => {
    if (filter === "all") return true;
    return item.recruitment_type === filter;
  });

  const sortedRecruitments = [...filteredRecruitments].sort((a, b) => {
    return sortOrder === "latest"
      ? new Date(b.recruitment_start_date) - new Date(a.recruitment_start_date)
      : new Date(a.recruitment_start_date) - new Date(b.recruitment_start_date);
  });

  if (loading) return <S.Loading>Loading...</S.Loading>;
  if (error) return <S.Error>{error}</S.Error>;

  return (
    <S.Container>
      <S.Title>모집공고 목록</S.Title>

      <S.FilterContainer>
        <S.Select onChange={(e) => setFilter(e.target.value)}>
          <option value="all">전체</option>
          <option value="상시모집">상시모집</option>
          <option value="수시모집">수시모집</option>
        </S.Select>
        <S.Select onChange={(e) => setSortOrder(e.target.value)}>
          <option value="latest">최신순</option>
          <option value="oldest">오래된순</option>
        </S.Select>
      </S.FilterContainer>

      <S.List>
        {sortedRecruitments.map((recruitment) => (
          <S.Card
            key={recruitment.recruitment_id}
            onClick={() => {
              if (recruitment.club_id) {
                navigate(`/clubinfo/${recruitment.club_id}`); // ✅ club_id 기반으로 이동
              } else {
                alert("이 모집공고에 연결된 동아리가 없습니다.");
              }
            }}
          >
            <S.CardTitle>{recruitment.recruitment_title}</S.CardTitle>
            <S.CardInfo>모집 유형: {recruitment.recruitment_type}</S.CardInfo>
            <S.CardInfo>시작일: {recruitment.recruitment_start_date}</S.CardInfo>
            <S.CardInfo>종료일: {recruitment.recruitment_end_date}</S.CardInfo>
          </S.Card>
        ))}
      </S.List>
    </S.Container>
  );
}

export default RecruitmentListPage;
