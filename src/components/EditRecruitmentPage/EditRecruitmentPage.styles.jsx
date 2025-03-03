import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-family: Arial, sans-serif;
  background-color: #f9f9f9;
`;

export const Content = styled.div`
  display: flex;
  margin: 2rem;
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
