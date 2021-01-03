import styled from "@emotion/styled";

export const Section = styled.section`
  position: relative;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};

  ${(props) => props.theme.mixins.pagePaddings};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;

export const Form = styled.form`
  display: grid;
  grid-template-rows: min-content 1fr min-content;
  grid-template-columns: 1fr 1fr;
  grid-gap: ${(props) => props.theme.spacing.medium};
  margin: ${(props) => props.theme.spacing.xlarge};
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  ${({ theme }) => `
    color: ${theme.colors.darker};
    font-family: ${theme.fontFamily.text};
    font-size: ${theme.fontSizes.small};
`}
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

export const NameInput = styled(Input)``;
export const EmailInput = styled(Input)``;

export const TextInput = styled.textarea`
  ${({ theme }) => `
    color: ${theme.colors.darker};
    font-family: ${theme.fontFamily.text};
    font-size: ${theme.fontSizes.small};
    border: 1px solid ${theme.colors.dark};
  `}
  height: 20rem;
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
  grid-column: 1/2;
  grid-row: 3/4;
`;
