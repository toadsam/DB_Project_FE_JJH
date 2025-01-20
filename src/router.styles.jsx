import styled from "styled-components";

export const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;
  padding: 20px;
  width: 100%;
  box-sizing: border-box;
`;

export const PanelWrapper = styled.div`
  flex: 1; /* 두 컴포넌트를 동일한 너비로 배치 */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 330px; /* 부모 RowContainer의 높이를 채움 */
  border-radius: 5px;
  box-sizing: border-box;

  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.1);
  border: 0.2px solid #ccc;
  overflow: hidden; /* 내용이 길어질 경우 부모를 넘치지 않도록 설정 */
`;
