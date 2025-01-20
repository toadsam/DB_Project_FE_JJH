import React, { useState, useEffect } from "react";
import * as S from "./NewRecruitment.styles"; // 스타일 정의
import axios from "axios";
import defaultImage from "../../asset/mainLogo.png"; // 기본 이미지 불러오기

function FestivalList() {
  const [events, setEvents] = useState([]); // API 데이터 상태 관리
  const [loading, setLoading] = useState(false); // 로딩 상태 관리
  const [error, setError] = useState(null); // 에러 상태 관리

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true); // 로딩 시작
      try {
        const response = await axios.get(
          "http://localhost:5001/api/recruitments",
          {
            headers: {
              "Content-Type": "application/json",
              "ngrok-skip-browser-warning": "69420",
            },
          }
        );
        console.log("API Response:", response.data); // 디버깅
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
        setLoading(false); // 로딩 종료
      }
    };

    fetchEvents();
  }, []);

  if (loading) return <S.Container>Loading...</S.Container>;
  if (error) return <S.Container>Error: {error}</S.Container>;

  return (
    <S.Container>
      <S.Title1>새로운 모집공고가 올라왔어요{" >"}</S.Title1>
      {events.map((event) => (
        <S.EventBox key={event.id}>
          <S.ImageWrapper>
            <img
              src={event.image} // 이미지 URL 또는 기본 이미지
              alt={event.title}
              style={{ width: "100%", height: "auto", borderRadius: "10px" }}
            />
          </S.ImageWrapper>
          <S.Title>{event.title}</S.Title>
          {/* <S.Description>
            {event.description.length > 30
              ? `${event.description.slice(0, 30)}...`
              : event.description}
          </S.Description> */}
          <S.Date>
            마감일자 : {new Date(event.deadline).toLocaleDateString()}
          </S.Date>
        </S.EventBox>
      ))}
    </S.Container>
  );
}

export default FestivalList;
