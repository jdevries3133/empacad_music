import { useState } from "react";
import styled, { css } from "styled-components";
import { useModals } from "../util/useModals";

const Mission = styled.div`
  /* need to bring in some global styles since we are in a portal */
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 1.2rem;

  margin: auto;
  max-width: 50ch;

  & > p {
    text-align: justify;
  }
`;

const StyledA = styled.a`
  color: blue;
  text-decoration: underline;
  cursor: pointer;

  ${(props) =>
    props.visited &&
    css`
      color: var(--clr-a--visited);
    `}
`;

const AboutUsModal = () => (
  <Mission>
    <h1 style={{ textAlign: "center" }}>Our Mission</h1>
    <p>
      The founders of Empowerment Academy Charter School believe that an
      education which makes children feel loved, that leads them to care about
      one another and to want to develop their minds and potential to serve and
      contribute to their communities, and that successfully teaches the high
      level skills and knowledge necessary to do so, will work to advance
      societal goals as diverse as individual happiness, social comity and
      national prosperity.
    </p>
    <p>
      Hence, the mission of Empowerment Academy Charter School is to develop
      values, skills, knowledge, confidence and character in its scholars that
      will propel them to success in school, college and their careers, and to
      the fulfillment of a socially contributory life.
    </p>
    <p>
      We envision that students who attend Empowerment Academy Charter School
      will feel cared about, will care about their peers, and will have a sense
      of belonging; will demonstrate that they value their common work of
      learning and will develop strong study habits from the earliest grades;
      will share dreams of wantng to build a better world and – by making
      continual progress toward mastery of all grade-level academic standards
      and growing in confidence and character – will give us hope that they will
      succeed; will achieve mastery of all high school academic standards,
      including a high-level understanding of math and science; and will
      graduate fully equipped for success in college, work and life, and wanting
      to serve and contribute to every community of which they are a member.
    </p>
    <p>
      Fulfillment of the school’s mission won’t just benefit the school’s
      students; it will also benefit the broader Jersey City community and the
      wider world, as the school’s graduates, desiring and empowered to make a
      positive social contribution, leave their marks.
    </p>
    <p>
      Moreover, should our fusion of research-based, proven practices succeed at
      achieving their intended goals, we believe the Jersey City School District
      will benefit. None of the design elements of Empowerment Academy Charter
      School require unsustainable commitments on the part of its administrators
      or teachers. All are design elements that we believe could be adopted and
      scaled in public schools throughout the District. Thus, it is our hope
      that our school model will prove worthy of emulation and ultimately spur
      school improvements in public schools throughout Jersey City – and beyond.
    </p>
    <h3>Music at Empowerment Academy</h3>
    <p>
      The Empowerment Academy Music Program seeks to provide a rich and
      high-quality music education for every child in our school. Music
      education is absolutely essential for a student's full development,
      including instrumental music, general music, and a robust offering of
      extra-curricular activities.
    </p>
  </Mission>
);

export const AboutUs = ({ value = "our mission" }) => {
  const [visited, setVisited] = useState(false);
  const [modals, dispatchModal] = useModals({
    modals: [
      {
        name: "About Us",
        show: () => <AboutUsModal />,
      },
    ],
  });

  const clickHandler = () => {
    dispatchModal("About Us");
    setVisited(true);
  };

  return (
    <>
      {modals}
      <StyledA visited={visited} onClick={clickHandler}>
        {value}
      </StyledA>
    </>
  );
};
