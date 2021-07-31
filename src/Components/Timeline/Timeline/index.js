import React from "react";
import { Timeline as AntdTimeline } from "antd";
/**
 *
 * @typedef Props
 * @prop {"left" | "alternate" | "right"	} mode
 * @prop {boolean | React.ReactNode	} pending
 * @prop {React.ReactNode} pendingDot
 * @prop {boolean} reverse
 * @prop  {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */
const Timeline = ({ children, mode, pending, pendingDot, reverse }) => {
  const props = { children, mode, pending, pendingDot, reverse };

  return <AntdTimeline {...props}>{children}</AntdTimeline>;
};
export default Timeline;
