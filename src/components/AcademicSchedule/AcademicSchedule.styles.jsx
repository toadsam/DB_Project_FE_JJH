import styled from "styled-components";

export const ScheduleContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%; /* 부모 요소의 높이를 채움 */
  overflow-y: auto; /* 내용이 길어지면 스크롤 */
  padding: 10px;
  box-sizing: border-box;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  flex-shrink: 0; /* 높이 고정 */
`;

export const ArrowButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  color: #007aff;
  cursor: pointer;

  &:hover {
    color: #005bb5;
  }
`;

export const CurrentMonth = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: #333;
`;

export const ScheduleList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const ScheduleItem = styled.li`
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
`;

export const Date = styled.span`
  font-size: 14px;
  color: #555;
`;

export const NoSchedule = styled.div`
  text-align: center;
  color: #999;
  font-size: 16px;
  padding: 20px;
`;
export const Content = styled.div`
  flex-grow: 1; /* 남은 공간을 채움 */
  overflow-y: auto; /* 내용이 많을 경우 스크롤 */
  padding: 10px;
  box-sizing: border-box;
`;
