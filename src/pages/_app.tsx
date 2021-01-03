// @ts-nocheck
// TODO need the no-check because of GA script, will need to come back to it;
import React from "react";
import { GlobalStyles, theme } from "../styles";
import { ThemeProvider } from "@emotion/react";
import Header from "components/Header/Header";
import Head from "next/head";
import { SidebarProvider } from "hooks/context/SidebarContext";
import { init } from "emailjs-com";
function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    init(process.env.NEXT_USERID);
  }, []);
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&family=Poppins:wght@100&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap"
          rel="stylesheet"
        />
        {/* Global site tag (gtag.js) - Google Analytics */}
        {/* <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-NRMJHR8YZQ"
        ></script>
        <script>
          window.dataLayer = window.dataLayer || []; function gtag()
          {dataLayer.push(arguments)}; gtag('js', new Date()); gtag('config',
          'G-NRMJHR8YZQ');
        </script> */}
      </Head>
      <ThemeProvider theme={theme}>
        <SidebarProvider>
          <GlobalStyles />
          <Header />
          <Component {...pageProps} />
        </SidebarProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
