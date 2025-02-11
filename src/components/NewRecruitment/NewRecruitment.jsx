import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./NewRecruitment.styles"; // 스타일 정의
import axios from "axios";
import defaultImage from "../../asset/mainLogo.png"; // 기본 이미지 불러오기

// Swiper 관련 import
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const API_URL = process.env.REACT_APP_API_URL;

function FestivalList() {
  const [events, setEvents] = useState([]); // API 데이터 상태 관리
  const [loading, setLoading] = useState(false); // 로딩 상태 관리
  const [error, setError] = useState(null); // 에러 상태 관리
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const navigate = useNavigate();

  // 창 크기에 따라 모바일 여부 업데이트
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `${API_URL}/api/home/updatedrecruitment`,
          {
            headers: {
              "Content-Type": "application/json",
              "ngrok-skip-browser-warning": "69420",
            },
          }
        );

        setEvents(
          Array.isArray(response.data)
            ? response.data.map((event) => ({
                id: event.recruitment_id,
                club_id: event.club_id, // club_id 추가
                title: event.recruitment_title || "제목 없음",
                endDate:
                  event.recruitment_end_date === "0000-00-00" ||
                  event.recruitment_end_date === null
                    ? "마감일 미정"
                    : new Date(event.recruitment_end_date).toLocaleDateString(),
                main_image: event.main_image || defaultImage,
              }))
            : []
        );
      } catch (err) {
        setError(err.response?.data?.message || err.message);
        setEvents([]); // 에러 발생 시 빈 배열로 설정
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) return <S.Container>Loading...</S.Container>;
  if (error) return <S.Container>Error: {error}</S.Container>;

  return (
    <S.Container>
      <S.Title1>새로운 모집공고가 올라왔어요 {">"}</S.Title1>
      {isMobile ? (
        // 모바일 환경일 경우 Swiper를 이용한 슬라이드 방식 적용
        <Swiper
          spaceBetween={20}
          slidesPerView="auto"
          freeMode={true}      // 드래그 시 자연스러운 스크롤 효과
          grabCursor={true}    // 드래그 가능함을 표시
          simulateTouch={true} // 데스크탑에서도 터치 드래그처럼 작동
        >
          {events.map((event) => (
            <SwiperSlide key={event.id} style={{ width: "180px" }}>
              <S.EventBox
                onClick={() =>
                  navigate(`/clubinfo/${event.club_id}`, {
                    state: { defaultTab: "모집 공고" },
                  })
                }
              >
                <S.ImageWrapper>
                  <img
                    src={event.main_image}
                    alt={event.title}
                    style={{ width: "100%", height: "auto", borderRadius: "10px" }}
                  />
                </S.ImageWrapper>
                <S.Title>{event.title}</S.Title>
                <S.Date>마감일자: {event.endDate}</S.Date>
              </S.EventBox>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        // 데스크탑 환경일 경우 기존 그리드 레이아웃 방식 적용
        events.map((event) => (
          <S.EventBox
            key={event.id}
            onClick={() =>
              navigate(`/clubinfo/${event.club_id}`, {
                state: { defaultTab: "모집 공고" },
              })
            }
          >
            <S.ImageWrapper>
              <img
                src={event.main_image}
                alt={event.title}
                style={{ width: "100%", height: "auto", borderRadius: "10px" }}
              />
            </S.ImageWrapper>
            <S.Title>{event.title}</S.Title>
            <S.Date>마감일자: {event.endDate}</S.Date>
          </S.EventBox>
        ))
      )}
    </S.Container>
  );
}

export default FestivalList;
