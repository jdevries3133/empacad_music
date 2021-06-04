import PropTypes from "prop-types";
import styled from "styled-components";

const Form = styled.form`
  & > * {
    margin-top: 12px;
    display: block;
    font-size: 1.3rem;
    font: var(--font-stack);
  }

  & > label {
    font-weight: bold;
  }

  & > input,
  select,
  textarea {
    background-color: var(--clr-progbar);
    border: 2px solid var(--clr-empacad-yellow--dark);
  }
`;

export const LeadForm = ({ onSubmit, inputHandler, values }) => (
  <Form onSubmit={onSubmit}>
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
    <select
      name="instrument"
      onChange={(e) => inputHandler(e.target.value, "instrument")}
      value={values.instrument}
    >
      <option value="Default">-- Please Select--</option>
      <option value="Guitar">Guitar</option>
      <option value="Ukulele">Ukulele</option>
      <option value="Flute">Flute</option>
      <option value="Clarinet">Clarinet</option>
      <option value="Alto Saxophone">Alto Saxophone</option>
      <option value="Trumpet">Trumpet</option>
      <option value="Trombone">Trombone</option>
      <option value="Drums or Drumset">Drums or Drumset</option>
      <option value="Other">Other</option>
    </select>
    {values.instrument == "Other" && (
      <>
        <label htmlFor="other instrument">Describe Your Instrument</label>
        <textarea
          value={values.otherInstrument}
          onChange={(e) => inputHandler(e.target.value, "otherInstrument")}
        />
      </>
    )}
    <input type="submit" value="Submit" />
  </Form>
);

LeadForm.propTypes = {
  onSubmit: PropTypes.func,
  inputHandler: PropTypes.func,
  values: PropTypes.objectOf({
    name: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    instrument: PropTypes.string,
  }),
};
