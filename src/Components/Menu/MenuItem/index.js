import React from "react";
import { Menu as AntdMenu } from "antd";

/**
 *
 * @typedef Props
 * @prop {boolean} danger
 * @prop {boolean} disabled
 * @prop {React.ReactNode} icon
 * @prop {string} key
 * @prop {string} title
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */

const MenuItem = ({ danger, disabled, icon, key, title, children }) => {
  const props = {
    danger,
    disabled,
    icon,
    key,
    title,
    children,
  };

  return <AntdMenu.Item {...props}>{children}</AntdMenu.Item>;
};
export default MenuItem;
