import Head from "next/head";
import styled from "styled-components";

import { Sidebar, Header, InstrumentDriveProgress } from "../components";
import { useFundraiserProgress } from "../hooks";

const PageWrapper = styled.div`
  margin: 0 auto;
  background-color: var(--clr-background);
  max-width: 80ch;
`;

const MainContent = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
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
