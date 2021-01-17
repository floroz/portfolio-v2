import React from "react";
import {
  Copyright,
  Footer as FooterStyled,
  Icon,
  IconContainer,
  IconLabel,
} from "./Footer.styled";
import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";

interface Props {}

const Footer = (props: Props) => {
  return (
    <FooterStyled>
      <IconContainer>
        <Icon
          href="https://www.linkedin.com/in/danieletortora/"
          aria-labelledby="linkedin"
        >
          <FaLinkedinIn />
          <IconLabel id="linkedin">LinkedIn</IconLabel>
        </Icon>
        <Icon href="https://github.com/floroz" aria-labelledby="github">
          <FaGithub />
          <IconLabel id="github">GitHub</IconLabel>
        </Icon>
        <Icon
          href="https://twitter.com/floroz87"
          aria-aria-labelledby="twitter"
        >
          <FaTwitter />
          <IconLabel id="twitter">Twitter</IconLabel>
        </Icon>
      </IconContainer>
      <Copyright>Daniele Tortora 2021 &#169; | London, UK</Copyright>
    </FooterStyled>
  );
};

export default Footer;
