import PropTypes from "prop-types";
import styled from "styled-components";

// const div = styled.div`
//   max-width: 90%;
// `;

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

const StyledErrMsg = styled.p`
  color: hsl(0, 100%, 29%);
  font-size: 0.8rem;
`;
const ErrMsg = ({ children }) => (
  <StyledErrMsg data-testid="validationMsg">{children}</StyledErrMsg>
);

export const LeadForm = ({ onSubmit, inputHandler, fields }) => {
  return (
    <div>
      <Form onSubmit={onSubmit}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          value={fields.name?.value}
          onChange={(e) => inputHandler(e.target.value, "name")}
        />
        {fields?.name?.errors?.show && (
          <ErrMsg>{fields.name.errors?.message}</ErrMsg>
        )}
        <label htmlFor="phone">Phone Number</label>
        <input
          id="phone"
          type="tel"
          value={fields?.phone?.value}
          onChange={(e) => inputHandler(e.target.value, "phone")}
        />
        {fields?.phone?.errors?.show && (
          <ErrMsg>{fields?.phone?.errors?.message}</ErrMsg>
        )}
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={fields?.email?.value}
          onChange={(e) => inputHandler(e.target.value, "email")}
        />
        {fields?.email.errors?.show && (
          <ErrMsg>{fields?.email.errors?.message}</ErrMsg>
        )}
        <label htmlFor="instrument">Instrument</label>
        <select
          id="instrument"
          onChange={(e) => inputHandler(e.target.value, "instrument")}
          value={fields?.instrument?.value}
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
        {fields?.instrument.errors?.show && (
          <ErrMsg>{fields?.instrument?.errors?.message}</ErrMsg>
        )}
        {fields?.instrument?.value == "Other" && (
          <>
            <label htmlFor="other instrument">Describe Your Instrument</label>
            <textarea
              id="other instrument"
              value={fields?.otherInstrument?.value}
              onChange={(e) => inputHandler(e.target.value, "otherInstrument")}
            />
          </>
        )}
        {fields?.otherInstrument.errors?.show && (
          <ErrMsg>{fields?.otherInstrument?.errors?.message}</ErrMsg>
        )}
        <input type="submit" value="Submit" />
      </Form>
    </div>
  );
};

LeadForm.propTypes = {
  onSubmit: PropTypes.func,
  inputHandler: PropTypes.func,
  fields: PropTypes.shape({
    name: PropTypes.shape({
      value: PropTypes.string,
      errors: PropTypes.shape({
        message: PropTypes.string,
        show: PropTypes.bool,
      }),
    }),
    email: PropTypes.shape({
      value: PropTypes.string,
      errors: PropTypes.shape({
        message: PropTypes.string,
        show: PropTypes.bool,
      }),
    }),

    phone: PropTypes.shape({
      value: PropTypes.string,
      errors: PropTypes.shape({
        message: PropTypes.string,
        show: PropTypes.bool,
      }),
    }),
    instrument: PropTypes.shape({
      value: PropTypes.string,
      errors: PropTypes.shape({
        message: PropTypes.string,
        show: PropTypes.bool,
      }),
    }),
  }),
};
