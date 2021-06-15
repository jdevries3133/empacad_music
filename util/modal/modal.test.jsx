import React from "react";
import {
  waitFor,
  render,
  fireEvent,
  screen,
  act,
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import "jest-styled-components";

import { Modal } from "./index";

jest.mock("../portal/portal");

const onOk = jest.fn();

afterEach(() => onOk.mockClear());

describe("<Modal />", () => {
  it("renders children inside self", () => {
    render(
      <Modal>
        <h1>hello world</h1>
      </Modal>
    );
    expect(screen.queryByText("hello world")).toBeVisible();
  });

  it("contains a button which calls an optional callback fn passed as a prop", async () => {
    render(<Modal onDismissed={onOk} />);
    act(() => {
      fireEvent.click(screen.getByTestId("dismissModalButton"));
    });
    await waitFor(() => {
      expect(onOk).toHaveBeenCalled();
    });
  });

  it("unmounts itself when close button is pressed", async () => {
    render(<Modal onDismissed={onOk} />);
    act(() => {
      fireEvent.click(screen.getByTestId("dismissModalButton"));
    });
    await waitFor(() => {
      expect(screen.queryByTestId("blanket")).toBeNull();
      expect(onOk).toHaveBeenCalled();
    });
  });

  it("unmounts itself when escape key is pressed", async () => {
    render(<Modal onDismissed={onOk} />);
    fireEvent.keyDown(document, {
      key: "Escape",
      code: "Escape",
    });
    await waitFor(() => {
      expect(screen.queryByTestId("blanket")).toBeNull();
    });
  });

  it("can be initialized without being mounted", async () => {
    render(<Modal enabled={false} />);
    await waitFor(() => {
      expect(screen.queryByTestId("blanket")).toBeNull();
    });
  });
});
