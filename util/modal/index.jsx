import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { FocusLoop } from "../focus_loop";
import { Portal } from "../portal";
import styled from "styled-components";

import { StyledModal } from "./styled_modal";

const ModalChildren = styled.div`
  margin-top: 2rem;
`;

const OkButton = styled.button`
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
  border: 1px solid black;
  border-radius: 0 10px;
  background-color: 2px solid var(--clr-progbar);
  box-shadow: 0 0 6px #555;
  font-size: 1.3rem;
  color: white;
  font-weight: bold;
  background-color: hsl(0deg 100% 39%);
  transition: 100ms linear;

  &:active {
    box-shadow: none;
  }
`;

export const Modal = ({ children, onDismissed, ...props }) => {
  // manage whether the component is displayed
  const [enabled, setEnabled] = useState(true);
  const disable = (e) => {
    if (e.type == "keydown" && e.key !== "Escape") return;
    e.preventDefault();
    setEnabled(false);
    onDismissed && onDismissed();
  };

  // parent can override and force the blanket to come back or go away
  useEffect(() => {
    setEnabled(props.enabled);
  }, [props.enabled]);

  // modal can be closed with Escape key
  useEffect(() => {
    document.addEventListener("keydown", disable);
    return () => document.removeEventListener("keydown", disable);
  });

  if (enabled) {
    return (
      <Portal>
        <StyledModal data-testid="blanket">
          <FocusLoop>
            <OkButton data-testid="dismissModalButton" onClick={disable}>
              Close
            </OkButton>
            <ModalChildren>{children}</ModalChildren>
          </FocusLoop>
        </StyledModal>
      </Portal>
    );
  }
  return null;
};

Modal.propTypes = {
  children: PropTypes.node,
  dimissedCallback: PropTypes.func,
  enabled: PropTypes.bool,
};

Modal.defaultProps = {
  enabled: true,
};
