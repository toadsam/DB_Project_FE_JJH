import styled from "styled-components";

// 전체 컨테이너 스타일
export const Container = styled.div`
  padding: 20px;
  background-color: #f9f9f9;
  max-width: 800px;
  margin: 0 auto;
  border-radius: 8px;
`;

// 제목 스타일
export const Title = styled.h1`
  font-size: 24px;
  text-align: center;
  margin-bottom: 20px;
`;

// 프로필 정보 스타일
export const ProfileInfo = styled.div`
  display: flex;
  margin-bottom: 15px;
`;

export const Label = styled.div`
  font-weight: bold;
  width: 120px;
`;

export const Value = styled.div`
  color: #555;
`;

// 섹션 제목 스타일
export const SectionTitle = styled.h2`
  font-size: 20px;
  margin-top: 20px;
  margin-bottom: 10px;
`;

// 동아리 리스트 스타일
export const List = styled.ul`
  padding-left: 20px;
  list-style-type: none;
`;

export const ListItem = styled.li`
  font-size: 16px;
  color: #333;
  margin-bottom: 8px;
`;

export const NoData = styled.div`
  font-size: 16px;
  color: #888;
  margin-top: 10px;
`;

// 수정 버튼 스타일
export const EditButton = styled.button`
  margin-top: 20px;
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
