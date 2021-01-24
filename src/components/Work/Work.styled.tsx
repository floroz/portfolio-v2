import styled from "@emotion/styled";
import { mqLarge, mqMedium, mqXLarge } from "styles";

export const Section = styled.section`
  position: relative;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background};

  ${(props) => props.theme.mixins.pagePaddings};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;

export const WorkExperience = styled.div`
  width: 100%;
  max-width: 125rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: ${(props) => props.theme.spacing.xxlarge} 0;

  ${mqXLarge(`
      grid-template-columns: 1fr;
  `)}
`;

export const ColumnWrapper = styled.div`
  ${({ theme }) => `
  

`}
`;
