import React from "react";
import {
  Copyright,
  Footer as FooterStyled,
  Icon,
  IconContainer,
} from "./Footer.styled";
import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";

interface Props {}

const Footer = (props: Props) => {
  return (
    <FooterStyled>
      <IconContainer>
        <Icon
          href="https://www.linkedin.com/in/danieletortora/"
          aria-label="Linkedin profile"
        >
          <FaLinkedinIn />
        </Icon>
        <Icon href="https://github.com/floroz" aria-label="GitHub profile">
          <FaGithub />
        </Icon>
        <Icon href="https://twitter.com/floroz87" aria-label="Twitter profile">
          <FaTwitter />
        </Icon>
      </IconContainer>
      <Copyright>Daniele Tortora 2021 &#169; | London, UK</Copyright>
    </FooterStyled>
  );
};

export default Footer;
