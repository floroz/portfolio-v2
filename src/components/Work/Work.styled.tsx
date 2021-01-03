import styled from "@emotion/styled";

export const Section = styled.section`
  position: relative;
  width: 100%;
  height: 50vh;
  background-color: ${({ theme }) => theme.colors.background};

  ${(props) => props.theme.mixins.pagePaddings};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;
