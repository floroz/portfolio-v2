import styled from "@emotion/styled";
import { mqLarge, mqMedium, mqXLarge } from "styles";
import CTALink from "shared/CTALink";

export const Link = styled(CTALink)`
  padding-left: ${(props) => props.theme.spacing.xlarge};
  padding-right: ${(props) => props.theme.spacing.xlarge};
`;

export const Section = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
  ${(props) => props.theme.mixins.pagePaddings}
  padding-top: 10rem;

  ${mqLarge(`
    height: auto;
    display: grid;
    padding-bottom: 10rem;
    padding-top: 15rem;
  `)}
`;

export const Grid = styled.div`
  width: 100%;
  max-width: 125rem;
  margin: 0 auto;
  height: 100%;
  display: grid;
  grid-template-columns: minmax(min-content, 60rem) minmax(min-content, 60rem);
  grid-gap: ${(props) => props.theme.spacing.large};
  justify-items: center;
  align-items: center;
  ${({ theme }) => `
  
    ${mqLarge(`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: ${theme.spacing.medium};

  `)}
  `}
`;

export const Intro = styled.div`
  justify-self: flex-start;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;

  ${({ theme }) => `
    ${mqMedium(`
        margin-bottom: ${theme.spacing.xlarge};
      `)}
  `}
`;

export const Span = styled.span`
  display: block;
  color: ${(props) => props.theme.colors.light};
  font-family: ${(props) => props.theme.fontFamily.primary};
  font-size: ${(props) => props.theme.fontSizes.medium};
  font-weight: ${(props) => props.theme.fontWeight.semibold};
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: ${(props) => props.theme.spacing.large};

  ${({ theme }) => `
  
    ${mqLarge(`
      line-height: 10px;
      font-size: ${theme.fontSizes.small};
      margin-bottom: ${theme.spacing.medium};
    `)}
  `}
`;

export const H1 = styled.h1`
  text-transform: uppercase;
  white-space: pre-wrap;
  line-height: 60px;
  letter-spacing: 7px;

  ${({ theme }) => `
    margin-bottom: ${theme.spacing.large};
    color: ${theme.colors.darker};

    ${mqLarge(`
    font-size: ${theme.fontSizes.xlarge};
  `)}
  `}
`;

export const P = styled.p`
  ${({ theme }) => `
  color: ${theme.colors.text};
  font-size: ${theme.fontSizes.medium};
  white-space: pre-line;
  margin-bottom: ${theme.spacing.large};

 ${mqLarge(`
    max-width: 50rem;
  `)}

  ${mqMedium(`
    max-width: 45rem;
  `)}
  `}
`;

export const ImgCircle = styled.div`
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
    justify-self: center;
    width: 25rem;
    height: 25rem;
  `)}
`;

export const Img = styled.img`
  display: block;
  transform: scale(1.8) translate(10px, 30px);
`;

export const ArrowDown = styled.div`
  right: 50%;
  bottom: 5%;
  position: absolute;

  svg {
    fill: ${(props) => props.theme.colors.darker};
    width: 25px;
    height: 25px;
    animation: arrow 1s ease infinite;
  }

  ${mqLarge(`
    display: none;
  `)}

  @keyframes arrow {
    0% {
      transform: translateY(0);
    }

    50% {
      transform: translateY(10px);
    }

    100% {
      transform: translateY(0);
    }
  }
`;
