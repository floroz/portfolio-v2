import React, { ReactElement, ReactNode } from "react";
import Link from "next/link";
import styled from "@emotion/styled";

const A = styled.a<{ variant: "primary" | "secondary" }>`
  ${({ theme: { spacing, colors, fontSizes, fontWeight }, variant }) => `
    padding: ${spacing.medium} ${spacing.large};
    color: ${variant === "primary" ? colors.white : colors.darker};
    background-color: ${variant === "primary" ? colors.darker : colors.white};
    border-radius: 10px;
    text-transform: uppercase;
    font-size: ${fontSizes.small};
    font-weight: ${fontWeight.semibold};
  `}
`;

interface Props {
  variant: "primary" | "secondary";
  href: string;
  children: ReactNode;
}

function CTALink({ children, variant, href, ...others }: Props): ReactElement {
  return (
    <Link {...others} href={href}>
      <A variant={variant}>{children}</A>
    </Link>
  );
}

export default CTALink;
