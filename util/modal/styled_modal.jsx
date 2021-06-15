/**
 * formerly lived in "Styles", but really should never be used without the
 * wrapper component here
 */

import styled from "styled-components";

export const StyledModal = styled.div`
  position: fixed;
  margin: 4vw;
  padding: 0;
  height: 90vh;
  width: 90vw;
  overflow-x: hidden;
  background-color: white;
  border: 1em dashed var(--clr-empacad-yellow);
  border-radius: 10px;
  box-shadow: 1px 1px 51px #666;
  opacity: 95%;
  z-index: 100;

  @media (min-width: 800px) {
    @media (min-height: 600px) {
      height: 600px;
      width: 700px;
      top: 50%;
      left: 50%;
      margin-top: -300px;
      margin-left: -350px;
    }
  }
`;
