import React from "react";
import { Progress as AntdProgress } from "antd";
/**
 *
 * @typedef Props
 * @prop {(percent?: number, successPercent?: number) => React.ReactNode} format
 * @prop {number} percent
 * @prop {boolean} showInfo
 * @prop {"success" | "normal" | "exception" | "active" | undefined} status
 * @prop {string} strokeColor
 * @prop {"round" | "square"	} strokeLinecap
 * @prop {{ percent: number, strokeColor: string }	} success
 * @prop {string} trailColor
 * @prop {"circle" | "line" | "dashboard" | undefined} type
 * * type="line"
 * @prop {number} steps
 * @prop {string | { from: string; to: string; direction: string }	} strokeColor
 * @prop {number} strokeWidth
 * * type="circle"
 * @prop {string | object	} strokeColor
 * @prop {number} strokeWidth
 * @prop {number} width
 * * type="dashboard"
 * @prop {number} gapDegree
 * @prop {"left" | "right" | "top" | "bottom" | undefined} gapPosition
 * @prop {number} strokeWidth
 * @prop {number} width
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */
const Progress = ({
  format,
  percent,
  showInfo,
  status,
  strokeColor,
  strokeLinecap,
  success,
  trailColor,
  type,
  steps,
  strokeWidth,
  width,
  gapDegree,
  gapPosition,
}) => {
  const props = {
    format,
    percent,
    showInfo,
    status,
    strokeLinecap,
    success,
    trailColor,
    type,
    steps,
    strokeColor,
    strokeWidth,
    width,
    gapDegree,
    gapPosition,
  };

  return <AntdProgress {...props} />;
};
export default Progress;
