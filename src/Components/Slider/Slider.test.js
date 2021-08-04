import React from "react";
import { render } from "@testing-library/react";
import Slider from ".";

describe("Slider", () => {
  test("interaction with Slider component", () => {
    const { container } = render(<Slider defaultValue={30} disabled={false} />);
    expect(container.firstChild).toBeInTheDocument();
  });
});
