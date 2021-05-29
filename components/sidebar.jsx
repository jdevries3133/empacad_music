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
  return (
    <Container>
      <Thermometer fillPercent={50} />
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
