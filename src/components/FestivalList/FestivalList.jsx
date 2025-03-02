import React, { useState, useEffect } from "react";
import * as S from "./FestivalList.styles"; // 수정된 스타일 파일 사용
import axios from "axios";
import defaultImage from "../../asset/mainLogo.png";
import { useNavigate } from "react-router-dom";

// Swiper 관련 import
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const API_URL = process.env.REACT_APP_API_URL;

function FestivalList() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

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
        setEvents(
          Array.isArray(response.data)
            ? response.data.map((event) => ({
                ...event,
                main_image: event.main_image || defaultImage,
              }))
            : []
        );
      } catch (err) {
        setError(err.response?.data?.message || err.message);
        setEvents([]);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) return <S.Container>Loading...</S.Container>;
  if (error) return <S.Container>Error: {error}</S.Container>;

  const handleEventClick = (event) => {
    navigate(`/clubinfo/${event.club_id}`, {
      state: { defaultTab: "행사 공고" },
    });
  };

  return (
    <>
      {/* 상단 제목 및 더보기 버튼 */}
      <S.TitleRow>
        <S.TitleText>행사 소식 확인하기</S.TitleText>
        <S.MoreButton onClick={() => navigate("/eventinfo")}>
          더보기
        </S.MoreButton>
      </S.TitleRow>

      {/* Swiper를 활용한 가로 스와이프 슬라이드 */}
      <S.Container>
        <Swiper
          spaceBetween={20}
          slidesPerView="auto"
          freeMode={true}
          grabCursor={true}
          simulateTouch={true}
          pagination={{ clickable: true }}
          mousewheel={true}
          modules={[Navigation, Pagination, Mousewheel]}
          style={{ justifyContent: "flex-start" }}
        >
          {events.map((event) => (
            <SwiperSlide key={event.id} style={{ width: "180px" }}>
              <S.EventBox onClick={() => handleEventClick(event)}>
                <S.ImageWrapper style={{ height: "180px", overflow: "hidden" }}>
                  <img
                    src={event.main_image}
                    alt={event.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "10px",
                    }}
                  />
                </S.ImageWrapper>
                <S.Title>
                  {event.title.length > 22
                    ? `${event.title.substring(0, 22)}...`
                    : event.title}
                </S.Title>
                <S.Location>{event.location}</S.Location>
                <S.Date>
                  {new Date(event.event_date).toLocaleDateString()}
                </S.Date>
              </S.EventBox>
            </SwiperSlide>
          ))}
        </Swiper>
      </S.Container>
    </>
  );
}

export default FestivalList;
