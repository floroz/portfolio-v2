import styled from "@emotion/styled";

export const Section = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.white};
  display: grid;
  grid-template-columns: 1fr min-content;
  grid-gap: ${(props) => props.theme.spacing.large};
  justify-items: center;
  align-items: center;
  padding-top: 10rem;
`;
