import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  margin: 2rem auto;
  font-family: "Arial", sans-serif;
`;

export const Title = styled.h2`
  text-align: center;
  color: #0056b3;
  margin-bottom: 1.5rem;
`;

export const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

export const Select = styled.select`
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
  background-color: #f9f9f9;
  width: 150px;
`;

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
  justify-content: center;
`;

export const Card = styled.div`
  background: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  cursor: pointer;
  transition: box-shadow 0.3s ease-in-out;
  &:hover {
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
  }
`;

export const CardTitle = styled.h3`
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 0.5rem;
`;

export const CardInfo = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin: 0.2rem 0;
`;

export const Loading = styled.div`
  text-align: center;
  font-size: 1.2rem;
  color: #777;
`;

export const Error = styled.div`
  text-align: center;
  color: red;
  font-size: 1rem;
`;
