import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import * as S from './Header.styles';
import logo from '../../asset/img.jpg';
import {
  FaUniversity,
  FaUsers,
  FaNetworkWired,
  FaUserAlt,
} from 'react-icons/fa';

const categories = [
  {
    title: '중앙동아리',
    navigateTo: '/clublist',
    icon: <FaUniversity />,
  },
  {
    title: '소학회',
    navigateTo: '/miniclublist',
    icon: <FaUsers />,
  },
  // {
  //   title: "동아리연합회",
  //   icon: <FaNetworkWired />,
  //   items: [
  //     { name: "소개글", navigateTo: "/introduce", icon: <FaNetworkWired /> },
  //     { name: "공지사항", navigateTo: "/notice", icon: <FaNetworkWired /> },
  //   ],
  // },
  {
    title: '공지사항',
    navigateTo: '/notice',
    icon: <FaNetworkWired />,
  },
  {
    title: '내정보',
    navigateTo: '/login',
    icon: <FaUserAlt />,
  },
];

function Header() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMouseEnter = (index) => setActiveCategory(index);
  const handleMouseLeave = () => setActiveCategory(null);

  const handleCategoryClick = (category) => {
    if (category.title === '내정보') {
      if (isMobile) {
        setMobileMenuOpen(false);
        setOpenDropdown(null);
      }
      navigate('/login');
      return;
    }
    if (!category.items && category.navigateTo) {
      if (isMobile) {
        setMobileMenuOpen(false);
        setOpenDropdown(null);
      }
      navigate(category.navigateTo);
    }
  };

  const handleItemClick = (item) => {
    if (item.navigateTo) {
      if (isMobile) {
        setMobileMenuOpen(false);
        setOpenDropdown(null);
      }
      navigate(item.navigateTo);
    }
  };

  const handleMenuIconClick = () => {
    if (mobileMenuOpen) {
      setOpenDropdown(null);
    }
    setMobileMenuOpen((prev) => !prev);
  };

  const handleOverlayClick = () => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  // 모바일 로그인 페이지 전용 헤더
  if (isMobile && location.pathname === '/login') {
    return (
      <S.MobileWrapper>
        <S.MobileHeaderCustom>
          <S.BackButton onClick={() => navigate('/')}>&lt;</S.BackButton>
          <S.MobileTitle>로그인</S.MobileTitle>
        </S.MobileHeaderCustom>
      </S.MobileWrapper>
    );
  }

  // 모바일 기본 헤더
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
          <>
            <S.Overlay onClick={handleOverlayClick} />
            <S.MobileSidebar open={mobileMenuOpen}>
              <S.MobileCloseButton onClick={handleOverlayClick}>
                &times;
              </S.MobileCloseButton>
              {categories.map((category, index) => (
                <S.MobileMenuItem
                  key={index}
                  first={category.title === '중앙동아리'}
                >
                  <S.MobileMenuTitle
                    onClick={() => {
                      if (category.items) {
                        setOpenDropdown(openDropdown === index ? null : index);
                      } else {
                        handleCategoryClick(category);
                      }
                    }}
                  >
                    <S.IconWrapper>{category.icon}</S.IconWrapper>
                    <span>{category.title}</span>
                  </S.MobileMenuTitle>
                  {category.items && openDropdown === index && (
                    <S.MobileDropdown>
                      {category.items.map((item, idx) => (
                        <S.MobileDropdownItem
                          key={idx}
                          onClick={() => handleItemClick(item)}
                        >
                          <S.IconWrapper>{item.icon}</S.IconWrapper>
                          <span>{item.name}</span>
                        </S.MobileDropdownItem>
                      ))}
                    </S.MobileDropdown>
                  )}
                </S.MobileMenuItem>
              ))}
            </S.MobileSidebar>
          </>
        )}
      </S.MobileWrapper>
    );
  }

  // 데스크탑 헤더
  return (
    <S.OuterWrapper>
      <S.TopBarBlock>
        <S.TopBarInner>
          <S.TopBarItem onClick={() => navigate('/login')}>LOGIN</S.TopBarItem>
          <S.TopBarItem onClick={() => navigate('/')}>HOME</S.TopBarItem>
          <S.TopBarItem
            onClick={() =>
              (window.location.href = 'https://mportal.ajou.ac.kr/main.do')
            }
          >
            PORTAL
          </S.TopBarItem>
          <S.TopBarItem>LANGUAGE ▼</S.TopBarItem>
        </S.TopBarInner>
      </S.TopBarBlock>
      <S.ContainerBlock>
        <S.ContainerInner>
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
        </S.ContainerInner>
      </S.ContainerBlock>
    </S.OuterWrapper>
  );
}

export default Header;
