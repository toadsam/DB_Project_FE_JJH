import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TopBar = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: #f9f9f9;
  padding: 5px 20px;
  font-size: 12px;
  color: #666;
  border-bottom: 1px solid #ccc;
`;

export const TopBarItem = styled.span`
  margin-left: 15px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  border-bottom: 1px solid #ccc;
`;

export const LogoLink = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  width: 180px;
  height: auto;
  padding-left: 50px;
`;

export const Menu = styled.div`
  display: flex;
  justify-content: space-evenly; /* 메뉴를 헤더의 남은 공간에 균등 분배 */
  flex-grow: 1; /* 남은 공간을 메뉴가 차지 */
`;

export const MenuItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  &:hover > div {
    display: block;
  }
`;

export const Text = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: ${(props) => props.color || "#000"};
`;

export const Dropdown = styled.div`
  display: none;
  position: absolute;
  top: 100%;
  left: 50%;
  width: 150px;
  text-align: center;
  transform: translateX(-50%);
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 10px 15px;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const DropdownItem = styled.div`
  font-size: 14px;
  padding: 5px 10px;
  color: #333;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
    color: #007aff;
  }
`;
