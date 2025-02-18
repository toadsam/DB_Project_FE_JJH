import React, { useState, useEffect } from "react";
import axios from "axios";
import * as S from "./ClubApply.styles";

const API_URL = process.env.REACT_APP_API_URL;

function ClubApply({ club_id }) {
  const [currentRecruitment, setCurrentRecruitment] = useState(null);
  const [pastRecruitment, setPastRecruitment] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pastRecruitmentOpen, setPastRecruitmentOpen] = useState(false);

  useEffect(() => {
    const fetchRecruitment = async () => {
      try {
        console.log("Fetching recruitment info for club_id:", club_id);
        const response = await axios.get(
          `${API_URL}/api/clubs/${club_id}/recruitments`,
          {
            headers: {
              "Content-Type": "application/json",
              "ngrok-skip-browser-warning": "69420",
            },
          }
        );

        // 만약 2개 이상의 모집공고가 있다면,
        // 최신 공고는 currentRecruitment, 이전 공고는 pastRecruitment로 설정합니다.
        if (response.data.length > 1) {
          const sortedData = response.data.sort(
            (a, b) => new Date(b.created_at) - new Date(a.created_at)
          );
          setCurrentRecruitment(sortedData[0]);
          setPastRecruitment(sortedData[1]);
        } else if (response.data.length === 1) {
          setCurrentRecruitment(response.data[0]);
        }
        console.log("Current:", response.data[0], "Past:", response.data[1]);
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
    if (!endDate) return "";
    const today = new Date();
    const end = new Date(endDate);
    const diffTime = end - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? `D-${diffDays}` : "마감";
  };

  const formatText = (text) => {
    return text.replace(/\\n/g, "\n").replace(/\n/g, "\n");
  };

  if (loading) return <S.Loading>Loading...</S.Loading>;
  if (error) return <S.Error>{error}</S.Error>;

  return (
    <S.ApplyContainer>
      {/* 최신(현재) 모집공고 */}
      {currentRecruitment ? (
        <>
          <S.TitleContainer>
            <S.Title>
              {currentRecruitment.recruitment_title || "모집 공고 제목"}
            </S.Title>
            {currentRecruitment.recruitment_end_date && (
              <S.DaysLeftBadge>
                {calculateDaysLeft(currentRecruitment.recruitment_end_date)}
              </S.DaysLeftBadge>
            )}
          </S.TitleContainer>

          {/* 이미지가 있으면 보여줌 */}
          {currentRecruitment.recruitment_image_url && (
            <S.RecruitmentImage
              src={currentRecruitment.recruitment_image_url}
              alt="Recruitment"
            />
          )}

          <S.Description>
            {formatText(currentRecruitment.recruitment_description) ||
              "모집 공고 내용이 없습니다."}
          </S.Description>

          <S.Section>
            <S.SectionTitle>📅 모집 마감</S.SectionTitle>
            <S.SectionContent>
              {currentRecruitment.recruitment_end_date || "상시 모집"}
            </S.SectionContent>
          </S.Section>
        </>
      ) : (
        <S.Error>❌ 모집 공고 정보를 찾을 수 없습니다.</S.Error>
      )}

      {/* 전년도 모집공고 (드롭다운) */}
      {pastRecruitment && (
        <S.PastRecruitmentContainer>
          <S.PastTitle
            onClick={() => setPastRecruitmentOpen(!pastRecruitmentOpen)}
          >
            🕰️전년도 모집 공고 ▼
          </S.PastTitle>
          {pastRecruitmentOpen && (
            <>
              <br />
              <S.Title style={{ color: "black" }}>
                {pastRecruitment.recruitment_title}
              </S.Title>
              <S.PastDescription>
                {formatText(pastRecruitment.recruitment_description) ||
                  "모집 공고 내용이 없습니다."}
              </S.PastDescription>
            </>
          )}
        </S.PastRecruitmentContainer>
      )}
    </S.ApplyContainer>
  );
}

export default ClubApply;
