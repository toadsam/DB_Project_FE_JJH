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

/* EventBox: 데스크탑과 모바일 모두 카드 형태를 유지 */
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
    padding: 10px;
  }
`;

/* ImageWrapper: 모바일에서도 이미지를 숨기지 않고 항상 표시 */ export const ImageWrapper = styled.div`
  width: 100%;
  position: relative;

  img {
    width: 100%;
    height: 180px;
    object-fit: cover;
  }

  &::before {
    content: attr(data-label);
    position: absolute;
    top: 10px;
    left: 10px; /* 왼쪽 상단에 배치 */
    background-color: rgb(255, 82, 85);
    color: white;
    font-size: 11px;
    font-weight: bold;
    padding: 4px 10px;
    border-radius: 8px;
  }

  &::after {
    content: attr(data-scope);
    position: absolute;
    top: 10px;
    right: 10px; /* 오른쪽 상단에 배치 */
    background-color: rgb(255, 82, 85);
    color: white;
    font-size: 11px;
    font-weight: bold;
    padding: 4px 10px;
    border-radius: 8px;
  }
`;

export const Title = styled.h2`
  font-size: 16px;
  font-weight: 700;
  color: #1d1d1f;
  text-align: center;
  margin: 10px 0;

  @media (max-width: 768px) {
    text-align: left;
    margin: 10px 0 0 0;
    color: #000;
  }
`;

export const Description = styled.p`
  font-size: 14px;
  color: #6e6e73;
  text-align: center;
  margin: 0 10px 10px 10px;

  @media (max-width: 768px) {
    text-align: left;
  }
`;
export const RecruitmentInfo = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin-top: 4px;
`;
