import React from "react";
import styled from "@emotion/styled";
import HorizonalLines from "./HorizonalLines";

interface Props {
  children: React.ReactNode;
}

export const Heading = styled.h2`
  align-self: center;
  justify-self: center;
  ${({ theme }) => `
    font-family: ${theme.fontFamily.primary};
    font-size: ${theme.fontSizes.large};
    font-weight: ${theme.fontWeight.bold};
    color: ${theme.colors.darker};
    margin: ${theme.spacing.large} 0;
  `}
  text-transform: uppercase;
`;

const Heading2 = ({ children }: Props) => {
  return (
    <>
      <Heading>{children}</Heading>
      <HorizonalLines />
    </>
  );
};

export default Heading2;
