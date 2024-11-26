import React from "react";
import * as S from "./Header.styles";
import userIcon from "../../asset/user-icon.svg";
import { Link } from "react-router-dom";
function Header() {
  return (
    <S.Container>
      <Link to="/">
        <S.Logo>아주대 동아리</S.Logo>
      </Link>
      <Link to="/profile">
        <S.Button>
          <S.Icon src={userIcon} />
        </S.Button>
      </Link>
    </S.Container>
  );
}
export default Header;
