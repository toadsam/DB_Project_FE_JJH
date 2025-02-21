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
  white-space: pre-wrap;
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
  text-align: center;
`;

/* 최신 모집공고 이미지 */
export const RecruitmentImage = styled.img`
  width: 100%;
  max-width: 600px;
  height: auto;
  margin: 20px 0;
  border-radius: 8px;
`;

/* 전년도 모집공고 드롭다운 스타일 */
export const PastRecruitmentContainer = styled.div`
  margin-top: 40px;
  padding-top: 20px;
  border-top: 1px solid #ccc;
`;

export const PastTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
  color: #046cc4;
  cursor: pointer;
  margin-bottom: 10px;
`;

export const PastDescription = styled.p`
  font-size: 16px;
  color: #555;
  line-height: 1.5;
  white-space: pre-wrap;
  transition: max-height 0.3s ease;
`;
