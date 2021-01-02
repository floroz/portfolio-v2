import styled from "@emotion/styled";
import Head from "next/head";
import Hero from "../components/Hero/Hero";

const Main = styled.main`
  background-color: ${(props) => props.theme.colors.background};
  max-width: 120rem;
  ${(props) => props.theme.mixins.flexCentered}
  ${(props) => props.theme.mixins.pageMargins}
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
