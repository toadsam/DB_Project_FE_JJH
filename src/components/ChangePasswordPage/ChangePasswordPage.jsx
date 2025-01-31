import React from "react";
import {
  Container,
  Header,
  Logo,
  Nav,
  NavItem,
  Sidebar,
  SidebarLink,
  PasswordSection,
  Title,
  Form,
  Label,
  Input,
  ButtonGroup,
  Button,
} from "./ChangePasswordPage.styles";
import { Link } from "react-router-dom"; // 추가

function ChangePasswordPage() {
  return (
    <Container>
      <Header>
        <Logo>ACM</Logo>
        <Nav>
          <NavItem>Home</NavItem>
          <NavItem>ACM소개</NavItem>
          <NavItem>내정보</NavItem>
          <NavItem>로그인</NavItem>
        </Nav>
      </Header>
      <div style={{ display: "flex", width: "100%" }}>
        <Sidebar>
          <SidebarLink as={Link} to="/">내 정보 수정</SidebarLink>
          <SidebarLink as={Link} to="/change-password">비밀번호 변경</SidebarLink>
        </Sidebar>
        <PasswordSection>
          <Title>비밀번호 변경</Title>
          <Form>
            <Label>현재 비밀번호</Label>
            <Input type="password" placeholder="현재 비밀번호" />

            <Label>새 비밀번호</Label>
            <Input type="password" placeholder="새 비밀번호" />
            <Input type="password" placeholder="새 비밀번호 확인" />
          </Form>
          <ButtonGroup>
            <Button className="cancel">취소</Button>
            <Button className="save">변경</Button>
          </ButtonGroup>
        </PasswordSection>
      </div>
    </Container>
  );
}

export default ChangePasswordPage;
