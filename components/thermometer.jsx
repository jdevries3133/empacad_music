import PropTypes from "prop-types";
import styled from "styled-components";

const Svg = styled.svg`
  max-height: 90vh;
`;

const Glass = styled.path`
  fill: var(--clr-progbar);
`;

const Mercury = styled.path`
  fill: red;
  height: 10%;
  clip-path: ${(props) =>
    `polygon(1% ${props.clip}, 100% ${props.clip}, 100% 100%, 0% 100%)`};
  transition: 0.5s ease;
`;

export const Thermometer = ({ fillPercent }) => {
  const thermometerShape =
    "m 30 0 l 0 220 a 40 40 180 1 0 40 0 l 0 -220 l -40 0 z ";
  return (
    <Svg viewBox="0 0 100 300">
      <Glass d={thermometerShape} />
      <Mercury d={thermometerShape} clip={`${100 - fillPercent}%`} />
    </Svg>
  );
};

Thermometer.propTypes = { fillPercent: PropTypes.number };
