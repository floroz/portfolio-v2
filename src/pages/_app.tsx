import { GlobalStyles, theme } from "../styles";
import { ThemeProvider } from "@emotion/react";
import Header from "components/Header/Header";
import Head from "next/head";
import { SidebarProvider } from "context/SidebarContext";

function MyApp({ Component, pageProps }) {
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
