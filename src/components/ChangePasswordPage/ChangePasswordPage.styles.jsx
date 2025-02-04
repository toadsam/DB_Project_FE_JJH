import styled from "styled-components";

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
`;

// ✅ 네비게이션 스타일 수정
export const Nav = styled.nav`
  display: flex;
  gap: 2rem; /* 일정한 간격 유지 */
  align-items: center;
`;

export const NavItem = styled.div`
  color: #000; /* 검은색으로 변경 */
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  padding: 0.5rem 1rem; /* 클릭 영역 확대 및 일정한 크기 */
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #0056b3; /* 마우스 오버 시 색상 변경 */
  }
`;

export const Sidebar = styled.div`
  width: 200px;
  padding: 1rem;
  border-right: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const SidebarLink = styled.a`
  text-decoration: none;
  color: #333;

  &:hover {
    color: #0056b3;
  }
`;

export const PasswordSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem 0;
  width: 80%;
  background-color: #fff;
  padding: 2rem;
  border: 1px solid #ddd;
  border-radius: 8px;
`;

export const Title = styled.h2`
  color: #0056b3;
  margin-bottom: 1rem;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Label = styled.label`
  font-size: 1rem;
  color: #333;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #f9f9f9;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
`;

export const Button = styled.button`
  padding: 0.5rem 2rem;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &.cancel {
    background-color: #ccc;
    color: #333;
  }

  &.save {
    background-color: #0056b3;
    color: white;
  }
`;
