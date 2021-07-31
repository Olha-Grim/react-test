import React from "react";
import { Checkbox as AntdCheckbox } from "antd";
import { CheckboxChangeEvent } from 'antd/lib/checkbox';

/**
 *
 * @typedef Props
 * @prop {boolean} autoFocus
 * @prop {boolean} checked
 * @prop {boolean} defaultChecked
 * @prop {boolean} disabled
 * @prop {boolean} indeterminate
 * @prop {(e: CheckboxChangeEvent) => void} onChange
 * @prop  {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */

const Checkbox = ({
  autoFocus,
  checked,
  defaultChecked,
  disabled,
  indeterminate,
  onChange,
  children,
}) => {
  const props = {
    autoFocus,
    checked,
    defaultChecked,
    disabled,
    indeterminate,
    onChange,
    children,
  };
  return <AntdCheckbox {...props}>{children}</AntdCheckbox>;
};
export default Checkbox;
