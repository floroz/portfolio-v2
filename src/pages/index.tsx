import styled from "@emotion/styled";
import Head from "next/head";
import Hero from "../components/Hero/Hero";

const Main = styled.main`
  background-color: ${(props) => props.theme.colors.background};
  padding: ${(props) => props.theme.spacing.large};
  margin: 0 auto;
  max-width: 120rem;
  width: 95%;
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Daniele Tortora | Software Engineer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <Hero />
      </Main>
    </>
  );
}
