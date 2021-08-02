import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import BackTop from ".";

describe("BackTop", () => {
  test("interaction with BackTop component", () => {
    const { getByText } = render(<BackTop />);
    // screen.debug();

    // const button = getByRole("button");
    // console.log(button);
    // expect(button).toBeVisible();

    // screen.debug();
  });
});
