import React from "react";
import { render } from "@testing-library/react";
import Spin from ".";

describe("Spin", () => {
  test("interaction with spin component", () => {
    const { container } = render(<Spin />);
    expect(container.firstChild).toBeInTheDocument();
  });
});
