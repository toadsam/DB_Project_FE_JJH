import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // useNavigate 가져오기
import * as S from "./Header.styles";
import logo from "../../asset/img.jpg";

const categories = [
  {
    title: "중앙동아리",
    navigateTo: "/clublist",
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
      { name: "공지사항", navigateTo: "/notice" },
      { name: "모집공고 목록", navigateTo: "/recruitment-list" }, // ✅ 모집공고 목록 추가
    ],
  },
  {
    title: "내정보",
    items: [
      { name: "마이페이지", navigateTo: "/mypage" },
    ],
  },
];

function Header() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // ✅ 로그인 상태 관리
  const navigate = useNavigate();

  // ✅ 로그인 여부 확인 (localStorage의 토큰 확인)
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    setIsLoggedIn(!!token); // 토큰이 있으면 true, 없으면 false
  }, []);

  // ✅ 로그인 후 헤더 상태를 즉시 반영
  useEffect(() => {
    const checkLoginStatus = () => {
      const token = localStorage.getItem("accessToken");
      setIsLoggedIn(!!token);
    };

    window.addEventListener("storage", checkLoginStatus); // 로그인 상태 변경 감지

    return () => {
      window.removeEventListener("storage", checkLoginStatus);
    };
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

  // ✅ 로그아웃 처리 함수
  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("userInfo");
    setIsLoggedIn(false); // 로그인 상태 업데이트
    navigate("/login");
  };

  return (
    <S.Wrapper>
      {/* 상단 작은 헤더 */}
      <S.TopBar>
        <S.TopBarItem onClick={() => navigate("/")}>HOME</S.TopBarItem>
        {isLoggedIn ? (
          <S.TopBarItem onClick={handleLogout}>LOGOUT</S.TopBarItem>
        ) : (
          <S.TopBarItem onClick={() => navigate("/login")}>LOGIN</S.TopBarItem>
        )}
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
              <S.Text>{category.title}</S.Text>
              {activeCategory === index && category.items && (
                <S.Dropdown>
                  {category.items.map((item, idx) => (
                    <S.DropdownItem
                      key={idx}
                      onClick={() => handleItemClick(item)}
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
