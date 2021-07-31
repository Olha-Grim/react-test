import React from "react";
import { Menu as AntdMenu } from "antd";
import MenuItem from "../MenuItem";

/**
 *
 * @typedef Props
 * @prop {React.ReactNode} title
 * @prop {MenuItem[]} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */

const MenuItemGroup = ({ title, children }) => {
  const props = {
    title,
    children,
  };

  return <AntdMenu.ItemGroup {...props}>{children}</AntdMenu.ItemGroup>;
};
export default MenuItemGroup;
