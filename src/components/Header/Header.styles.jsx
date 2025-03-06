// 검색 아이콘: 오른쪽 끝에 위치하도록 절대배치
import styled from 'styled-components';

/* 기존 Header 스타일 */
export const HeaderContainer = styled.header`
  width: 100%;
  border-bottom: 1px solid #ddd;
`;

export const TopBar = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 8px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LogoSection = styled.div`
  cursor: pointer;
`;

export const LogoText = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
`;

export const SearchWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  position: relative;
`;

export const SearchInput = styled.input`
  width: 60%;
  max-width: 400px;
  padding: 8px 40px 8px 16px;
  border-radius: 20px;
  border: 1px solid #ccc;
  font-size: 1rem;
  cursor: pointer;
`;

export const SearchIcon = styled.div`
  color: #333;
  font-size: 16px;
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
`;

export const MobileSearchIconWrapper = styled.div`
  font-size: 16px;
  cursor: pointer;
`;

export const MobileActions = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const LoginButton = styled.button`
  background: none;
  border: none;
  font-size: 17px;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    text-decoration: none;
  }
`;

export const NavBar = styled.nav`
  width: 100%;
  background-color: #f7f7f7;
  border-top: 1px solid #ddd;
`;

export const NavBarInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 8px 16px;
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const NavItem = styled.div`
  cursor: pointer;
  padding-bottom: 2px;
  border-bottom: ${({ isActive }) => (isActive ? '3px solid #000' : 'none')};
  &:hover {
    text-decoration: none;
  }
  font-size: 16px;
`;

/* ── 검색 필터 UI ── */
export const SearchFilterContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 16px 16px;
  background-color: #fff;
  border: 1px solid #ddd;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const FilterSection = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const FilterTitle = styled.span`
  font-size: 1rem;
  font-weight: 600;
`;

export const FilterButton = styled.button`
  padding: 6px 12px;
  border: 1px solid #ccc;
  border-radius: 20px;
  background-color: ${({ isSelected }) => (isSelected ? '#ff4d4f' : '#fff')};
  color: ${({ isSelected }) => (isSelected ? '#fff' : '#333')};
  cursor: pointer;
  font-size: 0.9rem;
  &:hover {
    background-color: ${({ isSelected }) => (isSelected ? '#ff4d4f' : '#eee')};
  }
`;
export const SearchInputContainer = styled.div`
  margin-bottom: 16px;
`;
export const SearchSubmitButton = styled.button`
  align-self: flex-end;
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  &:hover {
    background-color: #0056b3;
  }
`;
