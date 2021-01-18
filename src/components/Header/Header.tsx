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
  transitionDuration,
  transitionConfig,
} from "./Header.styled";
import { FaBars } from "react-icons/fa";
import { theme } from "styles";
import { useSidebarContext } from "hooks/context/SidebarContext";
import { Transition } from "react-transition-group";
import useScrollDirection from "hooks/use-scroll-direction";

function Header(): ReactElement {
  const { toggle } = useSidebarContext();
  const { show: showHeader } = useScrollDirection();

  return (
    <Transition in={showHeader} timeout={transitionDuration}>
      {(state) => (
        <HeaderContainer
          style={{
            ...transitionConfig.defaultStyles,
            ...transitionConfig.transitionStyles[state],
          }}
        >
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
      )}
    </Transition>
  );
}

export default Header;
