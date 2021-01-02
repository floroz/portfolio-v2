import React, { ReactElement } from "react";

interface Props {
  variant: "primary" | "secondary";
  text: string;
  onClick: () => void;
}

function CTAButton({ text, variant, onClick, ...others }: Props): ReactElement {
  return (
    <button aria-label={text} {...others} onClick={onClick}>
      {text}
    </button>
  );
}

export default CTAButton;
