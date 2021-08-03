import React from "react";
import { render } from "@testing-library/react";
import Space from ".";

describe("Space", () => {
  test("interaction with Space component", () => {
    const { container } = render(<Space>Space</Space>);
    const space = container.firstChild;
    expect(space).toBeInTheDocument();
  });
});
