import styled from "@emotion/styled";
import About from "components/About/About";
import Contact from "components/Contact/Contact";
import Footer from "components/Footer/Footer";
import Sidebar from "components/Sidebar/Sidebar";
import Work from "components/Work/Work";
import Head from "next/head";
import { useEffect } from "react";
import Hero from "../components/Hero/Hero";

export default function Home() {
  useEffect(() => {
    if (window.location.hash) {
      const elToScroll = document.querySelector(window.location.hash);

      console.log(elToScroll);

      elToScroll.scrollIntoView();
    }
  }, []);
  return (
    <>
      <Head>
        <title>Daniele Tortora | Software Engineer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero />
        <About />
        <Work />
        <Contact />
        <Footer />
        <Sidebar />
      </main>
    </>
  );
}
