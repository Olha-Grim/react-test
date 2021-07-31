import React from "react";
import { Typography as AntdTypography } from "antd";

/**
 * @typedef Props
 * @prop {string} href
 * @prop {string} target
 * @prop {string | undefined} title
 * @prop {string} className
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */

const Link = ({ href, target, title, className, children }) => {
  const props = { href, target, title, className, children };
  return <AntdTypography.Link {...props}>{children}</AntdTypography.Link>;
};
export default Link;
