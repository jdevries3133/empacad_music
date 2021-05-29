import PropTypes from "prop-types";
import styled from "styled-components";

import { Thermometer } from "./thermometer";

const H3 = styled.h3`
  font-size: 2rem;
`;

const Hero = styled.span`
  font-weight: bold;
  color: hsl(111deg 100% 30%);
  background: -webkit-linear-gradient(#27ff00, #1bb500);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Sidekick = styled.span`
  font-weight: normal;
`;

const Container = styled.div`
  text-align: center;
  display: inline-block;
  padding: 2em;
  background-color: white;
  border: 2px solid var(--clr-progbar);
  border-radius: 10px;
`;

/**
 * A thermometer style progress bar emphasizing that we only need sixteen
 * instruments!
 */
export const Sidebar = ({ progress }) => {
  const fillPercent = progress.length
    ? Math.floor(
        (progress.map((i) => i.current).reduce((p, c) => p + c, 0) /
          progress.map((i) => i.target).reduce((p, c) => p + c, 0)) *
          100
      )
    : 0;
  return (
    <Container>
      <H3>
        <Sidekick>Help us reach our goal to get</Sidekick> <Hero>sixteen</Hero>{" "}
        <Sidekick>band instruments for our scholars!</Sidekick>
      </H3>
      <Thermometer fillPercent={fillPercent} />
    </Container>
  );
};

Sidebar.propTypes = {
  progress: PropTypes.arrayOf(
    PropTypes.shape({
      itemName: PropTypes.sring,
      current: PropTypes.number,
      target: PropTypes.number,
    })
  ),
};
