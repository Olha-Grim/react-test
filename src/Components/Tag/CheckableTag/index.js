import React from "react";
import { Tag as AntdTag } from "antd";

/**
 * @typedef Props
 * @prop {boolean} checked
 * @prop {(checked: boolean) => void} onChange
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */
const CheckableTag = ({ checked, onChange, children }) => {
  const props = { checked, onChange, children };

  return <AntdTag.CheckableTag {...props}>{children}</AntdTag.CheckableTag>;
};
export default CheckableTag;
