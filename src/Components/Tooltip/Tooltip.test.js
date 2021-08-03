import React from "react";
import { render } from "@testing-library/react";
import Tooltip from ".";
import userEvent from "@testing-library/user-event";

describe("Tag", () => {
  test("interaction with tag component", () => {
    const { getByRole, getByText, findByText, queryByText } = render(
      <Tooltip title="prompt text">
        <a href="">Tooltip will show on mouse enter.</a>
      </Tooltip>
    );

    const tooltip = queryByText("prompt text");
    const text = getByRole("link");
    expect(tooltip).toBeNull();

    userEvent.click(text);
    userEvent.type(getByRole("link"));
    // expect(getByText("prompt text")).toBeInTheDocument();

  });
});
