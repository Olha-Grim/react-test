import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import BackTop from ".";

describe("BackTop", () => {
  test("interaction with BackTop component", () => {
    const { container } = render(<BackTop />);
    screen.debug();
  });

//   const avatar = ;
//   const button = document.querySelector('ant-back-top')
  screen.debug()
//   console.log(button)
});
