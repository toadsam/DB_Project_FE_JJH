import React from "react";
import { useParams } from "react-router-dom";
import * as S from "./MemberInfo.styles"; // 스타일 파일 임포트

function MemberInfo() {
  const { id } = useParams(); // URL에서 id 파라미터를 받아옴

  // 임시 데이터로 동아리 회원 정보를 표시
  const members = [
    { name: "홍길동", studentId: "20240001" },
    { name: "김철수", studentId: "20240002" },
  ];

  return (
    <S.InfoContainer>
      <S.Title>{id} 동아리 회원 정보</S.Title>
      <S.MemberList>
        {members.map((member, index) => (
          <S.MemberItem key={index}>
            <S.MemberName>{member.name}</S.MemberName>
            <S.StudentId>({member.studentId})</S.StudentId>
          </S.MemberItem>
        ))}
      </S.MemberList>
    </S.InfoContainer>
  );
}

export default MemberInfo;
