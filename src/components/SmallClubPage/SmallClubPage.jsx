import React from "react";
import * as S from "./SmallClubPage.styles";

function SmallClubPage() {
  return (
    <S.Container>
      <S.Header>
        <S.Logo>ACM</S.Logo>
        <S.Nav>
          <S.NavItem>Home</S.NavItem>
          <S.NavItem>ACM소개</S.NavItem>
          <S.NavItem>내정보</S.NavItem>
          <S.NavItem>로그인</S.NavItem>
        </S.Nav>
      </S.Header>
      <S.Content>
        <S.Title>동아리 등록</S.Title>
        <S.Form>
          <S.Label>동아리 구분</S.Label>
          <S.Input placeholder="소학회" />

          <S.Label>동아리 카테고리</S.Label>
          <S.Input placeholder="봉사" />

          <S.Label>소속된 세부 카테고리</S.Label>
          <S.Input placeholder="소프트웨어융합대학" />

          <S.Label>소속된 세부 카테고리 구분</S.Label>
          <S.Input placeholder="디지털미디어학과" />

          <S.Label>동아리 명</S.Label>
          <S.Input placeholder="Sweat" />

          <S.Label>대표 성명</S.Label>
          <S.Input placeholder="홍길동" />

          <S.Label>대표 학번</S.Label>
          <S.Input placeholder="202000000" />

          <S.Label>연락처(휴대전화)</S.Label>
          <S.Input placeholder="010-0000-0000" />

          <S.Label>문자 가능한 장소</S.Label>
          <S.Input placeholder="전공과목관" />

          <S.Label>연락처(이메일)</S.Label>
          <S.Input placeholder="AjouEmail@ajou.ac.kr" />

          <S.Label>동아리 연계</S.Label>
          <S.UploadBox>
            <S.UploadIcon>+</S.UploadIcon>
          </S.UploadBox>

          <S.SubmitButton>신청</S.SubmitButton>
        </S.Form>
      </S.Content>
    </S.Container>
  );
}

export default SmallClubPage;
