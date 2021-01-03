import styled from "@emotion/styled";
import { mqLarge } from "styles";

export const transitionDuration = 300;

export const transitionConfig = {
  defaultStyles: {
    transition: `all ${transitionDuration}ms ease-in-out`,
    transform: `translate(0, 0)`,
  },
  transitionStyles: {
    entering: { transform: `translate(0, -999px)` },
    entered: { transform: `translate(0, 0)` },
    exiting: { transform: `translate(0, 0)` },
    exited: { transform: `translate(0, -999px)` },
  },
};

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1; // to appear on top of main
  background-color: ${(props) => props.theme.colors.background};
  height: 7rem;
  display: flex;
  justify-content: stretch;
  align-items: center;
`;

export const HeaderGrid = styled.div`
  display: grid;
  grid-template-columns: min-content 1fr;
  width: 100%;
  justify-content: center;
  align-items: center;
  ${(props) => props.theme.mixins.pagePaddings}
`;

export const Logo = styled.a`
  border: 3px solid ${(props) => props.theme.colors.darker};
  padding: ${(props) => props.theme.spacing.small};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  color: ${(props) => props.theme.colors.darker};
`;

export const Nav = styled.nav`
  /* display: flex; */
`;

export const Ul = styled.ul`
  ${(props) => props.theme.mixins.flexCentered};
  justify-content: flex-end;
  align-items: center;

  ${mqLarge(`
    li {
      display: none;
    }
  `)}

  li:last-child {
    display: block;
  }
`;

export const Li = styled.li`
  margin-left: ${(props) => props.theme.spacing.xxlarge};
`;

export const A = styled.a`
  font-size: ${(props) => props.theme.fontSizes.small};
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.dark};
  padding: 0.2rem;
  border-bottom: 1px solid transparent;
  transition: border-bottom 0.3s ease;

  :hover {
    border-bottom: 1px solid ${(props) => props.theme.colors.dark};
  }
`;

export const MenuItem = styled.button`
  border: none;
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.darker};
  cursor: pointer;

  svg {
    width: 30px;
    height: 30px;
    ${(props) => props.theme.mixins.flexCentered};
  }
`;
