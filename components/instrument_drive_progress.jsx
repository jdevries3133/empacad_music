import { useState, useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { ProgressBar } from "./progress_bar";

const StyledArticle = styled.article`
  max-width: 80ch;
`;

export const InstrumentDriveProgress = ({ progress }) => {
  return (
    <StyledArticle id="music_instrument_drive_goals">
      <h2>Music Instrument Drive</h2>
      {progress.map((item, index) => (
        <ProgressBar
          key={item.name + index}
          itemName={item.name}
          current={item.current}
          target={item.target}
        />
      ))}
    </StyledArticle>
  );
};

InstrumentDriveProgress.propTypes = {
  progress: PropTypes.arrayOf(
    PropTypes.shape({
      itemName: PropTypes.sring,
      current: PropTypes.number,
      target: PropTypes.number,
    })
  ),
};
