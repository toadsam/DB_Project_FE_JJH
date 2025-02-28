import styled from "styled-components";

// 데스크탑: 한 줄(row), 모바일: 세로(column)
export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

// 빨간 박스들을 감싸는 컨테이너는 항상 가로 정렬
export const ActionContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const DaysLeftBadge = styled.span`
  font-size: 14px;
  font-weight: bold;
  color: #ffffff;
  background-color: #f44336; /* 붉은 계열 강조 색상 */
  padding: 5px 10px;
  border-radius: 12px;
`;

export const Section = styled.div`
  margin-bottom: 10px;
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
  width: 60%;
  max-width: 600px;
  height: auto;
  margin: 20px 0;
  border-radius: 8px;
`;

/* 단일 이미지 중앙 정렬 컨테이너 */
export const ImageContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin: 10px 0;
`;

/* 캐러셀 컨테이너 */
export const ImageCarouselContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`;

/* 좌측 화살표 버튼 */
export const LeftArrow = styled.button`
  position: absolute;
  left: 10px;
  background-color: rgba(0, 0, 0, 0.5);
  border: none;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
  padding: 10px;
  border-radius: 50%;
`;

/* 우측 화살표 버튼 */
export const RightArrow = styled.button`
  position: absolute;
  right: 10px;
  background-color: rgba(0, 0, 0, 0.5);
  border: none;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
  padding: 10px;
  border-radius: 50%;
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

export const ApplyButton = styled.a`
  text-decoration: none;
  font-size: 14px;
  font-weight: bold;
  color: #ffffff;
  background-color: #f44336; /* 붉은 계열 강조 색상 */
  padding: 5px 10px;
  border-radius: 12px;
`;
export const ApplyContainer = styled.div`
  width: 100%;
  max-width: 1200px; /* 데스크탑 기준 폭 */
  margin: 0 auto; /* 좌우 자동 여백 -> 중앙 정렬 */
  padding: 0 20px; /* 내부 여백 */
  box-sizing: border-box;
  font-family: "Arial", sans-serif;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    max-width: 90%; /* 모바일 폭 90% */
    padding: 0;
    text-align: center; /* 내부 텍스트 중앙 정렬 */
  }
`;

export const Title = styled.h1`
  font-size: 18px;
  font-weight: bold;
  color: #046cc4;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const Description = styled.p`
  font-size: 16px;
  color: #555;
  margin-bottom: 20px;
  line-height: 1.5;
  white-space: pre-wrap; /* 기존 줄바꿈 유지 */

  @media (max-width: 768px) {
    text-align: center;
    word-break: break-word; /* 길어지면 자동 줄바꿈 */
  }
`;

export const SectionTitle = styled.h2`
  font-size: 17px;
  color: #046cc4;
  display: inline-block;

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;

export const SectionContent = styled.p`
  font-size: 16px;
  color: #555;
  line-height: 1.5;
  text-align: left;

  @media (max-width: 768px) {
    text-align: center;
    word-break: break-word;
  }
`;
