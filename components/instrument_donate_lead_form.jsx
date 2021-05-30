import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";

const FormContainer = styled.div`
  background-color: var(--clr-empacad-yellow);
  padding: 1em;
  border-radius: 10px;
  border: 1px solid black;
  margin-top: 1rem;
`;

const Form = styled.form`
  & > * {
    margin-top: 12px;
    margin-left: 1rem;
    display: block;
    font-size: 1.3rem;
  }

  & > label {
    font-weight: bold;
  }

  & > input,
  select {
    background-color: var(--clr-progbar);
    border: 2px solid var(--clr-empacad-yellow--dark);
  }
`;

export const InstrumentDonateLeadForm = () => {
  const [values, setValues] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();
  };

  const inputHandler = (value, field) =>
    setValues({ ...values, [field]: value });

  return (
    <FormContainer>
      <h1>🎺 Donate An Instrument 🎷</h1>
      <h3>
        Give the gift of music to generations of young scholars at Empowerment
        Academy. We are sincerely grateful for every contribution!
      </h3>
      <p>
        Or, learn more about us first by reading about{" "}
        <a href="#">our mission,</a> visiting the school's{" "}
        <a
          href="https://empacad.org/"
          target="_blanket"
          rel="noopener noreferrer"
        >
          main website <Image src="/icon/link.svg" width={10} height={10} />,
        </a>{" "}
        or getting in touch with our music teacher,{" "}
        <a href="mailto:jdevries@empacad.org">Jack DeVries.</a>
      </p>
      <Form onSubmit={submitHandler}>
        <label htmlFor="name">Name</label>
        <input
          name="name"
          type="text"
          value={values.name}
          onChange={(e) => inputHandler(e.target.value, "name")}
        />
        <label htmlFor="phone">Phone Number</label>
        <input
          name="phone"
          type="tel"
          value={values.phone}
          onChange={(e) => inputHandler(e.target.value, "phone")}
        />
        <label htmlFor="email">Email</label>
        <input
          name="email"
          type="email"
          value={values.email}
          onChange={(e) => inputHandler(e.target.value, "email")}
        />
        <label htmlFor="instrument">Instrument</label>
        <select name="instrument">
          <option value="Guitar">Guitar</option>
          <option value="Ukulele">Ukulele</option>
          <option value="Flute">Flute</option>
          <option value="Clarinet">Clarinet</option>
          <option value="Alto Saxophone">Alto Saxophone</option>
          <option value="Trumpet">Trumpet</option>
          <option value="Trombone">Trombone</option>
          <option value="Drums or Drumset">Drums or Drumset</option>
        </select>
        <input type="submit" value="Submit" />
      </Form>
    </FormContainer>
  );
};
