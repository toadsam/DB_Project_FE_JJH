import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode"; // JWT 해석
import * as S from "./Header.styles";
import logo from "../../asset/img.jpg";

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
    navigateTo: "/clublist",
  },
  {
    title: "소학회",
    items: [
      "소프트웨어융합대학",
      "공과대학",
      "사회과학대학",
      "경영대학",
      "인문대학",
      "자연과학대학",
      "첨단ICT융합대학",
      "약학대학",
      "간호대학",
    ],
    navigateTo: "/miniclublist",
  },
  {
    title: "행사",
    items: ["음악", "댄스", "전시", "봉사", "기타"],
    navigateTo: "/eventinfo",
  },
  {
    title: "동아리연합회",
    items: [
      { name: "소개글" },
      { name: "공지사항", navigateTo: "/notice" },
      { name: "링크트리" },
    ],
  },
  { title: "내정보", items: [{ name: "마이페이지", navigateTo: "/mypage" }] },
];

// ✅ 관리자만 볼 수 있는 메뉴
const adminItems = [
  { name: "모집공고 작성", navigateTo: "/recruitment" },
  { name: "부원 관리", navigateTo: "/member-management" },
  { name: "신청 목록", navigateTo: "/application-list" },
  { name: "가입 신청서", navigateTo: "/application-form" },
  { name: "중앙동아리 등록", navigateTo: "/central-club" },
  { name: "소확회 등록", navigateTo: "/small-club" },
];

function Header() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false); // 관리자 여부 저장
  const navigate = useNavigate();

  // ✅ 로그인한 사용자 역할 확인 (토큰 디코딩)
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setIsAdmin(decoded.role === "admin"); // 역할이 'admin'이면 관리자 메뉴 보이기
      } catch (error) {
        console.error("JWT 해석 오류:", error);
        setIsAdmin(false);
      }
    }
  }, []);

  const handleMouseEnter = (index) => {
    setActiveCategory(index);
  };

  const handleMouseLeave = () => {
    setActiveCategory(null);
  };

  const handleCategoryClick = (category) => {
    if (category.navigateTo) {
      navigate(category.navigateTo);
    }
  };

  const handleItemClick = (item) => {
    if (item.navigateTo) {
      navigate(item.navigateTo);
    }
  };

  return (
    <S.Wrapper>
      {/* 상단 작은 헤더 */}
      <S.TopBar>
        <S.TopBarItem onClick={() => navigate("/")}>HOME</S.TopBarItem>
        <S.TopBarItem onClick={() => navigate("/login")}>LOGIN</S.TopBarItem>
        <S.TopBarItem>PORTAL</S.TopBarItem>
        <S.TopBarItem>LANGUAGE ▼</S.TopBarItem>
      </S.TopBar>

      {/* 메인 헤더 */}
      <S.Container>
        <S.LogoLink to="/">
          <S.Logo src={logo} alt="Ajou Logo" />
        </S.LogoLink>
        <S.Menu>
          {categories.map((category, index) => (
            <S.MenuItem
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleCategoryClick(category)}
            >
              <S.Text color={category.color}>{category.title}</S.Text>
              {activeCategory === index && (
                <S.Dropdown>
                  {category.items.map((item, idx) => (
                    <S.DropdownItem key={idx} onClick={() => handleItemClick(item)}>
                      {item.name || item}
                    </S.DropdownItem>
                  ))}
                  {/* ✅ 관리자 메뉴 추가 (관리자만 보이도록 설정) */}
                  {category.title === "동아리연합회" && isAdmin &&
                    adminItems.map((item, idx) => (
                      <S.DropdownItem key={idx} onClick={() => handleItemClick(item)}>
                        {item.name}
                      </S.DropdownItem>
                    ))}
                </S.Dropdown>
              )}
            </S.MenuItem>
          ))}
        </S.Menu>
      </S.Container>
    </S.Wrapper>
  );
}

export default Header;
