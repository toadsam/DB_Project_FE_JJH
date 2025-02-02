import React from "react";
import * as S from "./Introduction.styles"; // 스타일 파일 import
import InaugurationImage from "../../asset/취임사.jpg";
import LogoImage from "../../asset/동아리로고.png";
const ClubUnionPage = () => {
  return (
    <S.Container>
      <S.Title>아주대학교 제41대 동아리연합회 '히얼'</S.Title>

      <S.Image src={LogoImage} alt="동아리로고고" />
      <S.InfoBox>
        <p>📌 SNS</p>
        <S.Link href="http://www.facebook.com/ajouclub" target="_blank">
          Facebook
        </S.Link>
        <S.Link href="https://instagram.com/ajou_club.union" target="_blank">
          Instagram
        </S.Link>
        <S.Link
          href="https://linktr.ee/ajou_club.union?utm_source=linktree_profile_share<sid=190682e8-5561-409b-a12d-129d7ab177c5"
          target="_blank"
        >
          Linktree
        </S.Link>

        <p>📌 연락처</p>
        <S.ContactInfo>
          📍 주소: 경기도 수원시 영통구 월드컵로 206 아주대학교 신학생회관 205호
        </S.ContactInfo>
        <S.ContactInfo>📞 연락처: 010-5351-9267</S.ContactInfo>
        <S.ContactInfo>✉ 이메일: eunjinko414@ajou.ac.kr</S.ContactInfo>
      </S.InfoBox>

      <S.Image src={InaugurationImage} alt="취임사" />

      <S.Footer>
        동아리 페이지 내 게시물은 각 동아리가 제공한 것으로 저작권 또한 해당
        동아리에 소속되어 있습니다.
      </S.Footer>
    </S.Container>
  );
};

export default ClubUnionPage;
