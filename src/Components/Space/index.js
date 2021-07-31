import React from "react";
import { Space as AntdSpace } from "antd"

/**
 *
 * @typedef Props
 * @prop {"start" | "end" | "center" |"baseline"} align
 * @prop {"vertical" | "horizontal"} direction
 * @prop {'small' | 'middle' | 'large' | undefined | number | ['small' | 'middle' | 'large' | undefined | number, 'small' | 'middle' | 'large' | undefined | number]} size
 * @prop {React.ReactNode} split
 * @prop {boolean} wrap
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */


const Space = ({ align, direction, size, split, wrap, children }) => {
  const props = { align, direction, size, split, wrap, children };

  return <AntdSpace {...props}>{children}</AntdSpace>;
};
export default Space;
