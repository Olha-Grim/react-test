import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Rate from ".";

describe("Rate", () => {
  test("interaction with Rate component", () => {
    const { container } = render(<Rate />);
    expect(container.firstChild).toBeInTheDocument();
    userEvent.hover(container.firstChild);
    userEvent.click(container.firstChild);
    expect(container.firstChild).toHaveFocus();
  });
});
