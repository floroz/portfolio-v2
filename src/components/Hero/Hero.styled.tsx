import styled from "@emotion/styled";
import { mqMedium } from "styles";

export const Section = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
  display: grid;
  grid-template-columns: 1fr min-content;
  grid-gap: ${(props) => props.theme.spacing.large};
  justify-items: center;
  align-items: center;
  padding-top: 10rem;
`;

export const Intro = styled.div`
  justify-self: flex-start;
`;

export const H1 = styled.h1`
  color: ${(props) => props.theme.colors.darker};
  text-transform: uppercase;
  white-space: pre-wrap;
  line-height: 60px;
  letter-spacing: 7px;
  margin-bottom: ${(props) => props.theme.spacing.xlarge};
`;

export const P = styled.p`
  color: ${(props) => props.theme.colors.text};
  font-size: ${(props) => props.theme.fontSizes.medium};
  white-space: pre-line;
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
`;

export const ImgCircle = styled.div`
  border-radius: 50%;
  overflow: hidden;
  width: 40rem;
  height: 40rem;
  border: 6px solid ${(props) => props.theme.colors.white};
  position: relative;
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
