import React from "react";
import {
  FooterContainer,
  ContentWrapper,
  LogoSection,
  Logo,
  TextSection,
  Address,
  Contact,
  Copyright,
  EmailLink,
  IconSection,
  IconLink,
} from "./FootBar.styles";
import { FaInstagram, FaYoutube, FaFacebook } from "react-icons/fa";
import { SiNaver } from "react-icons/si";
import footLogo2 from "../../asset/footLogo2.png";

const Footer = () => {
  return (
    <FooterContainer>
      <ContentWrapper>
        <LogoSection>
          <Logo src={footLogo2} alt="Ajou University Logo" />
        </LogoSection>
        <TextSection>
          <Address>16499 경기도 수원시 영통구 월드컵로 206 아주대학교</Address>
          <Contact>T. 031-219-2114</Contact>
          <Copyright>
            Copyright © 2020 Ajou University. All Rights Reserved.
          </Copyright>
          <EmailLink>관리자메일보내기</EmailLink>
        </TextSection>
        <IconSection>
          <IconLink href="https://www.instagram.com/ajou_university/">
            <FaInstagram />
          </IconLink>
          <IconLink href="https://www.youtube.com/@-ajouuniversity4682">
            <FaYoutube />
          </IconLink>
          <IconLink href="https://www.facebook.com/ajouuniversity">
            <FaFacebook />
          </IconLink>
          <IconLink href="https://blog.naver.com/greatajou">
            <SiNaver />
          </IconLink>
        </IconSection>
      </ContentWrapper>
    </FooterContainer>
  );
};

export default Footer;
