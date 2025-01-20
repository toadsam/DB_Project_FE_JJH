import React from "react";
import {
  Container,
  Header,
  Logo,
  Nav,
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

function ChangePasswordPage() {
  return (
    <Container>
      <Header>
        <Logo>ACM</Logo>
        <Nav>
          <a href="#">Home</a>
          <a href="#">ACM소개</a>
          <a href="#">내정보</a>
          <a href="#">로그인</a>
        </Nav>
      </Header>
      <div style={{ display: "flex", width: "100%" }}>
        <Sidebar>
          <SidebarLink href="#">내 정보 수정 </SidebarLink>
          <SidebarLink href="#">비밀번호 변경 </SidebarLink>
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
