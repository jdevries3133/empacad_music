import PropTypes from "prop-types";
import styled from "styled-components";

import { Thermometer } from "./thermometer";

const Container = styled.div`
  display: inline-block;
`;

/**
 * A thermometer style progress bar emphasizing that we only need sixteen
 * instruments!
 */
export const Sidebar = ({ progress }) => {
  const fillPercent = Math.floor(
    (progress.map((i) => i.current).reduce((p, c) => p + c, 0) /
      progress.map((i) => i.target).reduce((p, c) => p + c, 0)) *
      100
  );
  return (
    <Container>
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
