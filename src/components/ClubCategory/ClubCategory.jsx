import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import * as S from "./ClubCategory.styles"; // 수정된 스타일 적용
import defaultImage from "../../asset/mainLogo.png";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // 기존 FaChevronRight 대신 FaChevronUp 사용
const API_URL = process.env.REACT_APP_API_URL;

const categories = [
  { name: "스포츠" },
  { name: "학술" },
  { name: "종교" },
  { name: "문화/예술" },
  { name: "창업" },
  { name: "사교" },
  { name: "봉사" },
];

function CategoryClubList() {
  const { categoryName } = useParams();
  const navigate = useNavigate();
  const [clubs, setClubs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // 모바일 여부 감지
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 모바일 사이드바 확장 여부 상태
  const [sidebarExpanded, setSidebarExpanded] = useState(false);

  useEffect(() => {
    const fetchClubs = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `${API_URL}/api/clubs?category=${encodeURIComponent(categoryName)}`,
          {
            headers: {
              "Content-Type": "application/json",
              "ngrok-skip-browser-warning": "69420",
            },
          }
        );
        setClubs(
          Array.isArray(response.data)
            ? response.data.map((club) => ({
                ...club,
                image: club.logo_url || defaultImage,
                description:
                  club.club_description || "설명이 제공되지 않았습니다.",
              }))
            : []
        );
      } catch (err) {
        setError(err.response?.data?.message || err.message);
        setClubs([]);
      } finally {
        setLoading(false);
      }
    };

    fetchClubs();
  }, [categoryName]);

  const handleClubClick = (clubId) => {
    navigate(`/clubinfo/${clubId}`);
  };

  const handleCategoryClick = (cat) => {
    navigate(`/category/${encodeURIComponent(cat)}`);
    // 모바일에서 항목 클릭 시 사이드바 접기
    if (isMobile) {
      setSidebarExpanded(false);
    }
  };

  return (
    <S.PageContainer>
      <S.Sidebar>
        {isMobile ? (
          <>
            <S.SidebarHeader
              onClick={() => setSidebarExpanded(!sidebarExpanded)}
            >
              <S.SidebarTitle>카테고리</S.SidebarTitle>
              {sidebarExpanded ? <FaChevronUp /> : <FaChevronDown />}
            </S.SidebarHeader>

            {sidebarExpanded && (
              <S.SidebarList>
                {categories.map((cat, index) => (
                  <S.SidebarItem
                    key={index}
                    onClick={() => handleCategoryClick(cat.name)}
                    isSelected={cat.name === categoryName}
                    style={{ cursor: "pointer" }}
                  >
                    {cat.name}
                  </S.SidebarItem>
                ))}
              </S.SidebarList>
            )}
          </>
        ) : (
          <>
            <S.SidebarTitle>카테고리</S.SidebarTitle>
            <S.SidebarList>
              {categories.map((cat, index) => (
                <S.SidebarItem
                  key={index}
                  onClick={() => handleCategoryClick(cat.name)}
                  isSelected={cat.name === categoryName}
                  style={{ cursor: "pointer" }}
                >
                  {cat.name}
                </S.SidebarItem>
              ))}
            </S.SidebarList>
          </>
        )}
      </S.Sidebar>

      <S.Content>
        <S.Title1>{categoryName} 동아리</S.Title1>
        <S.TitleBar />
        {loading && <div>Loading...</div>}
        {error && <div>Error: {error}</div>}
        <S.Container>
          {clubs.map((club) => (
            <S.EventBox
              key={club.club_id}
              onClick={() => handleClubClick(club.club_id)}
              bg={club.image}
            >
              <S.ImageWrapper
                data-label={club.club_type}
                style={{ height: "180px", overflow: "hidden" }}
              >
                <img
                  src={club.image}
                  alt={club.club_name}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </S.ImageWrapper>
              <S.Title>{club.club_name}</S.Title>
              <S.Description>
                {club.description.length > 35
                  ? `${club.description.slice(0, 35)}...`
                  : club.description}
              </S.Description>
            </S.EventBox>
          ))}
        </S.Container>
      </S.Content>
    </S.PageContainer>
  );
}

export default CategoryClubList;
