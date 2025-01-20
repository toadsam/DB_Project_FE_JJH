import React, { useState, useEffect } from "react";
import * as S from "./ClubList.styles";
import axios from "axios";
import defaultImage from "../../asset/mainLogo.png";
import { useNavigate } from "react-router-dom";

const categories = [
  {
    title: "중앙동아리",
    items: [
      "과학기술분과",
      "레저스포츠분과",
      "사회활동분과",
      "연행예술분과",
      "준동아리",
      "종교분과",
      "창작전시분과",
      "체육분과",
      "학술언론분과",
    ],
  },
];

function ClubList() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      try {
        const response = await axios.get("http://localhost:5001/api/clubs", {
          headers: {
            "Content-Type": "application/json",
            "ngrok-skip-browser-warning": "69420",
          },
        });
        // "중앙동아리"인 데이터만 필터링
        // const filteredEvents = Array.isArray(response.data)
        //   ? response.data
        //       .filter((event) => event.category === "중앙동아리")
        //       .map((event) => ({
        //         ...event,
        //         image: event.image || defaultImage,
        //       }))
        //   : [];
        // setEvents(filteredEvents);

        //
        setEvents(
          Array.isArray(response.data)
            ? response.data.map((event) => ({
                ...event,
                image: event.image || defaultImage,
              }))
            : []
        );
        //
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
  const handleEventClick = (id) => {
    navigate(`/clubinfo/${id}`); // 클릭한 이벤트의 ID를 URL로 전달
  };

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
        <S.Title1>중앙 동아리</S.Title1>
        <S.TitleBar />
        <S.Container>
          {events.map((event) => (
            <S.EventBox
              key={event.id}
              onClick={() => handleEventClick(event.club_id)}
            >
              <S.ImageWrapper>
                <img src={event.image} alt={event.club_name} />
              </S.ImageWrapper>
              <S.Title>{event.club_name}</S.Title>
              <S.Description>
                {event.description.length > 35
                  ? `${event.description.slice(0, 35)}...`
                  : event.description}
              </S.Description>
            </S.EventBox>
          ))}
        </S.Container>
      </S.Content>
    </S.PageContainer>
  );
}

export default ClubList;
