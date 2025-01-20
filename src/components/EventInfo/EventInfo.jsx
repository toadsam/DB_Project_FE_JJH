import React, { useState, useEffect } from "react";
import * as S from "./EventInfo.styles";
import axios from "axios";
import defaultImage from "../../asset/mainLogo.png";

const categories = [
  {
    title: "행사",
    items: ["음악", "댄스", "전시", "봉사", "기타"],
  },
];

function MiniClub() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      try {
        const response = await axios.get("http://localhost:5001/api/events", {
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
            <S.EventBox key={event.id}>
              <S.ImageWrapper>
                <img src={event.image} alt={event.club_name} />
              </S.ImageWrapper>
              <S.Title>{event.title}</S.Title>
              {/* <S.Description>
                {event.description.length > 25
                  ? `${event.description.slice(0, 25)}...`
                  : event.description}
              </S.Description>{" "} */}
              <S.Location>{event.location}</S.Location>
              <S.Date>{new Date(event.event_date).toLocaleDateString()}</S.Date>
            </S.EventBox>
          ))}
        </S.Container>
      </S.Content>
    </S.PageContainer>
  );
}

export default MiniClub;
