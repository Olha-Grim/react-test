import React from "react";
import { DatePicker as AntdDatePicker } from "antd";
import { Moment } from "moment";

/**
 * @typedef Props
 * @prop {Moment} defaultPickerValue
 * @prop {Moment} defaultValue
 * @prop {string} format
 * @prop {(mode:any) => React.ReactNode} renderExtraFooter
 * @prop {Moment} value
 * @prop {(date: Moment | null, dateString: string)=>void} onChange
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */

/**
 * @param {Props} props
 */

const WeekPicker = ({
  defaultPickerValue,
  defaultValue,
  format,
  renderExtraFooter,
  value,
  onChange,
  children,
}) => {
  const props = {
    defaultPickerValue,
    defaultValue,
    format,
    renderExtraFooter,
    value,
    onChange,
    children,
  };

  return (
    <AntdDatePicker.WeekPicker {...props}>{children}</AntdDatePicker.WeekPicker>
  );
};
export default WeekPicker;
