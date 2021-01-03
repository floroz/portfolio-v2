// @ts-nocheck
// TODO need the no-check because of GA script, will need to come back to it;
import React from "react";
import { GlobalStyles, theme } from "../styles";
import { ThemeProvider } from "@emotion/react";
import { SidebarProvider } from "hooks/context/SidebarContext";
import { init } from "emailjs-com";
function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    init(process.env.NEXT_USERID);
  }, []);
  return (
    <>
      <ThemeProvider theme={theme}>
        <SidebarProvider>
          <GlobalStyles />
          <Component {...pageProps} />
        </SidebarProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
