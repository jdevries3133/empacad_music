import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import "jest-styled-components";

import { InstrumentDonateLeadForm } from "./index";

beforeEach(() => render(<InstrumentDonateLeadForm />));

const inputName = (name, tagName = "textbox") =>
  screen.getByRole(tagName, { name });

describe("lead form", () => {
  it("shows no validation msg initially", () => {
    expect(screen.queryAllByTestId("validationMsg")).toHaveLength(0);
    fireEvent.change(inputName("Name"), {
      target: { value: "name" },
    });
    fireEvent.change(inputName("Instrument", "combobox"), {
      target: { value: "Flute" },
    });
    expect(screen.queryAllByTestId("validationMsg")).toBeFalsy();
  });
  describe("validation errors that show after submit button", () => {
    it("disallows no contact", () => {
      fireEvent.change(inputName("Name"), {
        target: { value: "name" },
      });
      fireEvent.change(inputName("Instrument", "combobox"), {
        target: { value: "Flute" },
      });
      fireEvent.click(screen.getByRole("pushbutton", { name: "Submit" }));
      const errors = screen.queryAllByTestId("validationMsg");
      expect(errors).toHaveLength(2);
      errors.forEach((error) =>
        expect(error).toHaveTextContent(
          "Please provide a phone number or email so that we can get in touch!"
        )
      );
    });
    it("allows email only", () => {
      fireEvent.change(inputName("Name"), {
        target: { value: "name" },
      });
      fireEvent.change(inputName("Instrument", "combobox"), {
        target: { value: "Flute" },
      });
      fireEvent.change(inputName("Email"), {
        target: { value: "guy@domain.com" },
      });
      const errors = screen.queryAllByTestId("validationMsg");
      expect(errors).toHaveLength(0);
    });
  });
});
