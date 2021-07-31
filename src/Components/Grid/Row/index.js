import React from "react";
import { Row as AntdRow } from "antd";
import { Gutter } from "antd/lib/grid/row";
/**
 *
 * @typedef Props
 * @prop {"middle" | "top" | "bottom" | "stretch" | undefined} align
 * @prop {Gutter | [Gutter, Gutter] | undefined} gutter
 * @prop {"start" | "end" | "center" |"space-around" | "space-between"} justify
 * @prop {boolean} wrap
 * @prop {string} className
 * @prop {JSX.Element}children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */
const Row = ({ children, align, gutter, justify, wrap, className }) => {
  const props = { children, align, gutter, justify, wrap, className };

  return <AntdRow {...props}>{children}</AntdRow>;
};
export default Row;
