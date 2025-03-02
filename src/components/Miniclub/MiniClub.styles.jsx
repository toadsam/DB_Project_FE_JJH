import styled from "styled-components";

/* PageContainer: 데스크탑에서는 사이드바와 콘텐츠를 좌우 배치, 모바일에서는 세로 배치 */
export const PageContainer = styled.div`
  display: flex;
  flex-direction: row; /* 기본: 좌우 배치 */
  gap: 20px;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  box-sizing: border-box;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 10px;
    gap: 10px;
  }
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
  font-size: 13px;
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
  width: 100%;
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

export const Container = styled.div`
  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(150px, max-content));
  gap: 20px;
  width: 100%;
  margin: 0 auto;

  /* 왼쪽 정렬을 위해 center 대신 start 사용 */
  justify-content: start;
  align-items: start;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`;

/* EventBox: 카드 자체는 그리드 셀의 너비에 맞춰 중앙에 배치 */
export const EventBox = styled.div`
  width: 100%;
  max-width: 180px;
  background-color: #ffffff;
  border: 0.2px solid rgb(213, 213, 213);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease;
  cursor: pointer;
  margin: 0 auto; /* 그리드 셀 내에서 중앙 정렬 */

  &:hover {
    transform: translateY(-8px);
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

/* ImageWrapper: 이미지는 항상 전체 너비에 맞게 표시 */
export const ImageWrapper = styled.div`
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
    left: 10px;
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
    right: 10px;
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

    margin-left: 10px;
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
export const SidebarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 8px 10px; /* 패딩을 줄임 */
  background-color: #f9f9f9;
  border-radius: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const Sidebar = styled.div`
  /* 데스크톱 기본 스타일 */
  width: 190px;
  background-color: #f9f9f9;
  padding: 20px; /* 데스크톱일 때는 20px 패딩 */
  border-radius: 10px;
  margin-right: 30px;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 20px;
  height: fit-content;

  /* 모바일(768px 이하)에서 덮어쓰기 */
  @media (max-width: 768px) {
    width: 100%;
    margin-right: 0;
    margin-bottom: 10px;
    position: static;
    padding: 8px 0px; /* 모바일일 때는 8px 10px으로 변경 */
  }
`;

export const SidebarTitle = styled.h2`
  /* 데스크톱 기본 스타일 */
  font-size: 18px; /* 데스크톱에서 18px */
  font-weight: 700; /* 데스크톱에서 700 */
  color: #1d1d1f;
  margin-bottom: 10px;

  /* 모바일(768px 이하)에서 덮어쓰기 */
  @media (max-width: 768px) {
    font-size: 16px;
    font-weight: 600;
    margin: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
