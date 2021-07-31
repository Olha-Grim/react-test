import React from "react";
import { Spin as AntdSpin } from "antd";
/**
 *
 * @typedef SpinProps
 * @prop {number} delay (milliseconds)
 * @prop {React.ReactElement<HTMLElement> | undefined} indicator
 * @prop {"small" | "default" | "large" | undefined} size
 * @prop {boolean} spinning
 * @prop {string} tip
 * @prop {string} wrapperClassName
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {SpinProps} props
 */

const Spin = ({ delay, indicator, size, spinning, tip, wrapperClassName }) => {
  const props = { delay, indicator, size, spinning, tip, wrapperClassName };

  return <AntdSpin {...props} />;
};
export default Spin;
