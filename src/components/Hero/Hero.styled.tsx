import styled from "@emotion/styled";

export const Section = styled.section`
  background-color: ${({ theme }) => theme.colors.background};
  display: grid;
  grid-template-columns: 1fr min-content;
  grid-gap: ${(props) => props.theme.spacing.large};
  justify-items: center;
  align-items: center;
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
`;

export const H5 = styled.h5`
  color: ${(props) => props.theme.colors.light};
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: ${(props) => props.theme.spacing.large};
`;

export const ImgCircle = styled.div`
  border-radius: 50%;
  overflow: hidden;
  width: 40rem;
  height: 40rem;
  /* border: 2px solid ${(props) => props.theme.colors.light}; */
  position: relative;
`;

export const Img = styled.img`
  display: block;
  transform: scale(1.8) translate(10px, 30px);
`;
