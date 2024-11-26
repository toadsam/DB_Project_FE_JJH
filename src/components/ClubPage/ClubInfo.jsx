import React from "react";
import { useParams } from "react-router-dom";
import * as S from "./ClubInfo.styles"; // 스타일 파일 임포트

function ClubInfo() {
  const { id } = useParams(); // URL에서 id 파라미터를 받아옴

  // 임시 데이터를 사용하여 동아리 정보를 표시
  const clubInfo = {
    name: `동아리 ${id}`,
    description: `동아리 ${id}의 소개 내용입니다.`,
    imageUrl: "https://via.placeholder.com/150",
  };

  return (
    <S.InfoContainer>
      <S.Title>{clubInfo.name}</S.Title>
      <S.Image src={clubInfo.imageUrl} alt={clubInfo.name} />
      <S.Description>{clubInfo.description}</S.Description>
    </S.InfoContainer>
  );
}

export default ClubInfo;
