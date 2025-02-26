import React, { useState, useEffect } from "react";
import * as S from "./EventInfo.styles";
import axios from "axios";
import defaultImage from "../../asset/mainLogo.png";

const API_URL = process.env.REACT_APP_API_URL;

const categories = [
  {
    title: "행사",
    items: ["음악", "댄스", "전시", "봉사", "기타"],
  },
];

function EventInfo() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${API_URL}/api/events`, {
          headers: {
            "Content-Type": "application/json",
            "ngrok-skip-browser-warning": "69420",
          },
        });
        setEvents(
          Array.isArray(response.data)
            ? response.data.map((event) => ({
                ...event,
                image: event.image || defaultImage,
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

  const handleEventClick = () => {
    alert("준비 중인 서비스입니다!");
  };

  if (loading) return <S.PageContainer>Loading...</S.PageContainer>;
  if (error) return <S.PageContainer>Error: {error}</S.PageContainer>;

  return (
    <S.PageContainer>
      {/* 왼쪽 사이드바 */}
      <S.Sidebar>
        <S.SidebarTitle>{categories[0].title}</S.SidebarTitle>
        <S.SidebarList>
          {categories[0].items.map((item, index) => (
            <S.SidebarItem key={index}>{item}</S.SidebarItem>
          ))}
        </S.SidebarList>
      </S.Sidebar>

      {/* 오른쪽 콘텐츠 */}
      <S.Content>
        <S.Title1>행사</S.Title1>
        <S.TitleBar />
        <S.Container>
          {events.map((event) => (
            <S.EventBox
              key={event.id}
              bg={event.image}
              onClick={handleEventClick}
            >
              <S.ImageWrapper>
                <img src={event.image} alt={event.club_name} />
              </S.ImageWrapper>
              <S.Title>{event.title}</S.Title>
              <S.Location>{event.location}</S.Location>
              <S.Date>{new Date(event.event_date).toLocaleDateString()}</S.Date>
            </S.EventBox>
          ))}
        </S.Container>
      </S.Content>
    </S.PageContainer>
  );
}

export default EventInfo;
