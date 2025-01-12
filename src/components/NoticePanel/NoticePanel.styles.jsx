import styled from "styled-components";

export const PanelContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%; /* 부모 요소의 높이를 채움 */
  overflow-y: auto; /* 내용이 길어지면 스크롤 */
  padding: 10px;
  box-sizing: border-box;
`;
export const Header = styled.div`
  flex-shrink: 0; /* 높이 고정 */
`;

export const TabMenu = styled.div`
  display: flex;
  border-bottom: 2px solid #ddd;
  margin-bottom: 20px;
`;

export const TabItem = styled.button`
  flex: 1;
  padding: 10px 15px;
  font-size: 16px;
  background: ${({ active }) => (active ? "#007aff" : "transparent")};
  color: ${({ active }) => (active ? "white" : "#333")};
  border: none;
  border-radius: ${({ active }) => (active ? "8px 8px 0 0" : "0")};
  cursor: pointer;
  text-align: center;
  transition: background 0.3s ease, color 0.3s ease;

  &:hover {
    background: ${({ active }) => (active ? "#005bb5" : "#f0f0f0")};
  }
`;

export const NoticeList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const NoticeItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 10px 15px;
  background: #fff;
  border-radius: 8px;
  margin-bottom: 10px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.span`
  font-size: 16px;
  color: #333;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Date = styled.span`
  font-size: 14px;
  color: #555;
`;

export const MoreButton = styled.button`
  width: 100%;
  padding: 10px;
  background: #f0f0f0;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  color: #007aff;
  cursor: pointer;
  text-align: center;

  &:hover {
    background: #e0e0e0;
  }
`;
export const Content = styled.div`
  flex-grow: 1; /* 남은 공간을 채움 */
  overflow-y: auto; /* 내용이 많을 경우 스크롤 */
  padding: 10px;
  box-sizing: border-box;
`;
