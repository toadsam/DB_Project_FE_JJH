import styled from "styled-components";

import { Link } from "react-router-dom";
// 전체 컨테이너 스타일
export const Container = styled.div`
  max-width: 600px;
  margin: 40px auto; /* 상하 여백 추가 */
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// 제목 스타일
export const Title = styled.h1`
  font-size: 28px;
  font-weight: 700;
  color: #1d1d1f;
  margin-bottom: 30px;
`;

// 프로필 정보 스타일
export const ProfileInfo = styled.div`
  display: flex;
  width: 100%; /* 전체 너비로 확장 */
  justify-content: space-between;
  margin-bottom: 20px;
  border-bottom: 1px solid #e5e5e5; /* 구분선 추가 */
  padding-bottom: 10px;
`;

export const Label = styled.div`
  font-weight: 600;
  font-size: 16px;
  color: #6e6e73;
`;

export const Value = styled.div`
  font-size: 16px;
  color: #333;
`;

// 섹션 제목 스타일
export const SectionTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: #007aff; /* Apple Blue */
  margin-top: 30px;
  margin-bottom: 20px;
`;

// 동아리 리스트 스타일
export const List = styled.ul`
  width: 100%;
  padding: 0;
  margin: 0;
  list-style-type: none;
`;

export const ListItem = styled.li`
  font-size: 16px;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 8px;
  background-color: #f9f9f9;
  color: #333;
  display: flex;
  align-items: center;

  &:hover {
    background-color: #f0f0f5; /* 살짝 더 밝은 회색 */
  }
`;

export const NoData = styled.div`
  font-size: 16px;
  color: #888;
  margin-top: 10px;
`;

// 수정 버튼 스타일
export const EditButton = styled.button`
  margin-top: 20px;
  padding: 12px 20px;
  background-color: #007aff;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #005bb5;
  }

  &:active {
    background-color: #003f7f;
  }
`;
// 동아리 박스 스타일
export const ClubBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  margin-bottom: 15px;
  border-radius: 8px;
  background-color: #f9f9f9;
  border: 1px solid #e5e5e5; /* 연한 회색 테두리 */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05); /* 약간의 그림자 */

  &:hover {
    background-color: #f0f0f5; /* 살짝 밝은 배경 */
    transform: translateY(-2px); /* 살짝 올라오는 효과 */
    transition: all 0.3s ease;
  }
`;

// 동아리 이름 스타일
export const ClubName = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #1d1d1f;
`;

// 동아리 링크 스타일
export const LogoLink = styled(Link)`
  text-decoration: none; /* 밑줄 제거 */
  color: inherit;

  &:hover {
    text-decoration: underline; /* 호버 시 밑줄 */
  }
`;
