import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-family: Arial, sans-serif;
  background-color: #f9f9f9;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
`;

export const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #0056b3;
`;

// ✅ 네비게이션 스타일 수정
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

export const Content = styled.div`
  display: flex;
  margin: 2rem;
`;

export const Sidebar = styled.div`
  width: 240px;
  padding: 1.5rem;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

// ✅ 카테고리 제목 강조
export const SidebarTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #ddd;
`;

export const SidebarList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const SidebarItem = styled.li`
  font-size: 1rem;
  color: ${(props) => (props.$isSelected ? "#0056b3" : "#333")};
  font-weight: ${(props) => (props.$isSelected ? "bold" : "normal")};
  cursor: pointer;
  padding: 0.75rem 1rem;
  border-radius: 6px;
  background-color: ${(props) => (props.$isSelected ? "#e6f7ff" : "transparent")};
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #f0f4ff;
    color: #0056b3;
  }
`;

export const Main = styled.main`
  flex: 1;
  padding-left: 2rem;
`;

export const Title = styled.h2`
  color: #0056b3;
  margin-bottom: 2rem;
`;

export const Highlight = styled.span`
  color: #ff3366;
  font-weight: bold;
`;

export const Form = styled.form`
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
  padding: 0.75rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 6px;
  background-color: #f9f9f9;
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 6px;
  background-color: #f9f9f9;
  resize: none;
  height: 150px;
`;

// ✅ Select 스타일 추가
export const Select = styled.select`
  width: 100%;
  padding: 0.75rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 6px;
  background-color: #f9f9f9;
  cursor: pointer;
`;

export const SubmitButton = styled.button`
  padding: 0.75rem;
  font-size: 1rem;
  background-color: #0056b3;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  margin-top: 1rem;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #003f7f;
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

export const SuccessMessage = styled.p`
  color: green;
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;
