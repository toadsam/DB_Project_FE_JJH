import styled from "styled-components";
import { Link } from "react-router-dom";

/* 데스크탑 헤더 스타일 */

/* 1. 전체 헤더 영역 */
export const OuterWrapper = styled.header`
  width: 100%;
  background-color: #fff;
`;

/* 상단 헤더 (TopBar) */
export const TopBarBlock = styled.div`
  width: 100%;
  background-color: #f9f9f9;
  border-bottom: 1px solid #ccc;
`;

export const TopBarInner = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 5px 20px;
  font-size: 12px;
  color: #666;
`;

export const TopBarItem = styled.span`
  margin-left: 15px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

/* 메인 헤더 영역 (Container) */
export const ContainerBlock = styled.div`
  width: 100%;
  border-bottom: 1px solid #ccc;
`;

export const ContainerInner = styled.div`
  display: flex;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 15px 40px;
`;

export const LogoLink = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  width: 170px;
  height: auto;
  padding-left: 50px;
`;

export const Menu = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-grow: 1;
`;

/* 데스크탑 메뉴 항목 */
export const MenuItem = styled.div`
  position: relative;
  padding: 10px 20px;
  /* 데스크탑은 여백 및 밑줄 제거 */
  &:first-child {
    margin-top: 0;
  }
  border-bottom: none;
  cursor: pointer;

  &:hover > div {
    display: flex;
  }
`;

export const Text = styled.span`
  font-size: 15px;
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
  flex-direction: column;
  align-items: center;
`;

export const DropdownItem = styled.div`
  font-size: 14px;
  padding: 5px 10px;
  color: #333;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  box-sizing: border-box;
  &:hover {
    background-color: #f0f0f0;
    color: #007aff;
  }
`;

/* 모바일 전체 wrapper */
export const MobileWrapper = styled.div`
  position: relative;
`;

/* 모바일 헤더 (상단바) */
export const MobileHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

/* 로그인 페이지용 모바일 헤더 */
export const MobileHeaderCustom = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

/* 모바일 백 버튼 */
export const BackButton = styled.button`
  position: absolute;
  left: 20px;
  padding: 0;
  margin: 0;
  background: none;
  border: none;
  font-size: 20px;
  font-weight: 600;
  color: #0056b3;
  cursor: pointer;
  &:hover {
    text-decoration: none;
  }
`;

/* 모바일 타이틀 (로그인 등) */
export const MobileTitle = styled.h1`
  font-size: 18px;
  font-weight: 700;
  color: #333;
  margin: 0;
  text-align: center;
`;

/* 모바일 사이드바 */
export const MobileSidebar = styled.div`
  position: fixed;
  top: 0;
  right: ${({ open }) => (open ? "0" : "-20%")};
  width: 40%;
  height: 100%;
  background-color: rgb(248, 248, 248);
  border-bottom: 1px solid #ddd;
  z-index: 1000;
  transition: right 0.3s ease-in-out;
  padding: 20px;
  overflow-y: auto;
`;

/* 모바일 사이드바 닫기 버튼 */
export const MobileCloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 24px;
  font-weight: bold;
  color: #333;
  cursor: pointer;
  &:hover {
    color: #0056b3;
  }
`;

/* 오버레이 */
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: transparent;
  z-index: 900;
`;

/* 모바일 메뉴 항목 */
export const MobileMenuItem = styled.div`
  padding: 10px 0;
  border-bottom: 1px solid #ddd;
  margin-top: ${(props) => (props.first ? "40px" : "10px")};
`;

/* 모바일 메뉴 타이틀 */
export const MobileMenuTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding-left: 15px;
  font-weight: bold;
  cursor: pointer;
`;

/* 모바일 드롭다운 (하위 메뉴) */
export const MobileDropdown = styled.div`
  margin-top: 5px;
  padding-left: 30px;
  display: flex;
  flex-direction: column;
`;

/* 모바일 드롭다운 항목 */
export const MobileDropdownItem = styled.div`
  padding: 8px 0;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  border-bottom: none;
`;

/* 아이콘 래퍼 (동그란 배경) */
export const IconWrapper = styled.div`
  background-color: #e0e0e0;
  border-radius: 50%;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

/* 모바일 로고 링크 및 이미지 */
export const LogoLinkMobile = styled(Link)`
  text-decoration: none;
`;

export const LogoMobile = styled.img`
  width: 120px;
`;

/* 모바일 메뉴 아이콘 (햄버거) */
export const MenuIcon = styled.div`
  cursor: pointer;
`;

/* 모바일 메뉴 아이콘의 바 */
export const Bar = styled.div`
  width: 25px;
  height: 3px;
  background-color: #333;
  margin: 4px 0;
`;
