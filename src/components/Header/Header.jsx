import React, { useState, useEffect } from "react";
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
      { name: "공지사항", navigateTo: "/notice" },
      { name: "모집공고 목록", navigateTo: "/recruitment-list" }, // ✅ 여기 추가
    ],
  },
  {
    title: "내정보",
    items: [{ name: "마이페이지", navigateTo: "/mypage" }],
  },
];

function Header() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  // 화면 크기에 따라 모바일 여부 업데이트
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMouseEnter = (index) => {
    setActiveCategory(index);
  };

  const handleMouseLeave = () => {
    setActiveCategory(null);
  };

  const handleCategoryClick = (category) => {
    if (category.navigateTo) {
      if (isMobile) setMobileMenuOpen(false);
      navigate(category.navigateTo);
    }
  };

  const handleItemClick = (item) => {
    if (item.navigateTo) {
      if (isMobile) setMobileMenuOpen(false);
      navigate(item.navigateTo);
    }
  };

  // 모바일: 햄버거 아이콘 클릭 시 토글
  const handleMenuIconClick = () => setMobileMenuOpen((prev) => !prev);

  // 모바일 헤더: 로고와 햄버거 아이콘만 보임 (햄버거 아이콘은 항상 보임)
  if (isMobile) {
    return (
      <S.MobileWrapper>
        <S.MobileHeader>
          <S.LogoLinkMobile to="/">
            <S.LogoMobile src={logo} alt="Ajou Logo" />
          </S.LogoLinkMobile>
          <S.MenuIcon onClick={handleMenuIconClick}>
            <S.Bar />
            <S.Bar />
            <S.Bar />
          </S.MenuIcon>
        </S.MobileHeader>
        {mobileMenuOpen && (
          <S.MobileSidebar>
            {categories.map((category, index) => (
              <S.MobileMenuItem key={index}>
                <S.MobileMenuTitle
                  onClick={() => handleCategoryClick(category)}
                >
                  {category.title}
                </S.MobileMenuTitle>
                {category.items && (
                  <S.MobileDropdown>
                    {category.items.map((item, idx) => (
                      <S.MobileDropdownItem
                        key={idx}
                        onClick={() => handleItemClick(item)}
                      >
                        {item.name}
                      </S.MobileDropdownItem>
                    ))}
                  </S.MobileDropdown>
                )}
              </S.MobileMenuItem>
            ))}
          </S.MobileSidebar>
        )}
      </S.MobileWrapper>
    );
  }

  // 데스크탑 헤더: 기존 코드 그대로
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
