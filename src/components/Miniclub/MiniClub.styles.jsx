import styled from "styled-components";

/* PageContainer: 데스크탑에서는 사이드바와 콘텐츠를 좌우 배치, 모바일에서는 세로 배치 */
export const PageContainer = styled.div`
  display: flex;
  flex-direction: row; /* 기본: 좌우 배치 */
  gap: 20px;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 10px;
    gap: 10px;
  }
`;

/* Sidebar: 데스크탑에서는 왼쪽 고정, 모바일에서는 상단 전체 너비 */
export const Sidebar = styled.div`
  width: 180px;
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
  margin-right: 30px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 20px;
  height: fit-content;

  @media (max-width: 768px) {
    width: 100%;
    margin-right: 0;
    margin-bottom: 10px;
    position: static;
  }
`;

export const SidebarTitle = styled.h2`
  font-size: 18px;
  font-weight: 700;
  color: #1d1d1f;
  margin-bottom: 10px;
`;

export const SidebarList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const SidebarItem = styled.li`
  font-size: 14px;
  font-weight: ${({ isselected }) => (isselected ? "700" : "400")};
  color: ${({ isselected }) => (isselected ? "rgb(56, 56, 57)" : "#333")};
  margin-bottom: 10px;
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 5px;
  transition: background-color 0.3s ease, color 0.3s ease;
  background-color: ${({ isselected }) =>
    isselected ? "#f0f0f0" : "transparent"};

  &:hover {
    background-color: #f0f0f0;
  }
`;

export const SidebarSubItem = styled.li`
  padding: 8px 15px;
  font-size: 14px;
  cursor: pointer;
  color: ${({ isselected }) => (isselected ? "rgb(18, 103, 188)" : "#6c757d")};
  transition: color 0.3s ease;
  margin-left: 20px;
  border-left: 2px solid #e0e0e0;
  padding-left: 10px;

  &:hover {
    color: rgb(18, 103, 188);
  }
`;

export const Content = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

export const Title1 = styled.h1`
  width: 100%;
  font-size: 20px;
  font-weight: 700;
  color: #1d1d1f;
  text-align: left;
  margin-bottom: 10px;
`;

export const TitleBar = styled.div`
  width: 100%;
  height: 1px;
  background-color: black;
  margin-bottom: 15px;
  border-radius: 2px;
`;

/* Container: 그리드 레이아웃, 데스크탑은 4열, 태블릿은 2열, 모바일은 1열 */
export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  width: 100%;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

/* EventBox: 데스크탑에서는 카드 형태, 모바일에서는 가로로 긴 직사각형 카드로 변경 */
/* 모바일 시 bg prop을 통해 배경 이미지와 반투명 오버레이 효과 적용 */
export const EventBox = styled.div`
  width: 180px;
  background-color: #ffffff;
  border: 0.2px solid rgb(213, 213, 213);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-8px);
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 140px; /* 모바일 카드 높이 (원하는 값으로 조정 가능) */
    flex-direction: row;
    align-items: center;
    padding: 10px;
    border: none;
    background-image: linear-gradient(
        rgba(255, 255, 255, 0.6),
        rgba(255, 255, 255, 0.6)
      ),
      url(${(props) => props.bg});
    background-size: cover;
    background-position: center;
  }
`;

/* ImageWrapper: 데스크탑에서는 이미지 표시, 모바일에서는 숨김 처리 */
export const ImageWrapper = styled.div`
  width: 100%;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &::before {
    content: attr(data-label);
    position: absolute;
    top: 10px;
    left: 10px;
    background-color: #ff4d4f;
    color: white;
    font-size: 12px;
    font-weight: bold;
    padding: 4px 8px;
    border-radius: 4px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

/* Title: 데스크탑은 중앙 정렬, 모바일은 좌측 정렬 */
export const Title = styled.h2`
  font-size: 16px;
  font-weight: 700;
  color: #1d1d1f;
  text-align: center;
  margin: 10px 0;

  @media (max-width: 768px) {
    flex: 1;
    text-align: left;
    margin: 0 10px;
    color: #000;
  }
`;

/* Description: 데스크탑은 표시, 모바일은 숨김 처리 */
export const Description = styled.p`
  font-size: 14px;
  color: #6e6e73;
  text-align: center;
  margin: 0 10px 10px 10px;

  @media (max-width: 768px) {
    display: none;
  }
`;
