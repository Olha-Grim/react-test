import React from "react";
import { render, screen } from "@testing-library/react";
import { UserOutlined } from "@ant-design/icons";
import Avatar from "./Avatar";

describe("Avatar", () => {
  window.matchMedia =
    window.matchMedia ||
    function () {
      return {
        matches: false,
        addListener: function () {},
        removeListener: function () {},
      };
    };
  test("interaction with avatar component", () => {
    const { container } = render(
      <Avatar size="large" icon={<UserOutlined />} />
    );

    expect(container.firstChild).toBeInTheDocument();
  });
});
