import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  box-sizing: border-box;
  overflow: visible;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    max-width: 100%;
    padding: 0 10px;
  }
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

  @media (max-width: 768px) {
    width: 100%;
    margin: 0 auto 20px auto;
    position: relative;
    top: 0;
  }
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
  font-weight: ${(props) => (props.$isSelected ? "700" : "400")};
  color: ${(props) => (props.$isSelected ? "#007aff" : "#333")};
  margin-bottom: 10px;
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 5px;
  background-color: ${(props) =>
    props.$isSelected ? "#e6f7ff" : "transparent"};
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
  width: 100%;
  height: 1px;
  background-color: black;
  margin-top: 5px;
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

  @media (max-width: 768px) {
    padding: 10px;
  }
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
  min-width: 80px;
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
  display: inline-block;
`;

export const SectionContent = styled.p`
  white-space: pre-wrap;
  font-size: 16px;
  color: #555;
  line-height: 1.5;
  text-align: left;
`;

export const ButtonWrapper = styled.div`
  text-align: center;
  margin-top: 30px;
`;

export const CardContainer = styled.div`
  display: flex;
  padding: 30px;
  width: 90%;
  margin: 20px auto;
  background-color: #f6f4f4;
  border: 1px solid #ddd;
  border-radius: 5px;
  justify-content: space-between;
  margin-bottom: 30px;
  margin-top: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    padding: 15px;
    align-items: center;
  }
`;

export const CardLogo = styled(ClubLogo)`
  width: 250px;
  height: 200px;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1;
  text-align: left;
  align-items: center;
`;

export const CardInfoItem = styled.div`
  display: flex;
  gap: 10px;
`;

export const CardInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`;

export const CardHashTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const CardHashTagItem = styled(CardInfoItem)`
  background-color: transparent;
  font-weight: normal;
  color: #555;
`;

export const ActivityImagesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 10px;
  margin-top: 20px;
`;

export const ActivityImageItem = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
`;

/** ✅ 관리자 전용 섹션 추가 */
export const AdminSection = styled.div`
  background-color: #f8f9fa;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;
