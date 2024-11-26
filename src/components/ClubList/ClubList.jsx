import React from "react";
import * as S from "./ClubList.styles";
import clubs from "./Club.json";
import { Link } from "react-router-dom";
function ClubList() {
  return (
    <S.Container>
      {clubs.map((club, index) => (
        <Link
          to={`/club/${index}`}
          key={index}
          style={{ textDecoration: "none" }}
        >
          <S.ClubBox>
            <S.ClubName>{club.clubName}</S.ClubName>
            <S.PresidentName>회장: {club.president}</S.PresidentName>
          </S.ClubBox>
        </Link>
      ))}
    </S.Container>
  );
}
export default ClubList;
