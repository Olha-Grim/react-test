import React from "react";
import { Checkbox as AntdCheckbox } from "antd";
import { CheckboxOptionType } from "antd/lib/checkbox";

/**
 *
 * @typedef Props
 * @prop {string[]} defaultValue
 * @prop {boolean} disabled
 * @prop {string} name
 * @prop {Array<CheckboxOptionType | string>} options
 * @prop {string[]} value
 * @prop {(checkedValue: Array<string | number | boolean>) => void} onChange
 * @prop  {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */

const CheckboxGroup = ({
  defaultValue,
  disabled,
  name,
  options,
  value,
  onChange,
  children,
}) => {
  const props = {
    defaultValue,
    disabled,
    name,
    options,
    value,
    onChange,
    children,
  };
  return <AntdCheckbox.Group {...props}>{children}</AntdCheckbox.Group>;
};
export default CheckboxGroup;
