import styled from "@emotion/styled";
import { mqLarge, mqMedium, mqXLarge } from "styles";

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

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  ${(props) => `
    margin-top: ${props.theme.spacing.xlarge};
  `}

  ${mqLarge(`
    grid-template-columns: 1fr;
  `)}
`;

export const ImgCircle = styled.div`
  grid-column: 2/3;
  grid-row: 1/2;
  justify-self: flex-end;
  border-radius: 50%;
  overflow: hidden;
  width: 40rem;
  height: 40rem;
  border: 6px solid ${(props) => props.theme.colors.white};
  position: relative;

  ${mqXLarge(`
    width: 35rem;
    height: 35rem;
  `)}

  ${mqLarge(`
    grid-column: 1/2;
    grid-row: 1/2;
    justify-self: center;
    width: 25rem;
    height: 25rem;
  `)}
`;

export const Img = styled.img`
  display: block;
  transform: scale(1.8) translate(10px, 30px);
`;

export const TextContainer = styled.div`
  grid-column: 1/2;
  grid-row: 1/2;
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;

  ${(props) => `
  
  ${mqLarge(`
    grid-column: 1/2;
    grid-row: 2/3;

  `)}

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
  max-width: 80rem;
`;
