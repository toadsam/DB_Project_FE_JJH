import React, { useState, useEffect } from "react";
import * as S from "./ClubList.styles";
import axios from "axios";
import defaultImage from "../../asset/mainLogo.png";
import { useNavigate } from "react-router-dom";
import { FaChevronDown, FaChevronUp, FaSearch } from "react-icons/fa";

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
  const [searchTerm, setSearchTerm] = useState("");
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

  // 🔄 카테고리 변경 시 검색어 리셋
  useEffect(() => {
    setSearchTerm(""); // 카테고리 변경 시 검색어 초기화
  }, [selectedCategory]);

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

  // 검색 input onChange 핸들러
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // 🔍 검색어로 시작하는 동아리만 필터링
  const filteredEvents = events.filter((event) =>
    event.club_name.toLowerCase().startsWith(searchTerm.toLowerCase())
  );

  return (
    <S.PageContainer>
      {/* 📌 모바일에서만 검색창 추가 */}
      {isMobile && (
        <S.MobileSearchContainer>
          <S.MobileSearchInput
            type="text"
            placeholder="검색"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <S.MobileSearchIcon>
            <FaSearch />
          </S.MobileSearchIcon>
        </S.MobileSearchContainer>
      )}

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
                    setSidebarExpanded(false);
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
        <S.TopBar>
          <S.Title1>
            중앙동아리 {">"} {selectedCategory || "전체"}
          </S.Title1>

          {/* 📌 데스크탑 검색창 (기존 그대로 유지) */}
          {!isMobile && (
            <S.SearchContainer>
              <S.SearchInput
                type="text"
                placeholder="검색"
                value={searchTerm}
                onChange={handleSearchChange}
              />
              <S.SearchIcon>
                <FaSearch />
              </S.SearchIcon>
            </S.SearchContainer>
          )}
        </S.TopBar>

        <S.TitleBar />
        <S.Container>
          {filteredEvents.map((event) => (
            <S.EventBox
              key={event.club_id}
              onClick={() => handleEventClick(event.club_id)}
            >
              <S.ImageWrapper style={{ height: "180px", overflow: "hidden" }}>
                <img
                  src={event.image}
                  alt={event.club_name}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </S.ImageWrapper>
              <S.Title>{event.club_name}</S.Title>
              <S.Description>
                {(() => {
                  const desc = event.description.replace(/\\n/g, "\n");
                  const truncated =
                    desc.length > 25 ? desc.slice(0, 25) + "..." : desc;
                  return truncated.split("\n").map((line, index) => (
                    <React.Fragment key={index}>
                      {line}
                      {index !== truncated.split("\n").length - 1 && <br />}
                    </React.Fragment>
                  ));
                })()}
              </S.Description>
            </S.EventBox>
          ))}
        </S.Container>
      </S.Content>
    </S.PageContainer>
  );
}

export default ClubList;
