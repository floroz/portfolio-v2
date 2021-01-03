import styled from "@emotion/styled";

export const Footer = styled.footer`
  position: relative;
  height: 30rem;
  width: 100%;
  ${({ theme }) => `
    ${theme.mixins.pagePaddings}
    ${theme.mixins.flexCentered}
    background-color: ${theme.colors.darker};
    color: ${theme.colors.white};
`}
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 50%;
  padding: ${(props) => props.theme.spacing.large};
`;

export const Icon = styled.a`
  margin: 0 ${(props) => props.theme.spacing.medium};
  border-bottom: 2px solid transparent;

  :hover {
    border-bottom: 2px solid ${(props) => props.theme.colors.white};
  }

  svg {
    width: 45px;
    height: 45px;
    fill: ${(props) => props.theme.colors.white};
  }
`;

export const Copyright = styled.p`
  position: absolute;
  bottom: 5px;
  left: 50%;
  transform: translate(-50%, 0);
  ${({ theme }) => `
    color: ${theme.colors.light};
    font-size: ${theme.fontSizes.small};
  `}
`;
