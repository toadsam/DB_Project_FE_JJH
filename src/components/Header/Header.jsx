import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // useNavigate 가져오기
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
    navigateTo: "/clublist", // 이동할 경로 추가
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
  { title: "동아리연합회", items: ["소개글", "공지사항", "링크트리"] },
  { title: "내정보", items: ["마이페이지"] },
];

function Header() {
  const [activeCategory, setActiveCategory] = useState(null);
  const navigate = useNavigate(); // useNavigate 훅 생성

  const handleMouseEnter = (index) => {
    setActiveCategory(index);
  };

  const handleMouseLeave = () => {
    setActiveCategory(null);
  };

  const handleCategoryClick = (category) => {
    if (category.navigateTo) {
      navigate(category.navigateTo); // 해당 경로로 이동
    }
  };

   // LOGIN 버튼 클릭 이벤트 핸들러
   const handleLoginClick = () => {
    navigate("/login"); // 원하는 경로로 이동
  };

  return (
    <S.Wrapper>
      {/* 상단 작은 헤더 */}
      <S.TopBar>
        <S.TopBarItem>HOME</S.TopBarItem>
        <S.TopBarItem onClick={handleLoginClick}>LOGIN</S.TopBarItem> {/* LOGIN 클릭 */}
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
              onClick={() => handleCategoryClick(category)} // 클릭 이벤트 추가
            >
              <S.Text color={category.color}>{category.title}</S.Text>
              {activeCategory === index && (
                <S.Dropdown>
                  {category.items.map((item, idx) => (
                    <S.DropdownItem key={idx}>{item}</S.DropdownItem>
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
