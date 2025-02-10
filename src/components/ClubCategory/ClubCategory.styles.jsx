import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: row; /* 사이드바와 콘텐츠를 가로로 배치 */
  gap: 20px;
  width: 100%;
  max-width: 1200px; /* 디자인 기준 폭 */
  margin: 0 auto; /* 중앙 정렬 */
  padding: 20px;
`;

export const Sidebar = styled.div`
  width: 180px;
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
  margin-right: 30px;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 20px; /* 상단에서 20px 떨어지도록 고정 */
  height: fit-content; /* 내용에 맞게 높이 조정 */
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

export const Content = styled.div`
  flex-grow: 1; /* 남은 공간 모두 사용 */
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

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 기본 4열 */
  gap: 20px;
  width: 100%;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr); /* 화면이 작으면 2열 */
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* 모바일에서는 1열 */
  }
`;

export const EventBox = styled.div`
  width: 180px;
  background-color: #ffffff;
  border: 0.2px solid rgb(213, 213, 213);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-8px);
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  /* 카드 상단에 라벨을 표시 (예: 동아리 카테고리) */
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
`;

export const Title = styled.h2`
  font-size: 16px;
  font-weight: 700;
  color: #1d1d1f;
  text-align: center;
  margin: 10px 0;
`;

export const Description = styled.p`
  font-size: 14px;
  color: #6e6e73;
  text-align: center;
  margin: 0 10px 10px;
`;
