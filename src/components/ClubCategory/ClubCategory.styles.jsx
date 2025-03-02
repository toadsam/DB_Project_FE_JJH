import styled from "styled-components";

/* PageContainer: 데스크탑에서는 사이드바와 콘텐츠를 가로로 배치, 모바일에서는 세로 배치 */
export const PageContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
  overflow-x: hidden; /* 추가: 수평 오버플로우 방지 */

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 10px;
    gap: 10px;
    max-width: 100%;
  }
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
  flex-grow: 1; /* 남은 공간을 모두 사용 */
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

/* ImageWrapper: 데스크탑/모바일 모두 이미지를 보여줌 */
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
/* Sidebar: 데스크탑에서는 왼쪽 고정, 모바일에서는 상단 전체 너비 */ export const Sidebar = styled.div`
  /* 데스크톱 기본 스타일 */
  width: 160px;
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
export const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;
export const SearchContainer = styled.div`
  position: relative;
  width: 250px; /* 필요에 따라 조정 */
`;

// 검색 인풋: 아랫줄 테두리만 표시
export const SearchInput = styled.input`
  width: 70%;
  padding: 8px 40px 8px 12px; /* 오른쪽 여백은 아이콘 공간 확보 */
  font-size: 14px;
  border: none;
  border-bottom: 1px solid #333; /* 진한 검정색 아랫줄 */
  outline: none;

  &::placeholder {
    color: #555; /* placeholder 텍스트 색상 */
  }
`;

// 검색 아이콘: 오른쪽 끝에 위치하도록 절대배치
export const SearchIcon = styled.div`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: #333;
  font-size: 16px;
`;
export const MobileSearchContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 10px auto;
  padding-bottom: 5px;
  border-bottom: 2px solid black;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const MobileSearchInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  font-size: 14px;
  color: #333;
  background: transparent;
  padding: 5px;
  &::placeholder {
    color: #555;
  }
`;

export const MobileSearchIcon = styled.div`
  margin-left: 5px;
  color: #555;
`;
