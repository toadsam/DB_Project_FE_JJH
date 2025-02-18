import styled from "styled-components";
export const MainContainer = styled.div`
  width: 100%;
  max-width: 1200px; /* 디자인 기준 폭 (예: 1200px) */
  margin: 0 auto; /* 좌우 자동 여백 -> 중앙 정렬 */
  @media (max-width: 768px) {
    max-width: 100%; /* 모바일에서는 화면 전체 너비를 사용 */
  }
`;
export const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start; /* 요소를 왼쪽부터 정렬 */
  align-items: flex-start;
  gap: 20px;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 20px;
  margin-top: 20px;

  /* 화면이 모바일 사이즈일 때 컬럼으로 변경 */
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const PanelWrapper = styled.div`
  flex: 1; /* 두 컴포넌트를 동일한 너비로 배치 */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 330px; /* 부모 RowContainer의 높이를 채움 */
  box-sizing: border-box;
  border: 0.5px solid #ccc;

  @media (max-width: 768px) {
    height: auto;
  }
`;
