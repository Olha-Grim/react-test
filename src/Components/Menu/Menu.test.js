import React from "react";
import { render } from "@testing-library/react";
import { Menu, MenuItem, SubMenu, MenuItemGroup } from ".";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";

describe("Menu", () => {
  test("interaction with Menu component", () => {
    const handleClick = jest.fn();
    const { container } = render(
      <Menu onClick={handleClick} selectedKeys={"mail"} mode="horizontal">
        <MenuItem key="mail" icon={<MailOutlined />}>
          Navigation One
        </MenuItem>
        <MenuItem key="app" disabled icon={<AppstoreOutlined />}>
          Navigation Two
        </MenuItem>
        <SubMenu
          key="SubMenu"
          icon={<SettingOutlined />}
          title="Navigation Three - Submenu"
        >
          <MenuItemGroup title="Item 1">
            <MenuItem key="setting:1">Option 1</MenuItem>
            <MenuItem key="setting:2">Option 2</MenuItem>
          </MenuItemGroup>
          <MenuItemGroup title="Item 2">
            <MenuItem key="setting:3">Option 3</MenuItem>
            <MenuItem key="setting:4">Option 4</MenuItem>
          </MenuItemGroup>
        </SubMenu>
      </Menu>
    );
    const menu = container.firstChild;
    expect(menu).toBeInTheDocument();
  });
});
