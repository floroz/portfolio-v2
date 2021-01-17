import styled from "@emotion/styled";
import { BiGitPullRequest } from "react-icons/bi";
import { CgGitCommit } from "react-icons/cg";

export const WorkExp = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0 ${(props) => props.theme.spacing.xlarge};
  margin-bottom: 20px;
  overflow: hidden;
`;

export const PRIcon = styled(BiGitPullRequest)`
  width: 30px;
  height: auto;
  fill: ${({ theme }) => theme.colors.darker};
  position: absolute;
  top: 0;
  left: 0;
`;

export const GitCommitsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 30px;
  left: 0;
`;

export const GitCommitIcon = styled(CgGitCommit)`
  width: 25px;
  height: auto;
  fill: ${({ theme }) => theme.colors.light};
  color: ${({ theme }) => theme.colors.light};
`;

export const Company = styled.p`
  ${({ theme }) => `
  color: ${theme.colors.dark};
  font-weight: ${theme.fontWeight.bold};
  font-family: ${theme.fontFamily.primary};
  font-size: ${theme.fontSizes.small};
  margin-bottom: ${theme.spacing.xsmall};
`};
`;
export const Year = styled.p`
  ${({ theme }) => `
  color: ${theme.colors.light};
  font-weight: ${theme.fontWeight.semibold};
  font-family: ${theme.fontFamily.primary};
  font-size: ${theme.fontSizes.small};
  margin-bottom: ${theme.spacing.xsmall};
`}
`;
export const Position = styled.p`
  ${({ theme }) => `
  color: ${theme.colors.dark};
  font-weight: ${theme.fontWeight.bold};
  font-family: ${theme.fontFamily.primary}
  margin-bottom: ${theme.spacing.small};
`}
`;

export const Description = styled.p`
  max-width: 50rem;
  ${({ theme }) => `
    font-family: ${theme.fontFamily.text};
    font-size: ${theme.fontSizes.small};
  `}
  white-space: pre-wrap;
  text-align: left;
`;
