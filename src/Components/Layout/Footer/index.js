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

const Footer = ({ className, hasSider, style, children }) => {
  const props = {
    className,
    hasSider,
    style,
    children,
  };

  return <AntdLayout.Footer {...props}>{children}</AntdLayout.Footer>;
};
export default Footer;
