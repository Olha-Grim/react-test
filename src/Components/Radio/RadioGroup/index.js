import React from "react";
import { RadioChangeEvent, Radio as AntdRadio } from "antd";
/**
 *
 * @typedef Props
 * @prop {"outline" | "solid"	} buttonStyle
 * @prop {any} defaultValue
 * @prop {boolean} disabled
 * @prop {string} name
 * @prop {string[] | Array<{ label: string, value: string, disabled?: boolean }>	} options
 * @prop {"default" | "button"	} optionType
 * @prop {"large" | "middle" | "small"} size
 * @prop {any} value
 * @prop {(e: RadioChangeEvent) => void} onChange
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */

const RadioGroup = ({
  buttonStyle,
  defaultValue,
  disabled,
  name,
  options,
  optionType,
  size,
  value,
  onChange,
  children,
}) => {
  const props = {
    buttonStyle,
    defaultValue,
    disabled,
    name,
    options,
    optionType,
    size,
    value,
    onChange,
    children,
  };

  return <AntdRadio.Group {...props}>{children}</AntdRadio.Group>;
};
export default RadioGroup;
