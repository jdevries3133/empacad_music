import { useState } from "react";
import styled from "styled-components";

import { LeadForm } from "./form";
import { AboutUs as Us } from "../about_us";
import { Spinner } from "../loading";
import { sendData, validateData, isEmpty } from "./util";

const FormContainer = styled.div`
  background-color: var(--clr-empacad-yellow);
  padding: 1em;
  border-radius: 10px;
  border: 1px solid black;
  margin-top: 1rem;
`;

export const InstrumentDonateLeadForm = () => {
  const formStates = {
    initial: "INITIAL",
    invalid: "INVALID",
    loading: "LOADING",
    error: "ERROR",
    complete: "COMPLETE",
  };
  const [formState, setFormState] = useState(formStates.initial);
  console.log(formState);
  const [values, setValues] = useState({
    name: "",
    phone: "",
    email: "",
    instrument: "",
    otherInstrument: "",
    errors: {},
  });

  /* validation */
  const errors = validateData(values);

  /**
   * fields gets passed to the form layout component. It's shape is detailed
   * in the PropTypes of <Layout />
   */
  const fields = {};
  Object.keys(values).forEach((k) => {
    fields[k] = {
      value: values[k],
      errors: {
        show: formState === formStates.invalid,
        message: errors[k],
      },
    };
  });

  const submitHandler = async (e) => {
    e.preventDefault();
    setFormState(formStates.loading);

    /* abort submission and make validation errors appear */
    if (!isEmpty(errors)) {
      setFormState(formStates.invalid);
      return; // if validation fails
    }

    /* submission */
    const res = await sendData(values);
    if (res.ok) {
      setFormState(formStates.complete);
    }
  };

  const inputHandler = (value, field) =>
    setValues({ ...values, [field]: value });

  return (
    <FormContainer>
      <h2>🎺 Donate An Instrument 🎷</h2>
      <h3>
        Give the gift of music to generations of young scholars at Empowerment
        Academy. We are sincerely grateful for every contribution!
      </h3>
      <p>
        Or, learn more about us first by reading about <Us /> visiting the
        school's{" "}
        <a
          href="https://empacad.org/"
          target="_blanket"
          rel="noopener noreferrer"
        >
          main website{" "}
          <img
            alt="external link icon"
            src="/icon/link.svg"
            loading="lazy"
            width="12px"
            height="12px"
          />
          ,
        </a>{" "}
        or getting in touch with our music teacher,{" "}
        <a href="mailto:jdevries@empacad.org">Jack DeVries.</a>
      </p>
      <p>
        If you have an instrument to donate, complete this form, and we will be
        in touch soon to schedule a pickup.
      </p>
      {formState === formStates.initial || formState === formStates.invalid ? (
        <LeadForm
          onSubmit={submitHandler}
          inputHandler={inputHandler}
          fields={fields}
          errors={formState === formStates.invalid && errors}
        />
      ) : formState === formStates.loading ? (
        <Spinner />
      ) : formState === formStates.error ? (
        <h3>Something went wrong</h3>
      ) : formState === formStates.complete ? (
        <>
          <h2>🎊 Thank You! 🎉</h2>
          <p>We will be in touch soon.</p>{" "}
        </>
      ) : null}
    </FormContainer>
  );
};
