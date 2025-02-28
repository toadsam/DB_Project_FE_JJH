import React, { useState, useEffect } from "react";
import * as S from "./EventInfo.styles"; // 스타일 파일은 동일하게 사용
import axios from "axios";
import defaultImage from "../../asset/mainLogo.png";
import { useNavigate } from "react-router-dom";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const API_URL = process.env.REACT_APP_API_URL;

function MiniClub() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("전체");
  const navigate = useNavigate();
  const categories = ["음악", "댄스", "전시", "봉사", "기타"];

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
    const fetchEvents = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${API_URL}/api/home/updatedevent`, {
          headers: {
            "Content-Type": "application/json",
            "ngrok-skip-browser-warning": "69420",
          },
          params:
            selectedCategory !== "전체" ? { category: selectedCategory } : {},
        });
        setEvents(
          Array.isArray(response.data)
            ? response.data.map((event) => ({
                ...event,
                image: event.main_image || defaultImage,
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

  const titleText = `행사 > ${selectedCategory}`;

  return (
    <S.PageContainer>
      <S.Sidebar>
        {isMobile ? (
          <>
            <S.SidebarHeader
              onClick={() => setSidebarExpanded(!sidebarExpanded)}
            >
              <S.SidebarTitle>행사</S.SidebarTitle>
              {sidebarExpanded ? <FaChevronUp /> : <FaChevronDown />}
            </S.SidebarHeader>
            {sidebarExpanded && (
              <S.SidebarList>
                {categories.map((cat, index) => (
                  <S.SidebarItem
                    key={index}
                    onClick={() => {
                      setSelectedCategory(cat);
                      setSidebarExpanded(false); // 선택 후 자동으로 접힘
                    }}
                    selected={selectedCategory === cat}
                  >
                    {cat}
                  </S.SidebarItem>
                ))}
              </S.SidebarList>
            )}
          </>
        ) : (
          <>
            <S.SidebarTitle>행사</S.SidebarTitle>
            <S.SidebarList>
              {categories.map((cat, index) => (
                <S.SidebarItem
                  key={index}
                  onClick={() => setSelectedCategory(cat)}
                  selected={selectedCategory === cat}
                >
                  {cat}
                </S.SidebarItem>
              ))}
            </S.SidebarList>
          </>
        )}
      </S.Sidebar>

      <S.Content>
        <S.Title1>{titleText}</S.Title1>
        <S.TitleBar />
        <S.Container>
          {events.map((event) => (
            <S.EventBox
              key={event.club_id}
              onClick={() =>
                navigate(`/clubinfo/${event.club_id}`, {
                  state: { defaultTab: "행사 공고" },
                })
              }
            >
              <S.ImageWrapper style={{ height: "180px", overflow: "hidden" }}>
                <img
                  src={event.image}
                  alt={event.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </S.ImageWrapper>
              {/* club_name 추가 */}
              <S.Title>{event.title}</S.Title>
              <S.Location>장소 : {event.location}</S.Location>
              <S.ClubName>동아리명 : {event.club_name} </S.ClubName>
              <S.Date>
                날짜 : {new Date(event.event_date).toLocaleDateString()}
              </S.Date>
            </S.EventBox>
          ))}
        </S.Container>
      </S.Content>
    </S.PageContainer>
  );
}

export default MiniClub;
