import styled from "styled-components";

// 전체 컨테이너 스타일
export const ApplyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f4f4f4;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

// 제목 스타일
export const Title = styled.h1`
  font-size: 2rem;
  color: #333;
  margin-bottom: 20px;
`;

// 모집공고 설명 스타일
export const Description = styled.p`
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 20px;
  text-align: center;
`;

// 지원 완료 메시지 스타일
export const Message = styled.p`
  font-size: 1.1rem;
  color: #28a745;
  margin-bottom: 20px;
  text-align: center;
`;

// 버튼 컨테이너 스타일 (문의하기, 지원하기 버튼을 가로로 배치)
export const ButtonContainer = styled.div`
  display: flex;
  gap: 15px;
`;

// 문의하기 버튼 스타일
export const ContactButton = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

// 지원하기 버튼 스타일
export const ApplyButton = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  color: #fff;
  background-color: #28a745;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #218838;
  }
`;
