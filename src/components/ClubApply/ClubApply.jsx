import React, { useState, useEffect } from "react";
import axios from "axios";
import * as S from "./ClubApply.styles";

const API_URL = process.env.REACT_APP_API_URL;

// 이미지 캐러셀 컴포넌트
function ImageCarousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <S.ImageCarouselContainer>
      <S.LeftArrow onClick={prevImage}>&lt;</S.LeftArrow>
      <S.RecruitmentImage
        src={images[currentIndex]}
        alt={`Recruitment ${currentIndex + 1}`}
      />
      <S.RightArrow onClick={nextImage}>&gt;</S.RightArrow>
    </S.ImageCarouselContainer>
  );
}

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

  // 모집공고의 이미지 렌더링 함수
  const renderRecruitmentImages = () => {
    let images = [];
    // recruitment_images가 있으면 쉼표로 구분된 여러 이미지 URL로 간주
    if (currentRecruitment && currentRecruitment.recruitment_images) {
      images = currentRecruitment.recruitment_images
        .split(",")
        .map((url) => url.trim())
        .filter((url) => url !== "");
    }
    // recruitment_image_url이 단일 이미지일 경우
    else if (currentRecruitment && currentRecruitment.recruitment_image_url) {
      images = [currentRecruitment.recruitment_image_url];
    }
    if (images.length === 0) return null;
    if (images.length === 1) {
      return (
        <S.ImageContainer style={{ justifyContent: "center" }}>
          <S.RecruitmentImage src={images[0]} alt="Recruitment" />
        </S.ImageContainer>
      );
    }
    return <ImageCarousel images={images} />;
  };

  if (loading) return <S.Loading>Loading...</S.Loading>;
  if (error) return <S.Error>{error}</S.Error>;

  return (
    <S.ApplyContainer>
      {/* 최신 모집공고 */}
      {currentRecruitment ? (
        <>
          <S.TitleContainer>
            <S.Title>
              {currentRecruitment.recruitment_title || "모집 공고 제목"}
            </S.Title>
            <S.ActionContainer>
              {currentRecruitment.recruitment_end_date && (
                <S.DaysLeftBadge>
                  {calculateDaysLeft(currentRecruitment.recruitment_end_date)}
                </S.DaysLeftBadge>
              )}
              {currentRecruitment.application_url && (
                <S.ApplyButton
                  href={currentRecruitment.application_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  신청하기
                </S.ApplyButton>
              )}
            </S.ActionContainer>
          </S.TitleContainer>

          {/* 이미지 렌더링 */}
          {renderRecruitmentImages()}

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
