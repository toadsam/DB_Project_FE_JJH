import styled from "styled-components";

export const ApplyContainer = styled.div`
  width: 100%;
  max-width: 1200px; /* 디자인 기준 폭 (예: 1200px) */
  margin: 0 auto; /* 좌우 자동 여백 -> 중앙 정렬 */
  padding: 0 20px; /* 작은 화면일 때 내부 여백 추가 */
  box-sizing: border-box;
  font-family: "Arial", sans-serif;
  display: flex;
  flex-direction: column;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
`;

export const Title = styled.h1`
  font-size: 18px;
  font-weight: bold;
  color: #046cc4;
`;

export const DaysLeftBadge = styled.span`
  font-size: 14px;
  font-weight: bold;
  color: #ffffff;
  background-color: #f44336; /* 붉은 계열 강조 색상 */
  padding: 5px 10px;
  border-radius: 12px;
`;

export const TypeBadge = styled.span`
  font-size: 14px;
  font-weight: bold;
  color: #ffffff;
  background-color: rgb(255, 68, 0);
  padding: 5px 10px;
  border-radius: 12px;
`;

export const Description = styled.p`
  font-size: 16px;
  color: #555;
  margin-bottom: 20px;
  line-height: 1.5;
`;

export const Section = styled.div`
  margin-bottom: 10px;
`;

export const SectionTitle = styled.h2`
  font-size: 17px;
  color: #046cc4;
  display: inline-block;
`;

export const SectionContent = styled.p`
  font-size: 16px;
  color: #555;
  line-height: 1.5;
  text-align: left;
`;

export const Loading = styled.div`
  font-size: 18px;
  color: #046cc4;
  text-align: center;
  padding: 50px 0;
`;

export const Error = styled.div`
  font-size: 18px;
  color: red;
  text-align: center;
  padding: 50px 0;
  background-color: #ffe6e6;
  border: 1px solid red;
  border-radius: 8px;
  margin: 20px auto;
`;
