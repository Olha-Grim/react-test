import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Affix from ".";

describe("Affix", () => {
  test("interaction with affix component", () => {
    render(<Affix />)
    // const { container } = render(<Affix />);
    const affix = screen.getByRole('button');
    screen.debug()
    expect(affix).not.toHaveFocus();
    userEvent.click(affix);
    expect(affix).toHaveFocus();
  })
})