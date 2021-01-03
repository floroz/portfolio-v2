import React, { ReactElement, ReactNode } from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import { mqLarge } from "styles";

const A = styled.a<{ variant: "primary" | "secondary" }>`
  ${({ theme: { spacing, colors, fontSizes, fontWeight }, variant }) => `
    padding: ${spacing.medium} ${spacing.large};
    color: ${variant === "primary" ? colors.white : colors.darker};
    background-color: ${variant === "primary" ? colors.darker : colors.white};
    border-radius: 10px;
    text-transform: uppercase;
    font-size: ${fontSizes.small};
    font-weight: ${fontWeight.semibold};

    ${mqLarge(`
      padding: ${spacing.small} ${spacing.medium};
      font-size: ${fontSizes.xsmall};
    `)}
  `}
`;

interface Props {
  variant: "primary" | "secondary";
  href: string;
  children: ReactNode;
}

function CTALink({ children, variant, href, ...others }: Props): ReactElement {
  return (
    <A variant={variant} href={href}>
      {children}
    </A>
  );
}

export default CTALink;
