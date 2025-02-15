import React, { useState, useEffect } from "react";
import * as S from "./ClubList.styles";
import axios from "axios";
import defaultImage from "../../asset/mainLogo.png";
import { useNavigate } from "react-router-dom";

const API_URL = process.env.REACT_APP_API_URL;

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
  const [selectedCategory, setSelectedCategory] = useState(""); // 선택한 카테고리 상태
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `${API_URL}/api/clubs/central${
            selectedCategory
              ? `?details=${encodeURIComponent(selectedCategory)}`
              : ""
          }`,
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
                ...event,
                image: event.logo_url || defaultImage,
                description:
                  event.club_description || "설명이 제공되지 않았습니다.",
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
  }, [selectedCategory]); // 카테고리 변경 시 재호출

  if (loading) return <S.PageContainer>Loading...</S.PageContainer>;
  if (error) return <S.PageContainer>Error: {error}</S.PageContainer>;

  const handleEventClick = (id) => {
    navigate(`/clubinfo/${id}`);
  };

  return (
    <S.PageContainer>
      {/* 데스크탑: 왼쪽 사이드바, 모바일: 상단에 표시 */}
      <S.Sidebar>
        <S.SidebarTitle>{categories[0].title}</S.SidebarTitle>
        <S.SidebarList>
          {categories[0].items.map((item, index) => (
            <S.SidebarItem
              key={index}
              onClick={() => setSelectedCategory(item)}
              isSelected={selectedCategory === item}
            >
              {item}
            </S.SidebarItem>
          ))}
        </S.SidebarList>
      </S.Sidebar>

      {/* 오른쪽 콘텐츠 영역 */}
      <S.Content>
        <S.Title1>중앙 동아리</S.Title1>
        <S.TitleBar />
        <S.Container>
          {events.map((event) => (
            // 데스크탑 모드에서는 내부에 이미지 영역이 보이고,
            // 모바일 모드에서는 bg prop을 이용해 배경으로 club logo를 표시합니다.
            <S.EventBox
              key={event.club_id}
              onClick={() => handleEventClick(event.club_id)}
              bg={event.image}
            >
              <S.ImageWrapper style={{ height: "180px", overflow: "hidden" }}>
                <img
                  src={event.image}
                  alt={event.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover"}}
                />
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
