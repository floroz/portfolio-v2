import styled from "@emotion/styled";
import { mqMedium } from "styles";

export const Section = styled.section`
  position: relative;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};

  ${(props) => props.theme.mixins.pagePaddings}
  margin-bottom: ${(props) => props.theme.spacing.xlarge};
`;

export const Flexbox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;

  ${({ theme: { spacing } }) => `
    
    p:last-of-type {

    margin-bottom: ${spacing.xxlarge};

    ${mqMedium(`
      margin-bottom: ${spacing.large};
    `)}
  }
// TODO: I don't like this mods to the CTALink, I might come back to this.
  a {
    ${mqMedium(`
      width: 100%;
      text-align: center;
    `)}
  }
    `}
`;

export const SubTitle = styled.p`
  ${({ theme }) => `
    font-family: ${theme.fontFamily.primary};
    font-size: ${theme.fontSizes.medium};
    font-weight: ${theme.fontWeight.semibold};
    color: ${theme.colors.darker};
    margin-bottom: ${theme.spacing.large};
  `}
`;

export const Text = styled.p`
  white-space: pre-line;
  ${({ theme }) => `
    font-size: ${theme.fontSizes.small};
    margin-bottom: ${theme.spacing.small};
  `}
`;
