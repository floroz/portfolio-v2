import Head from "next/head";
import styled from "@emotion/styled";

const Heading = styled.h1`
  color: purple;
  margin: ${({ theme }) => `${theme.spacing.large}`};
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Heading />
      <main>
        <h1>header 1</h1>
        <h2>header 2</h2>
        <h3>header 3</h3>
        <h4>header 4</h4>
        <h5>header 5</h5>
        <h6>header 6</h6>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum quia
          iure, expedita, ipsa sunt ea facilis reiciendis alias officia dicta id
          officiis ipsam et provident maxime eos quisquam quibusdam? Neque!
        </p>
        <div>
          DIV: Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
          aut voluptatem ad consequatur deleniti saepe laudantium ut nesciunt ea
          ratione! Ad consequatur harum ab dolor in magnam iusto corporis
          obcaecati!
        </div>
      </main>
    </>
  );
}
