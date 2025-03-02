import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import * as S from "./ClubCategory.styles"; // ClubList 스타일 적용
import defaultImage from "../../asset/mainLogo.png";
import { FaChevronDown, FaChevronUp, FaSearch } from "react-icons/fa";

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
  const [searchTerm, setSearchTerm] = useState("");

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

  // 🔄 카테고리 변경 시 검색어 초기화
  useEffect(() => {
    setSearchTerm("");
  }, [categoryName]);

  const handleClubClick = (clubId) => {
    navigate(`/clubinfo/${clubId}`);
  };

  const handleCategoryClick = (cat) => {
    navigate(`/category/${encodeURIComponent(cat)}`);
    if (isMobile) setSidebarExpanded(false); // 모바일에서 카테고리 선택 시 사이드바 접기
  };

  // 🔍 검색 input onChange 핸들러
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // 🔍 검색어로 시작하는 동아리만 필터링
  const filteredClubs = clubs.filter((club) =>
    club.club_name.toLowerCase().startsWith(searchTerm.toLowerCase())
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
        <S.TopBar>
          <S.Title1>{categoryName} 동아리</S.Title1>

          {/* 📌 데스크탑 검색창 유지 */}
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
        {loading && <div>Loading...</div>}
        {error && <div>Error: {error}</div>}
        <S.Container>
          {filteredClubs.map((club) => (
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
