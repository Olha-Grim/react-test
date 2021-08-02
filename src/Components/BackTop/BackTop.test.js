import React from "react";
import { render } from "@testing-library/react";
import BackTop from ".";

describe("BackTop", () => {
  test("interaction with BackTop component", () => {
    const { asFragment } = render(<BackTop />)
    expect(asFragment(<BackTop />)).toMatchSnapshot();
  });
});
