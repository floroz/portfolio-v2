import { useSidebarContext } from "hooks/context/SidebarContext";
import React from "react";
import {
  Aside,
  transitionConfig,
  transitionDuration,
  A,
  Li,
  Ul,
  Nav,
  SideGrid,
  CloseButton,
  CloseIcon,
  Logo,
} from "./Sidebar.styled";
import { Transition } from "react-transition-group";

const Sidebar = () => {
  const { isOpen, toggle } = useSidebarContext();
  return (
    <Transition in={isOpen} timeout={transitionDuration}>
      {(state) => (
        <Aside
          style={{
            ...transitionConfig.defaultStyles,
            ...transitionConfig.transitionStyles[state],
          }}
        >
          <CloseButton aria-label="Close sidebar" onClick={toggle}>
            <CloseIcon />
          </CloseButton>
          <SideGrid>
            <Logo>
              <a href="#home">DT</a>
            </Logo>
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
                  <A href="/resume.pdf">Download CV</A>
                </Li>
              </Ul>
            </Nav>
          </SideGrid>
        </Aside>
      )}
    </Transition>
  );
};

export default Sidebar;
