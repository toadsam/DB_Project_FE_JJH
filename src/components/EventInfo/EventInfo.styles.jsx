import styled from "styled-components";

/* PageContainer: 데스크탑에서는 사이드바와 콘텐츠를 좌우 배치, 모바일에서는 세로 배치 */
export const PageContainer = styled.div`
  display: flex;
  flex-direction: row; /* 기본: 좌우 배치 */
  gap: 20px;
  width: 100%;
  max-width: 1200px; /* 디자인 기준 폭 */
  margin: 0 auto; /* 중앙 정렬 */
  padding: 20px;

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
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.1);
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
  font-weight: ${(props) => (props.isSelected ? "700" : "400")};
  color: ${(props) => (props.isSelected ? "#007aff" : "#333")};
  margin-bottom: 10px;
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 5px;
  background-color: ${(props) =>
    props.isSelected ? "#e6f7ff" : "transparent"};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f0f0f0;
  }
`;

/* Content: 오른쪽 콘텐츠 영역 */
export const Content = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

/* Title 및 TitleBar */
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

/* Container: 그리드 레이아웃 (데스크탑 4열, 태블릿 2열, 모바일 1열) */
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
/* 모바일 시 bg prop을 이용해 배경 이미지와 반투명 오버레이 효과 적용 */
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
    height: 100px; /* 모바일 카드 높이 (원하는 값으로 조정 가능) */
    flex-direction: row;
    align-items: center;
    padding: 10px;
    border: none;
    /* bg prop을 이용해 배경 이미지와 반투명 오버레이 효과 적용 */
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

  /* 상단 라벨 스타일 */
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

/* Title: 데스크탑에서는 중앙 정렬, 모바일에서는 좌측 정렬 */
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

/* Location 및 Date 스타일 */
export const Location = styled.p`
  font-size: 12px;
  font-weight: 500;
  color: #007aff;
  text-align: left;
  margin: 0 10px;
`;

export const Date = styled.p`
  font-size: 12px;
  font-weight: 500;
  color: #8e8e93;
  text-align: left;
  margin: 5px 10px 10px 10px;
`;
