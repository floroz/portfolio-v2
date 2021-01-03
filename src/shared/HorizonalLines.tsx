import React from "react";
import styled from "@emotion/styled";

export const HR1 = styled.div`
  width: 5rem;
  height: 3px;
  align-self: center;
  justify-self: center;
  margin-bottom: ${(props) => props.theme.spacing.xsmall};
  background-color: ${(props) => props.theme.colors.light};
`;
export const HR2 = styled.div`
  width: 10rem;
  height: 2px;
  align-self: center;
  justify-self: center;
  margin-bottom: ${(props) => props.theme.spacing.xsmall};
  background-color: ${(props) => props.theme.colors.light};
`;

const HorizonalLines = () => {
  return (
    <>
      <HR1 />
      <HR2 />
    </>
  );
};

export default HorizonalLines;
