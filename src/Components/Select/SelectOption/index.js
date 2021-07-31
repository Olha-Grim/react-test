import React from "react";
import { Select as AntdSelect } from "antd";
/**
 *
 * @typedef Props
 * @prop {string} className
 * @prop {boolean} disabled
 * @prop {string} title
 * @prop {string | number} value
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */

const SelectOption = ({ className, disabled, title, value, children }) => {
  const props = { className, disabled, title, value, children };

  return <AntdSelect.Option {...props}>{children}</AntdSelect.Option>;
};
export default SelectOption;
