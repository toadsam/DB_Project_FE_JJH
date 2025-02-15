import styled from "styled-components";

export const PanelContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  background: white;
  box-sizing: border-box;
  overflow-x: auto; /* 수평 스크롤 활성화 */
  scroll-behavior: smooth; /* 부드러운 스크롤 */
  
`;

export const TabMenu = styled.div`
  display: flex;
  border-bottom: 2px solid #ddd;
`;

export const TabItem = styled.button`
  flex: 1;
  padding: 10px;
  font-size: 16px;
  background: ${({ active }) => (active ? "#046CC4" : "white")};
  color: ${({ active }) => (active ? "white" : "#333")};
  border: none;
  border-bottom: ${({ active }) => (active ? "2px solid #007aff" : "none")};
  cursor: pointer;
  text-align: center;
  transition: background 0.3s ease, color 0.3s ease;

  &:hover {
    background: ${({ active }) => (active ? "#005bb5" : "#f0f0f0")};
  }
`;

export const NoticeList = styled.div`
  margin-top: 20px;
`;

export const NoticeItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #ddd;
`;

export const Title = styled.span`
  font-size: 16px;
  color: #333;
  font-weight: 500;
`;

export const Date = styled.span`
  font-size: 14px;
  color: #555;
`;

export const MoreButton = styled.button`
  width: 100%;
  padding: 10px;
  background: #046cc4;
  border: none;
  color: white;
  font-size: 14px;
  font-weight: bold;
  border-radius: 4px;
  cursor: pointer;
  text-align: center;
  margin-top: 10px;
  &:hover {
    background: #005bb5;
  }
`;
export const LoadingMessage = styled.div`
  text-align: center;
  font-size: 18px;
  color: gray;
`;

export const ErrorMessage = styled.div`
  text-align: center;
  font-size: 18px;
  color: red;
`;
