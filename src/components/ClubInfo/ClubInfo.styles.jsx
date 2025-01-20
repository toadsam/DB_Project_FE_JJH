import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 100%;
  box-sizing: border-box;
  overflow: visible;

  padding: 20px 80px;
`;
export const Sidebar = styled.div`
  width: 180px;
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
  margin-right: 30px;
  margin-left: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  position: sticky;
  margin-top: 50px;
`;

export const SidebarTitle = styled.h2`
  font-size: 18px;
  font-weight: 700;
  color: #1d1d1f;
  margin-bottom: 10px;
`;

export const SidebarList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const SidebarItem = styled.li`
  font-size: 14px;
  font-weight: ${(props) => (props.isSelected ? "700" : "400")};
  color: ${(props) => (props.isSelected ? "#007aff" : "#333")};
  margin-bottom: 10px;
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 5px;
  background-color: ${(props) =>
    props.isSelected ? "#e6f7ff" : "transparent"};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f0f0f0;
  }
`;

export const Header = styled.div`
  width: 100%;
  margin-bottom: 10px;
`;

export const ClubTitle = styled.h1`
  font-size: 22px;
  color: black;
  margin: 0;
`;

export const TitleBar = styled.div`
  width: 100%; /* 전체 너비 */
  height: 1px;
  background-color: black; /* 동아리 색상 */
  margin-top: 5px; /* 제목과 간격 */
  border-radius: 2px;
`;
export const Content = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

export const InfoContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
  font-family: "Arial", sans-serif;
  display: flex;
  flex-direction: column;
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
  color: black;
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
    color: black;
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
  margin-bottom: 10px;
`;

export const SectionTitle = styled.h2`
  font-size: 17px;
  color: #046cc4;
  display: inline-block; /* 텍스트 크기에 맞게 배경색 크기 조정 */
`;

export const SectionContent = styled.p`
  font-size: 16px;
  color: #555;
  line-height: 1.5;
  text-align: left; /* 텍스트를 왼쪽 정렬 */
`;

export const ButtonWrapper = styled.div`
  text-align: center;
  margin-top: 30px;
`;

export const CardContainer = styled.div`
  display: flex;
  padding: 30px;
  width: 100%;
  margin: 20px auto;
  background-color: #ffffff; /* 카드 배경색 */
  border: 1px solid #ddd; /* 테두리 */
  border-radius: 10px; /* 모서리 둥글게 */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* 그림자 */

  justify-content: space-between;
  margin-bottom: 30px;
  margin-top: 30px;
`;

export const CardLogo = styled(ClubLogo)`
  width: 300px;
  height: 200px;
`;
export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px; /* 각 항목 간 간격 */
  flex: 1;
  text-align: left; /* 텍스트 왼쪽 정렬 */
  align-items: center;
`;

export const CardInfoItem = styled.div`
  display: flex;
  gap: 10px; /* 라벨과 값 간 간격 */
`;
export const CardInfoBox = styled.div`
  display: flex;
  flex-direction: column; /* 항목을 수직 정렬 */
  align-items: flex-start; /* 모든 항목을 왼쪽 정렬 */
  gap: 10px; /* 각 항목 간 간격 */
`;
export const CardHashTags = styled.div`
  display: flex;
  flex-wrap: wrap; /* 해시태그가 많으면 줄바꿈 */
  gap: 10px; /* 해시태그 간 간격 */
`;

export const CardHashTagItem = styled(CardInfoItem)`
  background-color: transparent;
  font-weight: normal; /* 기존 스타일과 통일 */
  color: #555;
`;
