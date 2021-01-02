import styled from "@emotion/styled";

export const Section = styled.section`
  position: relative;
  width: 100%;
  height: 50vh;
  background-color: ${({ theme }) => theme.colors.white};

  ${(props) => props.theme.mixins.pagePaddings};
`;
