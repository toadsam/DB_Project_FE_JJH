import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-height: 100%;
  background-color: #f0f2f5;
`;

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 700px;
  height: 450px;
  background: white;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  margin: 20px;
`;

export const ContentRow = styled.div`
  flex: 1;
  display: flex;
`;

export const BoxFooter = styled.footer`
  width: 90%;
  margin: 0 auto;
  border-top: 1px solid #ddd;
  padding: 10px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #666;
  font-size: 12px;
`;

export const ImageSection = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const MascotImage = styled.img`
  width: 90%;
  height: 90%;
  object-fit: cover;
`;

export const LoginFormSection = styled.div`
  flex: 1;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const AuthBox = styled.div`
  position: relative;
  padding-left: 50px;
  padding-right: 50px;
  margin: 0px;
  border-left: 1px solid black;
  margin-left: 15px;
  @media (max-width: 768px) {
    border-left: none;
    padding: 0px;
  }
`;

// 로고에 선택적 prop(center)이 true면 중앙 정렬 적용
export const Logo = styled.img`
  width: 180px;
  ${({ center }) =>
    center &&
    `
    display: block;
    margin: 0 auto;
  `}
`;

export const Title = styled.h2`
  font-size: 13px;
  font-weight: 500;
  color: rgb(12, 84, 148);
  margin-bottom: 25px;
  text-align: center;
`;

export const SubText = styled.p`
  font-size: 14px;
  color: #666;
  margin-bottom: 20px;
`;

export const GoogleLoginWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const Button = styled.button`
  padding: 8px 16px;
  font-size: 14px;
  background-color: #0056b3;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #003f7f;
  }

  &.logout {
    background-color: #ff3366;
    &:hover {
      background-color: #cc0022;
    }
  }
`;

export const UserSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const UserInfo = styled.p`
  font-size: 15px;
  color: #333;
`;

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  gap: 10px;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: #0056b3;
  font-size: 14px;
  font-weight: bold;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #003f7f;
  }
`;
