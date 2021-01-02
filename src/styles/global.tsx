import { Global, css } from "@emotion/react";
import { theme } from "./theme";

function GlobalStyles() {
  return (
    <>
      <Global
        styles={css`
          /* Font Size Hack to have 1rem === 10px*/
          html,
          :root {
            font-size: 62.5%;
          }

          /* Box sizing rules */
          *,
          *::before,
          *::after {
            box-sizing: border-box;
          }

          /* Remove default margin and padding */
          body,
          h1,
          h2,
          h3,
          h4,
          p,
          ul,
          ol,
          li,
          figure,
          figcaption,
          blockquote,
          dl,
          dd {
            margin: 0;
            padding: 0;
          }

          /* Set core body defaults */
          body {
            min-height: 100vh;
            scroll-behavior: smooth;
            text-rendering: optimizeSpeed;
            line-height: 1.5;
          }

          /* Remove list styles on ul, ol elements with a class attribute */
          ul[class],
          ol[class] {
            list-style: none;
          }

          /* A elements that don't have a class get default styles */
          a:not([class]) {
            text-decoration-skip-ink: auto;
          }

          /* Make images easier to work with */
          img {
            max-width: 100%;
            display: block;
          }

          /* Natural flow and rhythm in articles by default */
          article > * + * {
            margin-top: 1em;
          }

          /* Inherit fonts for inputs and buttons */
          input,
          button,
          textarea,
          select {
            font: inherit;
          }

          /* Remove all animations and transitions for people that prefer not to see them */
          @media (prefers-reduced-motion: reduce) {
            * {
              animation-duration: 0.01ms !important;
              animation-iteration-count: 1 !important;
              transition-duration: 0.01ms !important;
              scroll-behavior: auto !important;
            }
          }

          /* typography */
          * {
            font-size: ${theme.fontSizes.xsmall};
            color: ${theme.colors.white};
          }

          h1 {
            font-size: ${theme.fontSizes.xxlarge};
            color: ${theme.colors.darker};
          }
          h2 {
            font-size: ${theme.fontSizes.xlarge};
            color: ${theme.colors.darker};
          }

          h3 {
            font-size: ${theme.fontSizes.large};
            color: ${theme.colors.dark};
          }

          h4 {
            font-size: ${theme.fontSizes.medium};
            color: ${theme.colors.dark};
          }

          h5 {
            font-size: ${theme.fontSizes.medium};
            color: ${theme.colors.dark};
          }

          h6 {
            font-size: ${theme.fontSizes.small};
            color: ${theme.colors.dark};
          }

          p {
            font-size: ${theme.fontSizes.text};
            color: ${theme.colors.text};
          }
        `}
      />
    </>
  );
}

export { GlobalStyles };
