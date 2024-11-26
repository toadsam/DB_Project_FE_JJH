import styled from "styled-components";

// Toggle 버튼 스타일
export const ToggleButton = styled.button`
  position: absolute;
  top: 70px; /* 원하는 상단 위치 */
  left: ${({ isOpen }) =>
    isOpen ? "200px" : "10px"}; /* 사이드바 열림 여부에 따라 위치 변경 */
  transition: left 0.3s ease; /* 부드러운 이동 효과 */
  z-index: 1000; /* 사이드바 위에 표시 */
  padding: 10px;
  border: none;
  background-color: #333;
  color: white;
  cursor: pointer;
`;

// 사이드바 컨테이너 스타일
export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 200px;
  height: 100%;
  background-color: #222;
  color: white;
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.5);
`;

// 메뉴 아이템 스타일
export const MenuItem = styled.div`
  margin: 10px 0;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    color: #ddd;
  }
`;
