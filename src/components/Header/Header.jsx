import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // useNavigate 가져오기
import * as S from "./Header.styles";
import logo from "../../asset/img.jpg";

const categories = [
  {
    title: "중앙동아리",
    navigateTo: "/clublist", // 이동할 경로 추가
  },
  {
    title: "소학회",
    navigateTo: "/miniclublist",
  },
  {
    title: "행사",
    navigateTo: "/eventinfo",
  },
  {
    title: "동아리연합회",
    items: [
      { name: "소개글", navigateTo: "/introduce" },
      { name: "공지사항", navigateTo: "/notice" }, // "공지사항" 클릭 시 이동 경로 추가
    ],
  },
  {
    title: "내정보",
    items: [
      { name: "마이페이지", navigateTo: "/mypage" }, // 이동 경로 추가
    ],
  },
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

  const handleItemClick = (item) => {
    if (item.navigateTo) {
      navigate(item.navigateTo);
    }
  };

  return (
    <S.Wrapper>
      {/* 상단 작은 헤더 */}
      <S.TopBar>
        <S.TopBarItem>HOME</S.TopBarItem>
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
              onClick={() => handleCategoryClick(category)} // 클릭 이벤트 추가
            >
              <S.Text>{category.title}</S.Text>
              {activeCategory === index && category.items && (
                <S.Dropdown>
                  {category.items.map((item, idx) => (
                    <S.DropdownItem
                      key={idx}
                      onClick={() => handleItemClick(item)} // 아이템 클릭 시 이동
                    >
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
