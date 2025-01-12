import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: #f9f9f9;
`;

export const Sidebar = styled.div`
  width: 250px;
  background-color: #ffffff;
  border-right: 1px solid #e0e0e0;
  padding: 20px;
`;

export const SidebarTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  color: #1d1d1f;
  margin-bottom: 20px;
`;

export const MenuList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const MenuItem = styled.li`
  margin-bottom: 15px;
  font-size: 16px;

  a {
    color: #007aff;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const ContentContainer = styled.div`
  flex: 1;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ClubName = styled.h1`
  font-size: 36px;
  font-weight: 700;
  color: #1d1d1f;
  margin-bottom: 20px;
`;

export const Image = styled.img`
  border-radius: 12px;
  width: 850px;
  height: 400px;
  object-fit: cover;
  margin-bottom: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const Description = styled.p`
  font-size: 18px;
  color: #4a4a4a;
  line-height: 1.8;
  margin-bottom: 20px;
  text-align: justify;
`;

export const ContactSection = styled.div`
  width: 100%;
  max-width: 600px;
  margin-bottom: 20px;
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
`;

export const ContactTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableRow = styled.tr`
  border-bottom: 1px solid #e0e0e0;

  &:last-child {
    border-bottom: none;
  }
`;

export const TableHeader = styled.th`
  text-align: left;
  padding: 10px;
  font-size: 16px;
  color: #1d1d1f;
  font-weight: 600;
`;

export const TableData = styled.td`
  text-align: left;
  padding: 10px;
  font-size: 16px;
  color: #4a4a4a;

  a {
    color: #007aff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;

export const EditButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 600;
  color: #ffffff;
  background-color: #007aff;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #005bb5;
  }

  &:active {
    background-color: #003f7f;
  }
`;
export const SectionTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: #007aff;
  margin-top: 30px;
  margin-bottom: 20px;
`;

export const MemberList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  width: 100%;
`;

export const MemberItem = styled.li`
  display: grid;
  grid-template-columns: 2fr 1fr 3fr 2fr 1fr; /* 열 비율 설정 */
  align-items: center;
  padding: 10px 20px;
  border-bottom: 1px solid #e0e0e0;

  &:last-child {
    border-bottom: none;
  }
`;
export const MenuLink = styled.div`
  cursor: pointer;
  color: #007aff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const MemberName = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: #1d1d1f;
`;

export const MemberRole = styled.span`
  font-size: 16px;
  color: #007aff;
  text-align: center; /* 가운데 정렬 */
`;

export const MemberActivity = styled.span`
  font-size: 16px;
  color: #4a4a4a;
  text-align: center; /* 가운데 정렬 */
`;

export const NoData = styled.div`
  font-size: 16px;
  color: #888;
  text-align: center;
  margin-top: 20px;
`;
export const MemberEmail = styled.span`
  font-size: 16px;
  color: #4a4a4a;
`;

export const MemberPhone = styled.span`
  font-size: 16px;
  color: #4a4a4a;
  text-align: center; /* 가운데 정렬 */
`;
export const RecruitmentBox = styled.div`
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
`;

export const RecruitmentItem = styled.div`
  margin-bottom: 15px;
`;

export const RecruitmentItemTitle = styled.span`
  font-weight: 600;
  color: #007aff;
`;

export const RecruitmentItemContent = styled.span`
  margin-left: 10px;
  color: #4a4a4a;
  display: inline-block;
  white-space: pre-wrap; /* 줄바꿈 처리 */
`;
export const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
`;

export const ApproveButton = styled.button`
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

export const RejectButton = styled.button`
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;

  &:hover {
    background-color: #e53935;
  }
`;
