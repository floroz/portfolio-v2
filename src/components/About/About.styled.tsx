import styled from "@emotion/styled";
import { mqMedium, mqXLarge } from "styles";

export const Section = styled.section`
  position: relative;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};

  ${(props) => props.theme.mixins.pagePaddings}
  margin: 0 auto;
  margin-bottom: ${(props) => props.theme.spacing.xlarge};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Flexbox = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 125rem;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;

  ${({ theme: { spacing } }) => `
    
    p:last-of-type {

    margin-bottom: ${spacing.xxlarge};

    ${mqMedium(`
      margin: ${spacing.large} 0;
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

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  justify-content: flex-start;
  align-items: flex-start;
  width: 50%;
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
  max-width: 80rem;
`;
