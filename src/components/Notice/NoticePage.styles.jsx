import styled from "styled-components";

export const Container = styled.div`
  width: 80%; /* 전체 컨테이너 너비 설정 */
  margin: 0 auto; /* 좌우 중앙 정렬 */
  text-align: center;
  padding: 20px;
`;

export const Title = styled.h1`
  font-size: 22px;
  color: #333;
  margin-bottom: 15px;
`;

export const TitleBar = styled.div`
  width: 5%;
  height: 0.8px;
  background-color: black;
  margin: 0 auto 20px;
`;

export const TabContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

export const TabItem = styled.div`
  width: 100%; /* 고정된 너비 */
  height: 40px; /* 고정된 높이 */
  line-height: 40px; /* 텍스트를 수직 중앙 정렬 */
  font-size: 13px;
  text-align: center; /* 텍스트를 가로 중앙 정렬 */
  color: ${(props) => (props.active ? "white" : "black")};
  background-color: ${(props) => (props.active ? "#046CC4" : "white")};
  border: 1px solid gray;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.active ? "#005bb5" : "#f0f8ff")};
  }
`;

export const List = styled.div`
  width: 100%; /* 리스트가 컨테이너에 맞도록 설정 */
  margin-top: 20px;
  border-top: 1px solid #ccc;
`;

export const ListHeader = styled.div`
  display: flex;
  background-color: #f9f9f9;
  border-bottom: 1px solid #ccc;
`;

export const ListRow = styled.div`
  display: flex;
  border-bottom: 1px solid #eee;

  &:hover {
    background-color: #f8f8f8;
  }
`;

export const ListColumn = styled.div`
  flex: 1;
  padding: 10px;
  font-size: 14px;
  text-align: left;

  &:nth-child(1) {
    flex: 0.2; /* 번호 컬럼 너비 */
    text-align: center;
  }

  &:nth-child(3) {
    flex: 0.4; /* 날짜 컬럼 너비 */
    text-align: center;
  }

  a {
    color: inherit; /* 부모 요소의 색상을 상속 */
    text-decoration: none; /* 밑줄 제거 */
    cursor: pointer;

    &:hover {
      text-decoration: none; /* 호버 시에도 밑줄 제거 */
    }
  }
`;

export const Loading = styled.div`
  text-align: center;
  font-size: 18px;
  color: gray;
`;

export const Error = styled.div`
  text-align: center;
  font-size: 18px;
  color: red;
`;
