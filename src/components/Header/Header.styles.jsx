import styled from "styled-components";
import { Link } from "react-router-dom";

/* 데스크탑 헤더 스타일 */
export const OuterWrapper = styled.header`
  width: 100%;
  background-color: #fff;
`;

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

export const Text = styled.span`
  font-size: 15px;
  color: ${(props) => props.color || "#000"};
`;

export const MenuItem = styled.div`
  position: relative;
  padding: 10px 20px;
  /* 첫 번째 메뉴 항목(중앙동아리) 추가 여백 */
  &:first-child {
    margin-top: 15px;
  }
  border-bottom: 1px solid #ddd;
`;

export const Dropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  z-index: 10;
`;

export const DropdownItem = styled.div`
  padding: 8px 20px;
  /* 동아리연합회 하위 항목은 밑줄 없이 */
  border-bottom: none;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`;

/* 모바일 헤더 스타일 */
export const MobileWrapper = styled.div`
  position: relative;
`;

export const MobileHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const MobileHeaderCustom = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const BackButton = styled.button`
  position: absolute;
  left: 20px;
  padding: 0;
  margin: 0; /* 추가: 기본 margin 제거 */
  background: none;
  border: none;
  font-size: 20px;
  line-height: 1; /* 추가: 줄 높이 조정 */
  font-weight: 600;
  color: #0056b3;
  cursor: pointer;
  &:hover {
    text-decoration: none;
  }
`;

export const MobileTitle = styled.h1`
  font-size: 18px;
  font-weight: 700;
  color: #333;
  margin: 0;
  text-align: center;
`;

/* 사이드바 (모바일) */
export const MobileSidebar = styled.div`
  position: fixed;
  top: 0;
  right: ${({ open }) =>
    open ? "0" : "-20%"}; /* 줄어든 width에 맞춰 슬라이드 위치 */
  width: 40%; /* 기존 40%의 절반 */
  height: 100%;
  background-color: rgb(248, 248, 248);
  border-bottom: 1px solid #ddd; /* 전체 테두리 대신 밑줄만 */
  z-index: 1000;
  transition: right 0.3s ease-in-out;
  padding: 20px;
  overflow-y: auto;
`;

/* X 버튼 */
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

/* 모바일 사이드바 내부 메뉴 항목 */
export const MobileMenuItem = styled.div`
  padding: 10px 0;
  border-bottom: 1px solid #ddd;
  margin-top: ${(props) => (props.first ? "40px" : "10px")};
`;

export const MobileMenuTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding-left: 15px;
  font-weight: bold;
  cursor: pointer;
`;

export const MobileDropdown = styled.div`
  margin-top: 5px;
  padding-left: 30px; /* 상위 항목보다 안쪽 */
  display: flex;
  flex-direction: column;
`;

export const MobileDropdownItem = styled.div`
  padding: 8px 0;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  /* 동아리연합회 하위 항목은 밑줄 없이 */
  border-bottom: none;
`;

/* 아이콘 래퍼: 동그란 배경 */
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
  /* 기존 스타일 유지 */
`;

export const LogoMobile = styled.img`
  width: 120px;
`;

export const MenuIcon = styled.div`
  cursor: pointer;
`;

export const Bar = styled.div`
  width: 25px;
  height: 3px;
  background-color: #333;
  margin: 4px 0;
`;
