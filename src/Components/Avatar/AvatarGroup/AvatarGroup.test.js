import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { UserOutlined } from "@ant-design/icons";
import AvatarGroup from ".";
import Avatar from "../Avatar";
import userEvent from "@testing-library/user-event";

describe("Avatar Group", () => {
  window.matchMedia =
    window.matchMedia ||
    function () {
      return {
        matches: false,
        addListener: function () {},
        removeListener: function () {},
      };
    };
  test("interaction with avatar group component", () => {
    const { container, queryAllByRole } = render(
      <AvatarGroup>
        <Avatar size="large" icon={<UserOutlined />} type="avatar" />
        <Avatar size="large" icon={<UserOutlined />} type="avatar" />
      </AvatarGroup>
    );

    const avatar = container.firstChild;
    const avatarHover = queryAllByRole("img");

    userEvent.hover(avatar);
    expect(avatarHover).toHaveLength(2);
  });
});
