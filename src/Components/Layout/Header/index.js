import React from "react";
import { Layout as AntdLayout } from "antd";

/**
 * 
 * @typedef Props
 * @prop {string} className
 * @prop {boolean} hasSider
 * @prop {React.CSSProperties} style
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */

const Header = ({ className, hasSider, style, children }) => {
  const props = {
    className,
    hasSider,
    style,
    children,
  };

  return <AntdLayout.Header {...props}>{children}</AntdLayout.Header>;
};
export default Header;
