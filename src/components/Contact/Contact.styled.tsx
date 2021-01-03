import styled from "@emotion/styled";

export const Section = styled.section`
  position: relative;
  width: 100%;
  height: 50vh;
  background-color: ${({ theme }) => theme.colors.white};

  ${(props) => props.theme.mixins.pagePaddings};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;

const Input = styled.input`
  ${({ theme }) => `
    color: ${theme.colors.darker};
    font-family: ${theme.fontFamily.text};
    font-size: ${theme.fontSizes.small};
    border: 1px solid ${theme.colors.dark};
    border-radius: 5px;
  `}
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;

  label {
    ${({ theme }) => `
    color: ${theme.colors.darker};
    font-family: ${theme.fontFamily.text};
    font-size: ${theme.fontSizes.small};
  `}
  }
`;

export const NameInput = styled(Input)``;
export const EmailInput = styled(Input)``;

export const TextInput = styled.textarea`
  ${({ theme }) => `
    color: ${theme.colors.darker};
    font-family: ${theme.fontFamily.text};
    font-size: ${theme.fontSizes.small};
    border: 1px solid ${theme.colors.dark};
  `}
`;

export const SubmitButton = styled.button`
  ${({ theme: { spacing, colors, fontSizes, fontWeight } }) => `
    padding: ${spacing.small} ${spacing.large};
    color: ${colors.white};
    background-color: ${colors.darker};
    border-radius: 10px;
    text-transform: uppercase;
    font-size: ${fontSizes.small};
    font-weight: ${fontWeight.semibold};
    border: none;
  `}
`;
