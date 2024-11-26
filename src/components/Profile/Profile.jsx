import React from "react";
import * as S from "./Profile.styles"; // 스타일 파일
import { Link } from "react-router-dom";

function Profile() {
  // 임의로 설정한 사용자 데이터 (나중에 DB로 대체)
  const user = {
    name: "홍길동",
    studentId: "201234567",
    clubsJoined: ["소프트웨어 개발 동아리", "게임 개발 동아리"],
    clubsApplied: ["디자인 동아리", "AI 연구 동아리"],
  };

  return (
    <S.Container>
      <S.Title>회원 정보</S.Title>
      <S.ProfileInfo>
        <S.Label>이름:</S.Label>
        <S.Value>{user.name}</S.Value>
      </S.ProfileInfo>
      <S.ProfileInfo>
        <S.Label>학번:</S.Label>
        <S.Value>{user.studentId}</S.Value>
      </S.ProfileInfo>

      <S.SectionTitle>가입한 동아리</S.SectionTitle>
      <S.List>
        {user.clubsJoined.length > 0 ? (
          user.clubsJoined.map((club, index) => (
            <S.ListItem key={index}>{club}</S.ListItem>
          ))
        ) : (
          <S.NoData>가입한 동아리가 없습니다.</S.NoData>
        )}
      </S.List>

      <S.SectionTitle>신청한 동아리</S.SectionTitle>
      <S.List>
        {user.clubsApplied.length > 0 ? (
          user.clubsApplied.map((club, index) => (
            <S.ListItem key={index}>{club}</S.ListItem>
          ))
        ) : (
          <S.NoData>신청한 동아리가 없습니다.</S.NoData>
        )}
      </S.List>

      <Link to="/edit-profile">
        <S.EditButton>회원 정보 수정</S.EditButton>
      </Link>
    </S.Container>
  );
}

export default Profile;
