import Head from "next/head";
import styled from "styled-components";

import {
  Sidebar,
  Header,
  InstrumentDriveProgress,
  InstrumentDonateLeadForm,
} from "../components";
import { useFundraiserProgress } from "../hooks";

const PageWrapper = styled.div`
  max-width: 120ch;
  margin: 0 auto;
  background-color: var(--clr-background);
`;

const InstrumentDriveContainer = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: 2fr 3fr 2fr;
  grid-gap: 2rem;

  @media (max-width: 780px) {
    grid-template-columns: 1fr;

    & > div#sidebar {
      display: none;
    }
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
      <InstrumentDriveContainer>
        <InstrumentDonateLeadForm />
        <InstrumentDriveProgress progress={progress} />
        <div id="sidebar">
          <Sidebar progress={progress} />
        </div>
      </InstrumentDriveContainer>
    </PageWrapper>
  );
}
