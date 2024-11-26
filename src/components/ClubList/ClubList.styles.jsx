import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
  background-color: #f0f0f0;
`;

export const ClubBox = styled.div`
  width: 200px;
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const ClubName = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
  color: #333;
`;

export const PresidentName = styled.p`
  font-size: 14px;
  color: #666;
`;
