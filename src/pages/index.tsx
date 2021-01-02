import styled from "@emotion/styled";
import About from "components/About/About";
import Head from "next/head";
import Hero from "../components/Hero/Hero";

export default function Home() {
  return (
    <>
      <Head>
        <title>Daniele Tortora | Software Engineer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero />
        <About />
      </main>
    </>
  );
}
