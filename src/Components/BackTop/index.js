import React from "react";
import { BackTop as AntdBackTop } from "antd";

/**
 * @typedef Props
 * @prop {number} duration
 * @prop {() => HTMLElement} target
 * @prop {number} visibilityHeight
 * @prop {()=> void} onClick
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */

/**
 * @param {Props} props
 */
const BackTop = ({ duration, target, visibilityHeight, onClick, children }) => {
  const props = { duration, target, visibilityHeight, onClick, children };

  return <AntdBackTop {...props}>{children}</AntdBackTop>;
};
export default BackTop;
