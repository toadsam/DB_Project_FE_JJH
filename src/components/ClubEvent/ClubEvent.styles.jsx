import styled from "styled-components";

export const ApplyContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1200px; /* 디자인 기준 폭 (예: 1200px) */
  margin: 0 auto; /* 좌우 자동 여백 -> 중앙 정렬 */
  padding: 0 10px; /* 작은 화면일 때 내부 여백 추가 */
`;

export const Title = styled.h1`
  font-size: 17px;
  font-weight: bold;
  color: #046cc4; /* 강조 색상 */
  margin-top: 20px;
`;

export const Description = styled.p`
  font-size: 16px;
  color: #555;
  line-height: 1.5;
`;

export const Section = styled.div`
  margin-bottom: 10px;
`;

export const SectionTitle = styled.h2`
  font-size: 17px;
  color: #046cc4;
  display: inline-block; /* 텍스트 크기에 맞게 배경색 크기 조정 */
`;

export const SectionContent = styled.p`
  font-size: 16px;
  color: #555;
  line-height: 1.5;
  text-align: left; /* 텍스트를 왼쪽 정렬 */
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
`;

export const ContactButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  color: #046cc4;
  background-color: #e6f7ff;
  border: 2px solid #046cc4;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #046cc4;
    color: #ffffff;
  }
`;

export const ApplyButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  color: #ffffff;
  background-color: #046cc4;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #004a8c;
  }
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
export const Message = styled.p`
  font-size: 18px;
  color: #28a745; /* 녹색 메시지 */
  font-weight: bold;
  margin-top: 20px;
  text-align: center;
`;

export const InfoBox = styled.div`
  margin-top: 10px;
  border-top: 1px solid #ddd;
  padding-top: 10px;
`;

export const InfoItem = styled.div`
  margin-bottom: 10px;
  display: flex;
`;

export const Label = styled.span`
  font-weight: bold;
  width: 100px;
`;

export const Value = styled.span`
  color: #333;
`;

export const ImageContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin: 10px 0;
`;

export const Image = styled.img`
  width: 100px;
  height: auto;
  border-radius: 4px;
`;
