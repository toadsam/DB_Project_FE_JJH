import styled from "styled-components";
import { Link } from "react-router-dom"; // ✅ 추가
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Arial, sans-serif;
  background-color: #f9f9f9;
  min-height: 100vh;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 1rem 2rem;
  background-color: #fff;
  border-bottom: 1px solid #ccc;
`;

export const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #0056b3;
  margin-left: 20px;
`;

// ✅ 네비게이션 스타일 적용
export const Nav = styled.nav`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

export const NavItem = styled.div`
  color: #000;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  padding: 0.5rem 1rem;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #0056b3;
  }
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  background-color: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 50%;
`;

export const Title = styled.h2`
  color: #0056b3;
  margin-bottom: 1rem;
`;

export const SubText = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 1rem;
`;

export const Button = styled.button`
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  background-color: #0056b3;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 1rem;
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
  margin-top: 2rem;
  gap: 0.75rem;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: #0056b3;
  font-size: 1rem;
  font-weight: bold;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #003f7f;
  }
`;
