import Head from "next/head";
import styled from "styled-components";

import { Sidebar, Header, InstrumentDriveProgress } from "../components";
import { useFundraiserProgress } from "../hooks";

const PageWrapper = styled.div`
  max-width: 120ch;
  margin: 0 auto;
  background-color: var(--clr-background);
`;

const MainContent = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-gap: 2rem;

  @media (max-width: 425px) {
    grid-template-columns: 1fr;
  }
`;

export default function Home() {
  const progress = useFundraiserProgress();
  return (
    <PageWrapper>
      <Head>
        <title>Empowerment Academy Music</title>
        <meta
          name="description"
          content={
            "Learn about and support the music program at Empowerment Academy " +
            "Public Charter School!"
          }
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <MainContent>
        <InstrumentDriveProgress progress={progress} />
        <Sidebar progress={progress} />
      </MainContent>
    </PageWrapper>
  );
}
