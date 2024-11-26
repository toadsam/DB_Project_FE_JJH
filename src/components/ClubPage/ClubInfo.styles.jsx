import styled from "styled-components";

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: #333;
`;

export const Image = styled.img`
  width: 150px;
  height: 150px;
  margin-top: 20px;
  border-radius: 8px;
`;

export const Description = styled.p`
  font-size: 1rem;
  color: #555;
  margin-top: 20px;
  text-align: center;
  max-width: 600px;
`;
