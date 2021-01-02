import { GlobalStyles, theme } from "../styles";
import { ThemeProvider } from "@emotion/react";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
