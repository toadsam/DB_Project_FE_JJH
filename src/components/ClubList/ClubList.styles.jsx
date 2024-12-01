import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
  background-color: #f4f7fb;
`;

export const ClubBox = styled.div`
  width: 250px;
  padding: 20px;
  border: 1px solid #dcdcdc;
  border-radius: 12px;
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

export const ClubName = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 12px;
  color: #333;
  text-align: center;
`;

export const PresidentName = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: #555;
  margin-bottom: 8px;
  text-align: center;
`;

export const Description = styled.p`
  font-size: 13px;
  color: #777;
  margin-bottom: 12px;
  text-align: center;
  line-height: 1.5;
`;

export const Category = styled.p`
  font-size: 13px;
  font-weight: 500;
  color: #4e73df;
  text-align: center;
  margin-top: 10px;
  text-transform: uppercase;
`;
