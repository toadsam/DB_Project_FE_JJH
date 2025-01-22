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

export const Nav = styled.nav`
  display: flex;
  gap: 1rem;
`;

export const NavItem = styled.div`
  color: #ff6600;
  cursor: pointer;
`;

export const Content = styled.div`
  padding: 2rem;
`;

export const Title = styled.h2`
  color: #0056b3;
  margin-bottom: 2rem;
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
  border-radius: 4px;
  background-color: #f9f9f9;
`;

export const UploadBox = styled.div`
  width: 100px;
  height: 100px;
  border: 2px dashed #ddd;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
`;

export const UploadIcon = styled.div`
  font-size: 2rem;
  color: #0056b3;
  cursor: pointer;
`;

export const SubmitButton = styled.button`
  padding: 0.75rem;
  font-size: 1rem;
  background-color: #0056b3;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 1rem;

  &:hover {
    background-color: #003f7f;
  }
`;
