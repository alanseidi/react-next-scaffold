import React from "react";
import Head from "next/head";
import { Container } from "../styles/pages/Index";

const Home: React.FC = () => (
  <Container>
    <Head>
      <title>App React With NextJs</title>
    </Head>
    <main>
      <h1>Hello Word</h1>
    </main>
  </Container>
);

export default Home;
