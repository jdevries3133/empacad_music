import styled from "styled-components";
import Image from "next/image";

/* Generic rotation, positioning, and sizing for icons */
const IconWrapper = styled.div`
  display: inline;

  & > * {
    display: inline;
    position: relative;
    top: 15px;
    left: 10px;
    width: 8rem;
    height: 3rem;
  }
`;
export const InstrumentIcon = ({ instrument }) => {
  switch (instrument) {
    case "Alto Saxophone":
      return (
        <IconWrapper>
          <Image src="/icon/saxophone.svg" width={10} height={10} />
        </IconWrapper>
      );
    case "Drumset":
      return (
        <IconWrapper>
          <Image src="/icon/drum.svg" width={10} height={10} />
        </IconWrapper>
      );
    default:
      return (
        <IconWrapper>
          <Image src={`/icon/${instrument.toLowerCase()}.svg`} width={10} height={10} />
        </IconWrapper>
      );
  }
};
