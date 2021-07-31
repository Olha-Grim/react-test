import React from "react";
import { Col as AntdCol } from "antd";
/**
 *
 * @typedef Props
 * @prop {string | number} flex
 * @prop {number} offset
 * @prop {number} order
 * @prop {number} pull
 * @prop {number} push
 * @prop {number} span
 * @prop {number | object} xs
 * @prop {number | object} sm
 * @prop {number | object} lg
 * @prop {number | object} xl
 * @prop {number | object} xxl
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */
const Col = ({
  children,
  flex,
  offset,
  order,
  pull,
  push,
  span,
  xs,
  sm,
  lg,
  xl,
  xxl,
}) => {
  const props = {
    children,
    flex,
    offset,
    order,
    pull,
    push,
    span,
    xs,
    sm,
    lg,
    xl,
    xxl,
  };

  return <AntdCol {...props}>{children}</AntdCol>;
};
export default Col;
