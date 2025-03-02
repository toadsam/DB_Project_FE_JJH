import styled from "styled-components";

export const ScheduleContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 15px;
  background: white;
  box-sizing: border-box;

  @media (max-width: 768px) {
    width: 100vw;
    min-width: 300px;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
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
  font-size: 20px;
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
  align-items: center;
  padding: 12px 10px;
  border-bottom: 1px solid #ddd;
  font-size: 14px;
`;

export const Title = styled.span`
  font-size: 16px;
  color: #333;
  font-weight: 400;
  flex: 1;
`;

export const Date = styled.span`
  font-size: 14px;
  color: #555;
  text-align: right;
`;

export const NoSchedule = styled.div`
  text-align: center;
  color: #999;
  font-size: 16px;
  padding: 20px;
  width: 100%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
