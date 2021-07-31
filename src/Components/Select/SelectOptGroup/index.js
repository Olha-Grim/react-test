import React from "react";
import { Select as AntdSelect } from "antd";
/**
 *
 * @typedef Props
 * @prop {string} key
 * @prop {boolean} label
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */

const SelectOptGroup = ({ key, label, children }) => {
  const props = { key, label, children };

  return <AntdSelect.OptGroup {...props}>{children}</AntdSelect.OptGroup>;
};
export default SelectOptGroup;
