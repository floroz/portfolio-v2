import styled from "@emotion/styled";
import { mqLarge, mqMedium } from "styles";
import { FaSpinner, FaCheck } from "react-icons/fa";

export const Spinner = styled(FaSpinner)`
  animation: spin 0.6s linear infinite;
  margin-left: ${(props) => props.theme.spacing.small};

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;

export const Check = styled(FaCheck)`
  margin-left: ${(props) => props.theme.spacing.small};
`;

export const Section = styled.section`
  position: relative;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};

  ${(props) => props.theme.mixins.pagePaddings};
`;

export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  width: 100%;
  max-width: 125rem;
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
  width: 100%;
  max-width: 50rem;

  ${mqMedium(`
    grid-template-columns: 1fr;
    grid-template-rows: min-content min-content 1fr min-content;
  `)}
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NameGroup = styled(FormGroup)`
  grid-row: 1/2;
  grid-column: 1/2;

  ${mqMedium(`
    grid-row: 1/2;
    grid-column: 1/3;
  `)}
`;
export const EmailGroup = styled(FormGroup)`
  grid-row: 1/2;
  grid-column: 2/3;

  ${mqMedium(`
    grid-row: 2/3;
    grid-column: 1/3;
  `)}
`;
export const MessageGroup = styled(FormGroup)`
  grid-row: 2/3;
  grid-column: 1/3;

  ${mqMedium(`
    grid-row: 3/4;
    grid-column: 1/3;
  `)}
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
    padding: ${theme.spacing.xsmall};
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
    padding: ${theme.spacing.xsmall};
  `}
  height: 20rem;
`;

export const SubmitButton = styled.button`
  ${({
    theme: { spacing, colors, fontSizes, fontWeight, mixins, fontFamily },
  }) => `
    padding: ${spacing.small} ${spacing.large};
    color: ${colors.white};
    background-color: ${colors.darker};
    border-radius: 10px;
    text-transform: uppercase;
    font-size: ${fontSizes.small};
    font-weight: ${fontWeight.semibold};
    font-family: ${fontFamily.primary};
    border: none;
    grid-column: 1/2;
    grid-row: 3/4;
    ${mixins.flexCentered};

  ${mqLarge(`
      padding: ${spacing.small} ${spacing.medium};
      font-size: ${fontSizes.xsmall};
    `)}

    ${mqMedium(`
    grid-row: 4/5;
    grid-column: 1/3;
  `)}
  `}
`;
