import styled from "styled-components";

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: #333;
  margin-bottom: 20px;
`;

export const EventList = styled.ul`
  list-style-type: none;
  padding: 0;
  width: 100%;
  max-width: 800px;
`;

export const EventItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: 15px;
  margin-bottom: 15px;
  background-color: #f8f8f8;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
`;

export const EventName = styled.h2`
  font-size: 1.6rem;
  color: #333;
`;

export const EventDate = styled.p`
  font-size: 1.1rem;
  color: #666;
  margin: 5px 0;
`;

export const EventLocation = styled.p`
  font-size: 1.1rem;
  color: #666;
  margin: 5px 0;
`;
