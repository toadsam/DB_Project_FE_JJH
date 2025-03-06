import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import * as S from './Header.styles';
import { FaSearch } from 'react-icons/fa';

function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  // 필터 관련 상태 (이전 코드와 동일)
  const [searchTerm, setSearchTerm] = useState('');
  // 모바일 여부 감지
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 검색 입력 클릭 시, SearchPage로 이동
  const handleSearchInputClick = () => {
    navigate('/searchPage');
  };

  return (
    <S.HeaderContainer>
      {/* 상단 바: 로고, 검색 입력(클릭 시 SearchPage로 이동), 로그인 */}
      <S.TopBar>
        <S.LogoSection onClick={() => navigate('/')}>
          <S.LogoText>ACM</S.LogoText>
        </S.LogoSection>

        {isMobile ? (
          // 모바일: 검색 아이콘만 표시
          <S.MobileActions>
            <S.MobileSearchIconWrapper onClick={handleSearchInputClick}>
              <FaSearch />
            </S.MobileSearchIconWrapper>
            <S.LoginButton onClick={() => navigate('/login')}>
              로그인
            </S.LoginButton>
          </S.MobileActions>
        ) : (
          // 데스크탑: 검색 입력창 (readOnly) + 로그인 버튼
          <>
            <S.SearchWrapper onClick={handleSearchInputClick}>
              <S.SearchInput
                placeholder="동아리명 검색"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                readOnly
              />
            </S.SearchWrapper>
            <S.LoginButton onClick={() => navigate('/login')}>
              로그인
            </S.LoginButton>
          </>
        )}
      </S.TopBar>

      {/* 네비게이션 바는 SearchPage에서는 보이지 않도록 함 */}
      {location.pathname !== '/searchPage' && (
        <S.NavBar>
          <S.NavBarInner>
            <S.NavItem
              isActive={location.pathname === '/'}
              onClick={() => navigate('/')}
            >
              홈
            </S.NavItem>
            <S.NavItem
              isActive={location.pathname === '/clublist'}
              onClick={() => navigate('/clublist')}
            >
              중앙동아리
            </S.NavItem>
            <S.NavItem
              isActive={location.pathname === '/miniclublist'}
              onClick={() => navigate('/miniclublist')}
            >
              소학회
            </S.NavItem>
          </S.NavBarInner>
        </S.NavBar>
      )}
    </S.HeaderContainer>
  );
}

export default Header;
