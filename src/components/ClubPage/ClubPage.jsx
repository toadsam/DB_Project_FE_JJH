import React from "react";
import Sidebar from "../Sidebar/Sidebar"; // Sidebar 컴포넌트 추가
import * as S from "./ClubPage.styles"; // 스타일 파일 임포트
import ClubInfo from "./ClubInfo"; // ClubInfo 컴포넌트 추가

function ClubPage() {
  return (
    <S.PageContainer>
      <Sidebar />
      <S.ContentContainer>
        <ClubInfo />
      </S.ContentContainer>
    </S.PageContainer>
  );
}

export default ClubPage;
