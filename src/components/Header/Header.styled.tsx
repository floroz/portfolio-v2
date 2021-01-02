import styled from "@emotion/styled";

export const HeaderGrid = styled.div`
  display: grid;
  grid-template-columns: min-content 1fr;
  padding: ${(props) => props.theme.spacing.large} 0;
  justify-content: center;
  align-items: center;
`;

export const LogoWrapper = styled.div`
  border: 3px solid ${(props) => props.theme.colors.darker};
  padding: ${(props) => props.theme.spacing.small};
  font-weight: ${(props) => props.theme.fontWeight.bold};
`;

export const HeaderContainer = styled.header`
  margin: 0 auto;
  max-width: 120rem;
  width: 90%;
`;

export const Nav = styled.nav`
  /* display: flex; */
`;

export const Ul = styled.ul`
  ${(props) => props.theme.mixins.flexCentered};
  justify-content: flex-end;
  align-items: center;
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
