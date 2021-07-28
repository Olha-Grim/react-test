import React from "react";
import { Input as AntdInput } from "antd";

/**
 *
 * @typedef Props
 * @prop {React.ReactNode} addonAfter
 * @prop {React.ReactNode} addonBefore
 * @prop {boolean} allowClear
 * @prop {boolean} bordered
 * @prop {boolean} disabled
 * @prop {string} id
 * @prop {number} maxLength
 * @prop {React.ReactNode} prefix
 * @prop {"large" | "middle" | "small"} size
 * @prop {React.ReactNode} suffix
 * @prop {string} type
 * @prop {string} value
 * @prop {(e: React.KeyboardEvent<HTMLInputElement>| React.ChangeEvent<HTMLInputElement>)=> void} onChange
 * @prop {(e: React.KeyboardEvent<HTMLInputElement> | React.ChangeEvent<HTMLInputElement>)=> void} onPressEnter
 * @prop {string} defaultValue
 * @prop {string} className
 * @prop {string} placeholder
 * @prop {React.CSSProperties} style
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */

const Input = ({
  addonAfter,
  addonBefore,
  allowClear,
  bordered,
  disabled,
  id,
  maxLength,
  prefix,
  size,
  suffix,
  type,
  value,
  onChange,
  onPressEnter,
  defaultValue,
  className,
  placeholder,
  style,
}) => {
  const props = {
    addonAfter,
    addonBefore,
    allowClear,
    bordered,
    disabled,
    id,
    maxLength,
    prefix,
    size,
    suffix,
    type,
    value,
    onChange,
    onPressEnter,
    defaultValue,
    className,
    placeholder,
    style,
  };

  return <AntdInput {...props} />;
};
export default Input;
