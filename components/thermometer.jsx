import PropTypes from "prop-types";
import styled from "styled-components";

const Path = styled.path`
  color: red;
`;

export const Thermometer = ({ fillPercent }) => (
  <svg viewBox="0 0 100 300">
    <Path d="m 30 0 l 0 220 a 40 40 180 1 0 40 0 l 0 -220 l -40 0 z " />
  </svg>
);

Thermometer.propTypes = { fillPercent: PropTypes.number };
