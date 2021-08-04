import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Badge from "./Badge";

describe("Badge", () => {
  test("interaction with Badge component", () => {
    const { getByRole } = render(
      <Badge count={5}>
        <a href="#" className="head-example" />
      </Badge>
    );

    userEvent.click(getByRole("link"));
    expect(getByRole("link")).toHaveFocus();
  });
});
