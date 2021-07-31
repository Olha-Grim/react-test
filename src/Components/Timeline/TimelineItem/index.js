import React from "react";
import { Timeline as AntdTimeline } from "antd";
/**
 *
 * @typedef Props
 * @prop {string} color
 * @prop {React.ReactNode} dot
 * @prop {React.ReactNode} label
 * @prop {"left" | "right"	} position
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */
const TimelineItem = ({ children, color, dot, label, position }) => {
  const props = { children, color, dot, label, position };

  return <AntdTimeline.Item {...props}>{children}</AntdTimeline.Item>;
};
export default TimelineItem;
