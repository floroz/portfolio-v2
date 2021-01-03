import React, { ReactElement } from "react";
import {
  A,
  Nav,
  Ul,
  HeaderGrid,
  HeaderContainer,
  Logo,
  Li,
  MenuItem,
} from "./Header.styled";
import { FaBars } from "react-icons/fa";
import { theme } from "styles";
import { useSidebarContext } from "context/SidebarContext";

function Header(): ReactElement {
  const { toggle } = useSidebarContext();
  return (
    <HeaderContainer>
      <HeaderGrid>
        <Logo href="#home">DT</Logo>
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
              <MenuItem onClick={toggle} aria-label="Open Side Menu">
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
