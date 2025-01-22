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
  display: flex;
  margin: 2rem;
`;

export const Sidebar = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-right: 1px solid #ddd;
  padding-right: 1rem;
`;

export const SidebarItem = styled.div`
  cursor: pointer;
  font-size: 1rem;
  color: #333;

  &:hover {
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

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 2rem;
`;

export const TableHeader = styled.th`
  border: 1px solid #ddd;
  padding: 0.75rem;
  background-color: #f0f8ff;
  text-align: left;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

export const TableCell = styled.td`
  border: 1px solid #ddd;
  padding: 0.75rem;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
`;

export const Button = styled.button`
  padding: 0.75rem 2rem;
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
