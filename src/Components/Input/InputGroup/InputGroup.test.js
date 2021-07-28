import React from "react";
import { render } from "@testing-library/react";
import InputGroup from ".";

describe("InputGroup", () => {
  test("interaction with InputGroup", () => {
    const { container } = render(<InputGroup />);
    const input = container.firstChild;
    expect(input).toBeInTheDocument();
  });
});
