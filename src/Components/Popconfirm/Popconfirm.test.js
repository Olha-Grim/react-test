import React from "react";
import { render, screen } from "@testing-library/react";
import Popconfirm from ".";
import userEvent from "@testing-library/user-event";

describe("Popconfirm", () => {
  window.matchMedia =
    window.matchMedia ||
    function () {
      return {
        matches: false,
        addListener: function () {},
        removeListener: function () {},
      };
    };
  test("interaction with Popconfirm component", () => {
    const confirm = jest.fn();
    const cancel = jest.fn();
    const { getByRole } = render(
      <Popconfirm
        title="Are you sure to delete this task?"
        onConfirm={confirm}
        onCancel={cancel}
        okText="Yes"
        cancelText="No"
      >
        <a href="#">Delete</a>
      </Popconfirm>
    );
    userEvent.click(getByRole("link"));
    expect(getByRole("link")).toHaveFocus();
  });
});
