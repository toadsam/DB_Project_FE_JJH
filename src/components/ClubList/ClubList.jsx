import React, { useState, useEffect } from "react";
import * as S from "./ClubList.styles";
import axios from "axios";
import defaultImage from "../../asset/mainLogo.png";
import { useNavigate } from "react-router-dom";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

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
  const [selectedCategory, setSelectedCategory] = useState("");
  const navigate = useNavigate();

  // 모바일 여부 감지
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 모바일 사이드바 확장 여부
  const [sidebarExpanded, setSidebarExpanded] = useState(false);
  useEffect(() => {
    if (isMobile) {
      setSidebarExpanded(false);
    }
  }, [selectedCategory, isMobile]);
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
  }, [selectedCategory]);

  if (loading) return <S.PageContainer>Loading...</S.PageContainer>;
  if (error) return <S.PageContainer>Error: {error}</S.PageContainer>;

  const handleEventClick = (id) => {
    navigate(`/clubinfo/${id}`);
  };

  // 모집 타입에 따라 빨간 박스에 들어갈 내용을 계산하는 함수
  const getRecruitmentLabel = (event) => {
    if (event.recruitment_type === null) {
      return "상시";
    } else if (event.recruitment_type === "수시모집") {
      const today = new Date();
      const endDate = new Date(event.recruitment_end_date);
      const diffTime = endDate - today;
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays < 0 ? "마감" : `D-${diffDays}`;
    }
    return "";
  };

  return (
    <S.PageContainer>
      <S.Sidebar>
        {isMobile ? (
          <>
            <S.SidebarHeader
              onClick={() => setSidebarExpanded(!sidebarExpanded)}
            >
              <S.SidebarTitle>{categories[0].title}</S.SidebarTitle>
              {sidebarExpanded ? <FaChevronUp /> : <FaChevronDown />}
            </S.SidebarHeader>
            <S.SidebarList expanded={sidebarExpanded}>
              {categories[0].items.map((item, index) => (
                <S.SidebarItem
                  key={index}
                  onClick={() => {
                    setSelectedCategory(item);
                    setSidebarExpanded(false); // 항목 클릭 후 사이드바 닫기
                  }}
                  isSelected={selectedCategory === item}
                >
                  {item}
                </S.SidebarItem>
              ))}
            </S.SidebarList>
          </>
        ) : (
          <>
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
          </>
        )}
      </S.Sidebar>

      <S.Content>
        <S.Title1>
          중앙동아리 {">"} {selectedCategory || "전체"}
        </S.Title1>
        <S.TitleBar />
        <S.Container>
          {events.map((event) => (
            <S.EventBox
              key={event.club_id}
              onClick={() => handleEventClick(event.club_id)}
              bg={event.image}
            >
              <S.ImageWrapper
                data-label={getRecruitmentLabel(event)}
                style={{ height: "180px", overflow: "hidden" }}
              >
                <img
                  src={event.image}
                  alt={event.club_name}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
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
