import styled from "styled-components";

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
  font-size: 20px;
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

export const ClubInfoWrapper = styled.div`
  flex-grow: 1;
`;

export const ClubName = styled.h1`
  font-size: 28px;
  font-weight: bold;
  color: #046cc4;
  margin-bottom: 10px;
`;

export const ContactInfo = styled.div`
  margin-top: 10px;
`;

export const ContactItem = styled.div`
  display: flex;
  margin-bottom: 5px;
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

export const ButtonWrapper = styled.div`
  text-align: center;
  margin-top: 30px;
`;

export const CardContainer = styled.div`
  display: flex;
  padding: 30px;
  width: 90%;
  margin: 20px auto;
  background-color: #f6f4f4; /* 카드 배경색 */
  border: 1px solid #ddd; /* 테두리 */
  justify-content: space-between;
  margin-bottom: 30px;
  margin-top: 30px;

  /* 모바일 전용 스타일 */
  @media (max-width: 768px) {
    flex-direction: column; /* 카드 내 요소들을 세로 정렬 */
    width: 100%;
    padding: 15px;
    align-items: center; /* 자식 요소들을 가운데 정렬 */
  }
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

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
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

export const ModalContent = styled.div`
  position: relative;
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  max-width: 80%;
  max-height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: #ff4d4f;
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: #d9363e;
  }
`;

export const ModalImage = styled.img`
  max-width: 450px;
  max-height: 450px;
  object-fit: contain;
`;
export const PageContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  box-sizing: border-box;
  overflow: visible;
  width: 100%;
  max-width: 1200px; /* 데스크탑 기준 */
  margin: 0 auto;
  padding: 0 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    max-width: 100%;
    margin: 0;
    padding: 0;
  }
`;

export const Sidebar = styled.div`
  width: 140px;
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
  margin-right: 30px;
  margin-left: 10px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
  position: sticky;
  margin-top: 50px;

  /* 모바일 전용 스타일 */
  @media (max-width: 768px) {
    width: 90%;
    margin: 0 auto 20px auto;
    position: relative;
    top: 0;
    margin-top: 10px;
  }
`;

export const InfoContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  /* 모바일 전용 스타일 */
  @media (max-width: 768px) {
    margin: 0;
  }
`;

/* 연락처, SNS 등 텍스트 요소 overflow 방지를 위한 스타일 */
export const ContactLabel = styled.span`
  font-weight: bold;
  color: #black;
  min-width: 80px;

  @media (max-width: 768px) {
    display: block;
    min-width: auto;
    margin-bottom: 4px;
  }
`;

export const ContactValue = styled.span`
  color: #333;
  word-wrap: break-word;
  overflow-wrap: break-word;

  a {
    color: black;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 768px) {
    display: block;
    width: 100%;
  }
`;

/* 이미지가 모바일에서 비율에 맞춰 유동적으로 표시되도록 */
export const ClubLogo = styled.img`
  width: 120px;
  height: 120px;
  object-fit: cover;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

export const CardLogo = styled(ClubLogo)`
  width: 250px;
  height: 200px;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    max-width: none;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 17px;
  color: #046cc4;
  display: inline-block;
  /* 데스크탑은 기본 왼쪽 정렬 유지 */
  text-align: left;

  @media (max-width: 768px) {
    width: 100%;
    text-align: center; /* 모바일에서는 중앙 정렬 */
    margin-left: 20px;
  }
`;

export const SectionContent = styled.p`
  white-space: pre-wrap;
  font-size: 16px;
  color: #333;
  line-height: 1.6;
  text-align: left; /* 기본 왼쪽 정렬 */

  @media (max-width: 768px) {
    text-align: center; /* 모바일에서는 중앙 정렬 */
    margin-left: 20px;
  }
`;
export const Link = styled.a`
  color: #007bff;
  text-decoration: none;
  font-weight: bold;
  display: block;

  &:hover {
    text-decoration: underline;
  }
`;
