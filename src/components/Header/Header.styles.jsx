import styled from "styled-components";
import { Link } from "react-router-dom";

/* === 데스크탑 헤더 스타일 === */
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1200px; /* 디자인 기준 폭 */
  margin: 0 auto; /* 중앙 정렬 */
  padding: 0 20px;
`;

export const TopBar = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: #f9f9f9;
  padding: 5px 20px;
  font-size: 12px;
  color: #666;
  border-bottom: 1px solid #ccc;
`;

export const TopBarItem = styled.span`
  margin-left: 15px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 40px;
  border-bottom: 1px solid #ccc;
`;

export const LogoLink = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  width: 130px;
  height: auto;
  padding-left: 50px;
`;

export const Menu = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-grow: 1;
`;

export const MenuItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  &:hover > div {
    display: block;
  }
`;

export const Text = styled.span`
  font-size: 14px;
  color: ${(props) => props.color || "#000"};
`;

export const Dropdown = styled.div`
  display: none;
  position: absolute;
  top: 100%;
  left: 50%;
  width: 150px;
  text-align: center;
  transform: translateX(-50%);
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 10px 15px;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const DropdownItem = styled.div`
  font-size: 14px;
  padding: 5px 10px;
  color: #333;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
    color: #007aff;
  }
`;

/* === 모바일 헤더 스타일 === */
export const MobileWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const MobileHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  border-bottom: 1px solid #ccc;
  z-index: 1100; /* 모바일 헤더는 항상 위에 표시 */
`;

export const LogoLinkMobile = styled(Link)`
  text-decoration: none;
`;

export const LogoMobile = styled.img`
  width: 100px;
  height: auto;
`;

export const MenuIcon = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 25px;
  height: 20px;
  z-index: 1100; /* 햄버거 아이콘은 헤더와 함께 위에 표시 */
`;

export const Bar = styled.div`
  height: 3px;
  background-color: #000;
  border-radius: 2px;
`;

/* 모바일 사이드바 (드로어) - 헤더 영역을 침범하지 않도록 top 값 설정 */
export const MobileSidebar = styled.div`
  position: fixed;
  top: 60px; /* 헤더 높이만큼 띄움 */
  right: 0;
  width: 250px;
  height: 100%;
  background-color: #fff;
  box-shadow: -4px 0 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

/* 모바일 메뉴 아이템 및 드롭다운 (제공하신 Sidebar 예시와 유사하게) */
export const MobileMenuItem = styled.div`
  margin-top: 20px;
`;

export const MobileMenuTitle = styled.div`
  font-size: 15px;
  font-weight: 700;
  color: #1d1d1f;
  cursor: pointer;
`;

export const MobileDropdown = styled.div`
  margin-left: 10px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
`;

export const MobileDropdownItem = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: #333;
  margin-bottom: 10px;
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 5px;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #f0f0f0;
  }
`;
