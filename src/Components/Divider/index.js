import React from "react";
import { Divider as AntdDivider } from 'antd';

/**
 * @typedef Props
 * @prop {string} className
 * @prop {boolean} dashed
 * @prop {"left"| "right" | "center"} orientation
 * @prop {boolean} plain
 * @prop {React.CSSProperties} style
 * @prop {"horizontal" | "vertical"} type
 * @prop {JSX.Element} children
 * @returns {JSX.Element}
 */

/**
 * @param {Props} props
 */

const Divider = ({
  className,
  dashed,
  orientation,
  plain,
  style,
  type,
  children,
}) => {

  const props = {
    className,
    dashed,
    orientation,
    plain,
    style,
    type,
    children,
  };
  
  return <AntdDivider {...props}>{children}</AntdDivider>;
};
export default Divider;
