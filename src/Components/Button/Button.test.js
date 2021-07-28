import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from ".";

describe("Button", () => {
  test("interaction with input", () => {
    const { getByRole } = render(<Button />);
    const button = getByRole("button");
    expect(button).not.toHaveFocus();
    userEvent.click(getByRole("button"));
    expect(button).toHaveFocus();

    
  });
});
