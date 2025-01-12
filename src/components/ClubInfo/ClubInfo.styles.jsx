import styled from "styled-components";

export const InfoContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: "Arial", sans-serif;
`;

export const Loading = styled.div`
  font-size: 18px;
  color: #007aff;
  text-align: center;
  padding: 50px 0;
`;

export const Error = styled.div`
  font-size: 18px;
  color: red;
  text-align: center;
  padding: 50px 0;
`;

export const TopSection = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  margin-bottom: 30px;
`;

export const LogoWrapper = styled.div`
  flex-shrink: 0;
`;

export const ClubLogo = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 10px;
  object-fit: cover;
`;

export const ClubInfoWrapper = styled.div`
  flex-grow: 1;
`;

export const ClubName = styled.h1`
  font-size: 28px;
  font-weight: bold;
  color: #007aff;
  margin-bottom: 10px;
`;

export const ContactInfo = styled.div`
  margin-top: 10px;
`;

export const ContactItem = styled.div`
  display: flex;
  margin-bottom: 5px;
`;

export const ContactLabel = styled.span`
  font-weight: bold;
  color: #333;
  margin-right: 10px;
`;

export const ContactValue = styled.span`
  color: #555;
  a {
    color: #007aff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const HashTags = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 30px;
`;

export const HashTag = styled.span`
  background-color: #f0f0f5;
  color: #007aff;
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 14px;
`;

export const Section = styled.div`
  margin-bottom: 20px;
`;

export const SectionTitle = styled.h2`
  font-size: 20px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
`;

export const SectionContent = styled.p`
  font-size: 16px;
  color: #555;
  line-height: 1.5;
`;

export const ButtonWrapper = styled.div`
  text-align: center;
  margin-top: 30px;
`;

export const JoinButton = styled.button`
  padding: 10px 20px;
  background-color: #007aff;
  color: white;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #005bb5;
  }
`;
