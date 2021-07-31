import React from "react";
import { fireEvent, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Radio from ".";

describe("Radio", () => {
  test("interaction with Radio", () => {
    const onChange = jest.fn();
    const { getByRole } = render(<Radio onChange={onChange} />);
    const radio = getByRole("radio");
    expect(radio).not.toHaveFocus();
    userEvent.click(radio);
    fireEvent.change(radio, { target: { value: "a" } });
    expect(radio).toHaveFocus();
  });
});
