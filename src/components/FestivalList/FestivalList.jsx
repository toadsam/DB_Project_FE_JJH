import React, { useState, useEffect } from "react";
import * as S from "./FestivalList.styles"; // 스타일 정의
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
        const response = await axios.get(`${API_URL}/api/home/updatedevent`, {
          headers: {
            "Content-Type": "application/json",
            "ngrok-skip-browser-warning": "69420",
          },
        });
        console.log("API Response:", response.data);
        setEvents(
          Array.isArray(response.data)
            ? response.data.map((event) => ({
                ...event,
                image: event.image || defaultImage, // 기본 이미지 설정
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
      <S.Title1>새로운 행사가 올라왔어요 {">"}</S.Title1>
      {isMobile ? (
        // 모바일 환경: Swiper를 이용해 슬라이드(캐러셀)로 표시
        <Swiper
          spaceBetween={20}
          slidesPerView="auto"
          freeMode={true} // 드래그 시 자연스러운 스크롤 효과
          grabCursor={true} // 드래그 가능함을 표시
          simulateTouch={true} // 데스크탑에서도 터치 드래그처럼 작동
        >
          {events.map((event) => (
            <SwiperSlide key={event.id} style={{ width: "180px" }}>
              <S.EventBox>
                <S.ImageWrapper>
                  <img
                    src={event.image}
                    alt={event.title}
                    style={{
                      width: "100%",
                      height: "auto",
                      borderRadius: "10px",
                    }}
                  />
                </S.ImageWrapper>
                <S.Title>{event.title}</S.Title>
                <S.Location>{event.location}</S.Location>
                <S.Date>
                  {new Date(event.event_date).toLocaleDateString()}
                </S.Date>
              </S.EventBox>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        // 데스크탑 환경: 기존 그리드 레이아웃
        events.map((event) => (
          <S.EventBox key={event.id}>
            <S.ImageWrapper>
              <img
                src={event.image}
                alt={event.title}
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "10px",
                }}
              />
            </S.ImageWrapper>
            <S.Title>{event.title}</S.Title>
            <S.Location>{event.location}</S.Location>
            <S.Date>{new Date(event.event_date).toLocaleDateString()}</S.Date>
          </S.EventBox>
        ))
      )}
    </S.Container>
  );
}

export default FestivalList;
