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
  justify-content: space-between;
  width: 100%;
  max-width: 75rem;
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

export const IconLabel = styled.p`
  font-family: ${(props) => props.theme.fontFamily.primary};
  font-weight: ${(props) => props.theme.fontWeight.normal};
  font-size: ${(props) => props.theme.fontSizes.xsmall};
  color: ${(props) => props.theme.colors.light};
`;

export const Copyright = styled.p`
  position: absolute;
  bottom: 5px;
  left: 50%;
  transform: translate(-50%, 0);
  ${({ theme }) => `
    color: ${theme.colors.light};
    font-size: ${theme.fontSizes.xsmall};
  `}
`;
