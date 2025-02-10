import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import * as S from "./ClubCategory.styles"; // 기존 ClubList 스타일을 재사용
import defaultImage from "../../asset/mainLogo.png";
const API_URL = process.env.REACT_APP_API_URL;

// 왼쪽 사이드바에 표시할 카테고리 목록 (화면에 표시될 값은 그대로)
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
  // URL 파라미터에서 선택된 카테고리명을 가져옵니다.
  const { categoryName } = useParams();
  const navigate = useNavigate();
  const [clubs, setClubs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // 선택된 카테고리에 해당하는 동아리 목록을 API로부터 불러옵니다.
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

  // 동아리 카드를 클릭하면 상세 정보 페이지로 이동합니다.
  const handleClubClick = (clubId) => {
    navigate(`/clubinfo/${clubId}`);
  };

  // 사이드바에서 카테고리 항목을 클릭하면 해당 카테고리 페이지로 이동합니다.
  // 이때, encodeURIComponent를 사용하여 URL에 안전하게 인코딩합니다.
  const handleCategoryClick = (cat) => {
    navigate(`/category/${encodeURIComponent(cat)}`);
  };

  return (
    <S.PageContainer>
      {/* 왼쪽 사이드바: 전체 카테고리 목록 */}
      <S.Sidebar>
        <S.SidebarTitle>카테고리</S.SidebarTitle>
        <S.SidebarList>
          {categories.map((cat, index) => (
            <S.SidebarItem
              key={index}
              onClick={() => handleCategoryClick(cat.name)}
              isSelected={cat.name === categoryName}
              style={{ cursor: "pointer" }}
            >
              {cat.name} {/* 화면에 그대로 "문화/예술"로 표시 */}
            </S.SidebarItem>
          ))}
        </S.SidebarList>
      </S.Sidebar>

      {/* 오른쪽 콘텐츠: 선택한 카테고리에 해당하는 동아리 목록 */}
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
            >
              <S.ImageWrapper data-label={club.club_type}>
                <img src={club.image} alt={club.club_name} />
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
