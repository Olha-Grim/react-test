import React from "react";
import { Statistic as AntdStatistic } from "antd";
/**
 * 
 * @typedef Props
 * @prop {string} decimalSeparator
 * @prop {(value:any) => React.ReactNode	} formatter
 * @prop {string} groupSeparator
 * @prop {boolean} loading
 * @prop {number} precision
 * @prop {React.ReactNode} prefix
 * @prop {React.ReactNode} suffix
 * @prop {React.ReactNode} title
 * @prop {string | number	} value
 * @prop {React.CSSProperties} valueStyle
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */

const Statistic = ({
  decimalSeparator,
  children,
  suffix,
  title,
  value,
  valueStyle,
  formatter,
  groupSeparator,
  loading,
  precision,
  prefix,
}) => {
  const props = {
    decimalSeparator,
    children,
    suffix,
    title,
    value,
    valueStyle,
    formatter,
    groupSeparator,
    loading,
    precision,
    prefix,
  };

  return <AntdStatistic {...props}>{children}</AntdStatistic>;
};
export default Statistic;