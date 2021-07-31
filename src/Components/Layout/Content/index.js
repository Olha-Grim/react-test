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

const Content = ({ className, hasSider, style, children }) => {
  const props = {
    className,
    hasSider,
    style,
    children,
  };

  return <AntdLayout.Content {...props}>{children}</AntdLayout.Content>;
};
export default Content;