import React from "react";
import { Descriptions as AntdDescriptions } from "antd";
/**
 * @typedef Props
 * @prop { React.CSSProperties} contentStyle
 * @prop {React.ReactNode} label
 * @prop {React.CSSProperties} labelStyle
 * @prop {number} span
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */ 

const DescriptionsItem = ({
  contentStyle,
  label,
  labelStyle,
  span,
  children,
}) => {
  const props = { contentStyle, label, labelStyle, span, children };

  return <AntdDescriptions.Item {...props}>{children}</AntdDescriptions.Item>;
};
export default DescriptionsItem;
