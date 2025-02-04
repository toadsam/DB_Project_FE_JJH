import React, { useState, useEffect } from "react";
import axios from "axios";
import * as S from "./ClubApply.styles";

const API_URL = process.env.REACT_APP_API_URL;

function ClubApply({ club_id }) {
  const [recruitmentInfo, setRecruitmentInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecruitment = async () => {
      try {
        console.log("Fetching recruitment info for club_id:", club_id);
        const response = await axios.get(
          `${API_URL}/api/clubs/${club_id}/recruitment`,
          {
            headers: {
              "Content-Type": "application/json",
              "ngrok-skip-browser-warning": "69420",
            },
          }
        );

        setRecruitmentInfo(response.data.length > 0 ? response.data[0] : null);
        console.log(response.data[0]);
      } catch (err) {
        setError("데이터를 불러오는 중 오류가 발생했습니다.");
      } finally {
        setLoading(false);
      }
    };

    if (club_id) {
      fetchRecruitment();
    }
  }, [club_id]);

  const calculateDaysLeft = (endDate) => {
    const today = new Date();
    const end = new Date(endDate);
    const diffTime = end - today; // 시간 차이 계산 (밀리초)
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // 밀리초를 일수로 변환
    return diffDays > 0 ? `D-${diffDays}` : "마감";
  };

  if (loading) return <S.Loading>Loading...</S.Loading>;
  if (error) return <S.Error>{error}</S.Error>;

  return (
    <S.ApplyContainer>
      {recruitmentInfo ? (
        <>
          <S.TitleContainer>
            <S.Title>
              {recruitmentInfo.recruitment_title || "모집 공고 제목"}
            </S.Title>
            {recruitmentInfo.recruitment_end_date && (
              <S.DaysLeftBadge>
                {calculateDaysLeft(recruitmentInfo.recruitment_end_date)}
              </S.DaysLeftBadge>
            )}
          </S.TitleContainer>

          <S.Description>
            {recruitmentInfo.recruitment_description ||
              "모집 공고 내용이 없습니다."}
          </S.Description>

          <S.Section>
            <S.SectionTitle>📅 모집 마감</S.SectionTitle>
            <S.SectionContent>
              {recruitmentInfo.recruitment_end_date || "마감일 정보 없음"}
            </S.SectionContent>
          </S.Section>
        </>
      ) : (
        <S.Error>모집 공고 정보를 찾을 수 없습니다.</S.Error>
      )}
    </S.ApplyContainer>
  );
}

export default ClubApply;
