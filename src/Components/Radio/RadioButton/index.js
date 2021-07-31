import React from "react";
import { Radio as AntdRadio } from "antd";
/**
 * 
 * @typedef Props
 * @prop {boolean}  autoFocus
 * @prop {boolean} checked
 * @prop {boolean} defaultChecked
 * @prop {boolean}  disabled
 * @prop {any} value
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */

const RadioButton = ({
  autoFocus,
  checked,
  defaultChecked,
  disabled,
  value,
  children,
}) => {
  const props = {
    autoFocus,
    checked,
    defaultChecked,
    disabled,
    value,
    children,
  };

  return <AntdRadio.Button {...props}>{children}</AntdRadio.Button>;
};
export default RadioButton;
