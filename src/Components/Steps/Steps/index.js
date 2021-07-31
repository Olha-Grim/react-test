import React from "react";
import { Steps as AntdSteps } from "antd";
/**
 *
 * @typedef Props
 * @prop {string} className
 * @prop {number} current
 * @prop {"vertical" | "horizontal" | undefined} direction
 * @prop {number} initial
 * @prop {"vertical" | "horizontal" | undefined} labelPlacement
 * @prop {number} percent
 * @prop {boolean | Function} progressDot
 * @prop {boolean} responsive
 * @prop {"small" | "default" | undefined} size
 * @prop {"error" | "wait" | "process" | "finish" | undefined} status
 * @prop {"default" | "navigation" | undefined} type
 * @prop {(current: number) => void} onChange
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */
const Steps = ({
  className,
  current,
  direction,
  initial,
  labelPlacement,
  percent,
  progressDot,
  responsive,
  size,
  status,
  type,
  onChange,
  children,
}) => {
  const props = {
    className,
    current,
    direction,
    initial,
    labelPlacement,
    percent,
    progressDot,
    responsive,
    size,
    status,
    type,
    onChange,
    children,
  };

  return <AntdSteps {...props}>{children}</AntdSteps>;
};
export default Steps;
