import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
`;

export const ContentContainer = styled.div`
  margin-left: 220px; /* Sidebar의 너비만큼 여백 */
  padding: 20px;
  width: calc(100% - 220px); /* Sidebar 크기를 빼고 컨텐츠 영역의 너비 설정 */
`;
