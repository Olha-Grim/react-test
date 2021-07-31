import React from "react";
import { Statistic as AntdStatistic } from "antd";

/**
 *
 * @typedef Props
 * @prop {string}  format
 * @prop {React.ReactNode}  prefix
 * @prop {React.ReactNode}  suffix
 * @prop {React.ReactNode}  title
 * @prop {string | number | undefined}  value
 * @prop {React.CSSProperties}  valueStyle
 * @prop {() => void	}  onFinish
 * @prop {(value?: string | number | undefined) => void}  onChange
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */

const StatisticCountdown = ({
  format,
  prefix,
  suffix,
  title,
  value,
  valueStyle,
  onFinish,
  onChange,
  children,
}) => {
  const props = {
    format,
    prefix,
    suffix,
    title,
    value,
    valueStyle,
    onFinish,
    onChange,
    children,
  };

  return (
    <AntdStatistic.Countdown {...props}>{children}</AntdStatistic.Countdown>
  );
};
export default StatisticCountdown;
