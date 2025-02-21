import styled from "styled-components";
import { Link } from "react-router-dom";

export const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f2f5; /* 아주대 통합인증 페이지처럼 연한 배경 */
`;

export const LoginWrapper = styled.div`
  display: flex;
  width: 900px;
  height: 550px;
  background: white;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
`;

export const ImageSection = styled.div`
  flex: 1;
  background-color: #eef4ff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MascotImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; /* ✅ 이미지가 컨테이너를 채우도록 설정 */
  border-radius: 10px; /* 둥근 모서리 유지 */
`;

export const LoginFormSection = styled.div`
  flex: 1;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.img`
  width: 200px;
  margin-bottom: 20px;
`;

export const Title = styled.h2`
  font-size: 22px;
  font-weight: bold;
  color: #1d1d1f;
  margin-bottom: 20px;
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
  padding: 10px 20px;
  font-size: 16px;
  background-color: #0056b3;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 20px;
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
  gap: 0.5rem;
`;

export const UserInfo = styled.p`
  font-size: 1rem;
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
