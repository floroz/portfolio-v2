import React, { ReactElement } from "react";
import {
  A,
  Nav,
  Ul,
  HeaderGrid,
  HeaderContainer,
  LogoWrapper,
  Li,
  MenuItem,
} from "./Header.styled";
import { FaBars } from "react-icons/fa";
import { theme } from "styles";

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
            <Li>
              <MenuItem
                onClick={() => console.log("open menu")} // TODO
                aria-label="Open Side Menu"
              >
                <FaBars fill={theme.colors.dark} />
              </MenuItem>
            </Li>
          </Ul>
        </Nav>
      </HeaderGrid>
    </HeaderContainer>
  );
}

export default Header;
