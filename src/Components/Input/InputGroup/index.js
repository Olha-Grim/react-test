import React from "react";
import { Input as AntdInput } from "antd";

/**
 *
 * @typedef Props
 * @prop {boolean} compact
 * @prop {"small" | "large" | "default" | undefined} size
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */

const InputGroup = ({ compact, size, children }) => {
  const props = {
    compact,
    size,
    children,
  };

  return <AntdInput.Group {...props}>{children}</AntdInput.Group>;
};
export default InputGroup;
