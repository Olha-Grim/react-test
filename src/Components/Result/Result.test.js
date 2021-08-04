import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Result } from "..";
import Button from "../Button";

describe("Result", () => {
  test("interaction with Result component", () => {
    const { container, getByRole } = render(
      <Result
        status="success"
        title="Successfully Purchased Cloud Server ECS!"
        subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
        extra={[
          <Button type="primary" key="console">
            Go Console
          </Button>,
        ]}
      />
    );
    expect(container.firstChild).toBeInTheDocument();
    userEvent.click(getByRole("button"));
    expect(getByRole("button")).toHaveFocus();
  });
});
