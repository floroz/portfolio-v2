import styled from "@emotion/styled";

export const Section = styled.section`
  position: relative;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};

  ${(props) => props.theme.mixins.pagePaddings}
  margin-bottom: ${(props) => props.theme.spacing.xlarge};
`;

export const Flexbox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
`;

export const SubTitle = styled.p`
  ${({ theme }) => `
    font-family: ${theme.fontFamily.primary};
    font-size: ${theme.fontSizes.medium};
    font-weight: ${theme.fontWeight.semibold};
    color: ${theme.colors.darker};
    margin-bottom: ${theme.spacing.medium};
  `}
`;

export const Text = styled.p`
  white-space: pre-line;
  ${({ theme }) => `
    font-size: ${theme.fontSizes.small};
    margin-bottom: ${theme.spacing.small};
  `}
`;
