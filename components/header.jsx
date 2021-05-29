import Image from "next/image";
import styled from "styled-components";

const Logo = styled(Image)`
  max-height: 20vh;
  border-radius: 100%;
`;

const HeadEl = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
`;

const H1 = styled.h1`
  display: inline;
`;

/**
 * Site-wide header
 */
export const Header = () => (
  <HeadEl>
    <H1>EMPACAD Music</H1>
    <Logo src="/logo.jpg" alt="EMPACAD Music Logo" width={250} height={250} />
  </HeadEl>
);
