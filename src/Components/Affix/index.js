import React from "react";
import { Affix as AntdAffix } from "antd";
/**
 * @typedef Props
 * @prop {number} offsetBottom
 * @prop {number} offsetTop
 * @prop {() => HTMLElement} target
 * @prop {(affixed:any)=>void} onChange
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */

/**
 * @param {Props} props
 */
const Affix = ({ offsetBottom, offsetTop, target, onChange, children }) => {
  const props = { offsetBottom, offsetTop, target, onChange, children };

  return <AntdAffix {...props}>{children}</AntdAffix>;
};
export default Affix;
