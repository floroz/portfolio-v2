import styled from "@emotion/styled";
import { FaWindowClose } from "react-icons/fa";

export const Aside = styled.aside`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: 30rem;
  background-color: ${(props) => props.theme.colors.darker};
  z-index: 2; // must win against header;
`;

export const transitionDuration = 300;

export const transitionConfig = {
  defaultStyles: {
    transition: `all ${transitionDuration}ms ease-in-out`,
    transform: `translate(0, 0)`,
  },
  transitionStyles: {
    entering: { transform: `translate(999px, 0)` },
    entered: { transform: `translate(0, 0)` },
    exiting: { transform: `translate(0, 0)` },
    exited: { transform: `translate(999px, 0)` },
  },
};

export const CloseButton = styled.button`
  cursor: pointer;
  position: absolute;
  top: 5px;
  left: 5px;
  padding: 0;
  background-color: transparent;
  border: none;
`;

export const CloseIcon = styled(FaWindowClose)`
  width: 40px;
  height: 40px;
  pointer-events: none;
  fill: ${(props) => props.theme.colors.light};

  svg {
    cursor: pointer;
  }
`;

export const SideGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 20rem 1fr;
`;

export const Logo = styled.div`
  justify-self: center;
  align-self: center;

  ${({ theme }) => `

  a {
    padding: ${theme.spacing.small};
    color: ${theme.colors.white};
    font-size: ${theme.fontSizes.large};
    font-weight: ${theme.fontWeight.semibold};
    border: 4px solid ${theme.colors.white};
  }
  
  `}
`;

export const Nav = styled.nav``;

export const Ul = styled.ul`
  li:first-of-type {
    border-top: 1px solid ${(props) => props.theme.colors.light};
  }
`;

export const Li = styled.li`
  ${({ theme }) => `
  padding: ${theme.spacing.small} ${theme.spacing.medium};
  border-bottom: 1px solid ${theme.colors.light};
`}
`;

export const A = styled.a`
  text-transform: uppercase;
  ${({ theme }) => `
  color: ${theme.colors.white};
  font-size: ${theme.fontSizes.small};
  font-weight: ${theme.fontWeight.semibold};
  font-family: ${theme.fontFamily.primary};
`}
`;
