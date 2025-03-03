import styled from "styled-components";
import { Link } from "react-router-dom";

/* === 1. 헤더 전체를 감싸는 래퍼: 화면 전체 폭 사용 === */
export const OuterWrapper = styled.header`
  width: 100%;
  background-color: #fff;
`;

/* 
  === 2. TopBarBlock, ContainerBlock ===
  - 각각 전체 폭을 가지며 border-bottom을 적용해
    수평선이 화면 끝에서 끝까지 이어지도록 함
*/

/* 상단 작은 헤더 영역 (전체 폭) */
export const TopBarBlock = styled.div`
  width: 100%;
  background-color: #f9f9f9;
  border-bottom: 1px solid #ccc; /* 화면 전체로 줄 표시 */
`;

/* TopBar 내부 컨테이너: 중앙 정렬, max-width 적용 */
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

/* 메인 헤더 영역 (전체 폭) */
export const ContainerBlock = styled.div`
  width: 100%;
  border-bottom: 1px solid #ccc; /* 화면 전체로 줄 표시 */
`;

/* Container 내부 컨테이너: 중앙 정렬, max-width 적용 */
export const ContainerInner = styled.div`
  display: flex;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 15px 40px;
`;

/* 로고, 메뉴 영역 등은 기존과 동일하게 구성 */
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

export const LogoLinkMobile = styled(Link)`
  text-decoration: none;
`;

export const LogoMobile = styled.img`
  width: 100px;
  height: auto;
`;

/* 햄버거 아이콘 */
export const MenuIcon = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 25px;
  height: 20px;
  z-index: 1100;
`;

export const Bar = styled.div`
  height: 3px;
  background-color: #000;
  border-radius: 2px;
`;

/* 모바일 사이드바 */
export const MobileSidebar = styled.div`
  position: fixed;
  top: 60px;
  right: 0;
  width: 150px;
  height: 100%;
  background-color: #fff;
  box-shadow: -4px 0 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

export const MobileMenuItem = styled.div`
  margin-top: 20px;
  width: 100%;
  text-align: center;
`;

export const MobileMenuTitle = styled.div`
  font-size: 15px;
  font-weight: 700;
  color: #1d1d1f;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

export const MobileDropdown = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: left;
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
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    background-color: #f0f0f0;
  }
`;
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 50; /* MobileSidebar 보다 낮은 z-index 값으로 설정 */
  background: transparent;
`;
export const MobileHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

// 로그인 페이지용 모바일 헤더
export const MobileHeaderCustom = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center; /* 가운데 정렬 */
  padding: 10px 20px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

// 백 버튼: 왼쪽에 위치, 로그인 제목은 중앙
export const BackButton = styled.button`
  position: absolute;
  left: 20px;
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

// 중앙에 배치될 로그인 제목
export const MobileTitle = styled.h1`
  font-size: 18px;
  font-weight: 700;
  color: #333;
  margin: 0;
  text-align: center;
`;
