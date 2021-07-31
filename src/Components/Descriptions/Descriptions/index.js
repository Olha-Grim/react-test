import React from "react";
import { Descriptions as AntdDescriptions } from "antd";
/**
 *
 * @typedef Props
 * @prop {boolean} bordered
 * @prop {boolean} colon
 * @prop {number} column
 * @prop {React.CSSProperties} contentStyle
 * @prop {React.ReactNode} extra
 * @prop {React.CSSProperties} labelStyle
 * @prop {"horizontal" | "vertical"	} layout
 * @prop {"default" | "middle" | "small"	} size
 * @prop {React.ReactNode} title
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */

const Descriptions = ({
  bordered,
  colon,
  children,
  column,
  contentStyle,
  extra,
  labelStyle,
  layout,
  size,
  title,
}) => {
  const props = {
    bordered,
    colon,
    children,
    column,
    contentStyle,
    extra,
    labelStyle,
    layout,
    size,
    title,
  };

  return <AntdDescriptions {...props}>{children}</AntdDescriptions>;
};
export default Descriptions;
