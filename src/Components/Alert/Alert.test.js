import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Alert from "./Alert";

describe("Alert", () => {
  test("interaction with Alert component", () => {
    const onClose = jest.fn();
    const { getByRole } = render(
      <>
        <Alert
          message="Warning Text Warning Text Warning TextW arning Text Warning Text Warning TextWarning Text"
          type="warning"
          closable
          onClose={onClose}
        />
      </>
    );
    const alert = getByRole("alert");
    const button = getByRole("button");

    expect(alert).toHaveTextContent(
      "Warning Text Warning Text Warning TextW arning Text Warning Text Warning TextWarning Text"
    );
    expect(button).not.toHaveFocus();
    userEvent.click(button);
    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
