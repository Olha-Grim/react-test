import React from "react";
import { Card as AntdCard } from "antd";
/**
 *
 * @typedef Props
 * @prop {string} className
 * @prop {boolean} hoverable
 * @prop {React.CSSProperties} style
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */

/**
 * @param {Props} props
 */
const CardGrid = ({ children, className, hoverable, style }) => {
  const props = { children, className, hoverable, style };

  return <AntdCard.Grid {...props}>{children}</AntdCard.Grid>;
};
export default CardGrid;
