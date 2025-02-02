import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  font-family: "Arial", sans-serif;
`;

export const Title = styled.h1`
  font-size: 20px;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
`;

export const InfoBox = styled.div`
  width: 100%;
  max-width: 600px;
  background: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

export const Link = styled.a`
  color: #007bff;
  text-decoration: none;
  font-weight: bold;
  display: block;
  margin: 5px 0;

  &:hover {
    text-decoration: underline;
  }
`;

export const ContactInfo = styled.p`
  font-size: 14px;
  color: #555;
  margin: 5px 0;
`;

export const Footer = styled.footer`
  margin-top: 20px;
  font-size: 12px;
  color: #777;
`;

export const Image = styled.img`
  width: 100%;
  max-width: 700px;
  margin-top: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;
