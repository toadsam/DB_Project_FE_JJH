// EditProfilePage.jsx
import React from "react";
import {
  Container,
  Sidebar,
  SidebarLink,
  ProfileSection,
  Title,
  AvatarBadge,
  Form,
  Label,
  Input,
  ButtonGroup,
  Button,
} from "./EditProfilePage.styles";
import { Link } from "react-router-dom"; // 추가

function EditProfilePage() {
  return (
    <Container>
      <div style={{ display: "flex", width: "100%" }}>
        <Sidebar>
          <SidebarLink as={Link} to="/">
            내 정보 수정{" "}
          </SidebarLink>
          <SidebarLink as={Link} to="/change-password">
            비밀번호 변경{" "}
          </SidebarLink>
        </Sidebar>
        <ProfileSection>
          <Title>내 정보 수정</Title>
          <AvatarBadge />
          <Form>
            <Label>학과</Label>
            <Input type="text" defaultValue="디지털미디어" />

            <Label>학번(9자리)</Label>
            <Input type="text" defaultValue="202021128" />

            <Label>상태</Label>
            <Input type="text" defaultValue="재학 or 휴학 or 졸업" />

            <Label>성별</Label>
            <Input type="text" defaultValue="남 or 여" />
          </Form>
          <ButtonGroup>
            <Button className="cancel">취소</Button>
            <Button className="save">변경</Button>
          </ButtonGroup>
        </ProfileSection>
      </div>
    </Container>
  );
}

export default EditProfilePage;
