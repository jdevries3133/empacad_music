import PropTypes from "prop-types";
import styled from "styled-components";

import { InstrumentIcon } from "./instrument_icon";

const numStrings = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
];

/* utility func for naming numbers */
const numberToString = (number) => {
  if (number > 10) {
    throw new Error("number must be less than 10");
  }
  return numStrings[number];
};

const Bar = styled.div`
  margin-bottom: 1rem;
  position: relative;
  height: 32px;
  border-radius: 1000px;
  background-color: var(--clr-progbar);
  clip-path: inset(0 0 0 0 round 1000px);

  & > progress {
    opacity: 0;
    width: 1px;
    height: 1px;
    position: absolute;
    pointer-events: none;
  }
`;

const Filler = styled.div`
  height: 32px;
  width: ${(props) => props.width ?? "0%"};
  border-radius: 1000px 0 0 1000px;
  background-color: var(--clr-progress);
`;

export const ProgressBar = ({ itemName, current, target }) => {
  return (
    <>
      <h3>
        {itemName}
        <InstrumentIcon instrument={itemName} />
      </h3>
      {current === 0 ? (
        <p>You can be the first!</p>
      ) : current === target ? (
        <p>
          We did it! <b>Thank you</b> to our donors!
        </p>
      ) : (
        <p>
          We have <b>{numberToString(current)}</b> towards our goal of{" "}
          <b>{numberToString(target)}</b>
        </p>
      )}
      <Bar>
        <Filler width={`${Math.floor((current / target) * 100)}%`} />
        <progress value={current} max={target}>
          {current}
        </progress>
      </Bar>
    </>
  );
};

ProgressBar.propTypes = {
  itemName: PropTypes.string,
  current: PropTypes.number,
  target: PropTypes.number,
};
