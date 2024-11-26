import React, { useState } from "react";
import { useParams } from "react-router-dom";
import * as S from "./ClubApply.styles"; // 스타일 파일 임포트

function ClubApply() {
  const { id } = useParams(); // URL에서 id 파라미터를 받아옴
  const [hasApplied, setHasApplied] = useState(false); // 지원 상태

  const clubInfo = {
    name: `동아리 ${id}`,
    description: `${id} 동아리의 모집공고입니다.`,
  };

  const handleApply = () => {
    setHasApplied(true); // 지원 완료
  };

  const handleContact = () => {
    alert("회장 부회장 연락처");
  };

  return (
    <S.ApplyContainer>
      <S.Title>{clubInfo.name} 모집공고</S.Title>
      <S.Description>{clubInfo.description}</S.Description>
      {hasApplied ? (
        <S.Message>지원이 완료되었습니다.</S.Message>
      ) : (
        <S.ButtonContainer>
          <S.ContactButton onClick={handleContact}>문의하기</S.ContactButton>
          <S.ApplyButton onClick={handleApply}>지원하기</S.ApplyButton>
        </S.ButtonContainer>
      )}
    </S.ApplyContainer>
  );
}

export default ClubApply;
