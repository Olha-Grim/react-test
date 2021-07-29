import React from "react";
import { render } from "@testing-library/react";
import InputPassword from ".";

describe("InputPassword", () => {
  test("interaction with InputPassword", () => {
    const { container } = render(<InputPassword />);
    const input = container.firstChild;
    expect(input).toBeInTheDocument();
  });
});