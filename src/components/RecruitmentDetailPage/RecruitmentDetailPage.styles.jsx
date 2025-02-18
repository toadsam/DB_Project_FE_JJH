import styled from "styled-components";

export const Container = styled.div`
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h2`
  color: #0056b3;
  margin-bottom: 20px;
`;

export const Info = styled.p`
  font-size: 1rem;
  margin: 5px 0;
  color: #333;
`;

export const Description = styled.p`
  font-size: 1rem;
  margin-top: 20px;
  line-height: 1.6;
  color: #444;
`;

export const Loading = styled.p`
  text-align: center;
  font-size: 1.2rem;
  color: #666;
`;

export const Error = styled.p`
  text-align: center;
  font-size: 1.2rem;
  color: red;
`;
