import { useState } from "react";
import styled, { css } from "styled-components";
import { useModals } from "../util/useModals";

const InnerModalContainer = styled.div`
  /* need to bring in some global styles since we are in a portal */
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 1.2rem;

  margin: auto;
  max-width: 50ch;

  & > p {
    text-align: justify;
  }
`;

const StyledA = styled.a`
  color: blue;
  text-decoration: underline;
  cursor: pointer;

  ${(props) =>
    props.visited &&
    css`
      color: var(--clr-a--visited);
    `}
`;

const AboutUsModal = () => (
  <InnerModalContainer>
    <h1>Creative Commons Attributions</h1>

    <p>Clarinet by Tom Fricker from the Noun Project</p>
    <p>Flute by Tom Fricker from the Noun Project</p>
    <p>Saxophone by Tom Fricker from the Noun Project</p>
    <p>cornet by Tom Fricker from the Noun Project</p>
    <p>Trombone by Olena Panasovska from the Noun Project</p>
    <p>Snare Drum by Marta Ambrosetti from the Noun Project</p>
    <p>External Link by Alebaer from the Noun Project</p>
  </InnerModalContainer>
);

const FootP = styled.p`
  text-align: center;
  margin: auto;
  margin-top: 2rem;
`;

export const IconAttribution = () => {
  const [visited, setVisited] = useState(false);
  const [modals, dispatchModal] = useModals({
    modals: [
      {
        name: "About Us",
        show: () => <AboutUsModal />,
      },
    ],
  });

  const clickHandler = () => {
    dispatchModal("About Us");
    setVisited(true);
  };

  return (
    <>
      {modals}
      <FootP>
        <StyledA visited={visited} onClick={clickHandler}>
          Click here to view Creative Commons attributions.
        </StyledA>{" "}
        All icons came from the{" "}
        <a
          href="https://thenounproject.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Noun Project{" "}
        </a>
        <img
          alt="external link icon"
          src="/icon/link.svg"
          loading="lazy"
          width="12px"
          height="12px"
        />{" "}
        from various authors.
      </FootP>
    </>
  );
};
