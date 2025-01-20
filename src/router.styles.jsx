import styled from "styled-components";

export const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start; /* 요소를 왼쪽부터 정렬 */
  align-items: flex-start;
  gap: 20px;
  padding: 0 40px;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 20px;
  margin-top: 20px;
`;

export const PanelWrapper = styled.div`
  flex: 1; /* 두 컴포넌트를 동일한 너비로 배치 */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 330px; /* 부모 RowContainer의 높이를 채움 */

  box-sizing: border-box;

  border: 0.5px solid #ccc;
`;
