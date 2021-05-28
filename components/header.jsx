import Image from "next/image";
import styled from "styled-components";

const Logo = styled(Image)`
  max-height: 20vh;
  border-radius: 100%;
`;

const HeadEl = styled.header`
  display: inline-flex;
  align-items: center;
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
    <Logo src="/logo.jpg" alt="EMPACAD Music Logo" width={300} height={300} />
  </HeadEl>
);
