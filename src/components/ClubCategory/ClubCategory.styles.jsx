import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between; /* 섹션 간 간격 */
  padding: 10px 150px;
  gap: 10px;
  margin-bottom: 15px;
  margin-top: 10px;
`;

export const CategoryGroup = styled.div`
  display: flex;
  flex-direction: column; /* 제목과 리스트를 세로로 배치 */
  align-items: flex-start; /* 왼쪽 정렬 */
`;

export const Title = styled.h2`
  font-size: 18px;
  font-weight: 1000;
  color: ${(props) => props.color || "#000"}; /* 동적으로 색상 변경 */
  margin-bottom: 5px;
`;

export const ItemList = styled.div`
  display: flex;
  flex-wrap: ${(props) =>
    props.noWrap ? "nowrap" : "wrap"}; /* 조건부 줄바꿈 */
  flex-direction: ${(props) =>
    props.noWrap ? "column" : "row"}; /* 세로 정렬 */
  gap: 3px; /* 아이템 간 간격 */
  margin-top: 10px;
  padding-left: 5px;
  border-left: 1px solid #ccc; /* 왼쪽 선 추가 */
`;

export const Item = styled.div`
  flex: ${(props) =>
    props.noWrap ? "0 0 100%" : "0 0 calc(50% - 10px)"}; /* 조건부 크기 */
  font-size: 14px;
  font-weight: 600;
  color: #000;
  margin-bottom: 8px;
  cursor: pointer;

  &:hover {
    color: #007aff; /* 아이템에 마우스 오버 시 색상 변경 */
  }
`;
