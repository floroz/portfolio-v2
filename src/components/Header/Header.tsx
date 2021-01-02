import React, { ReactElement } from "react";
import {
  A,
  Nav,
  Ul,
  HeaderGrid,
  HeaderContainer,
  LogoWrapper,
  Li,
} from "./Header.styled";

function Header(): ReactElement {
  return (
    <HeaderContainer>
      <HeaderGrid>
        <LogoWrapper style={{ color: "black" }}>DT</LogoWrapper>
        <Nav>
          <Ul>
            <Li>
              <A href="#about">About</A>
            </Li>
            <Li>
              <A href="#work">Work</A>
            </Li>
            <Li>
              <A href="#contact">Contact</A>
            </Li>
            <Li>
              <A href="/resume.pdf">Resume</A>
            </Li>
          </Ul>
        </Nav>
      </HeaderGrid>
    </HeaderContainer>
  );
}

export default Header;
