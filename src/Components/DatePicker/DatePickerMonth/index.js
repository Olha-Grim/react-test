import React from "react";
import {  DatePicker as AntdDatePicker } from "antd";
import { Moment } from "moment";

/**
 * @typedef Props
 * @prop {Moment} defaultPickerValue
 * @prop {Moment} defaultValue
 * @prop {string} format
 * @prop {() => React.ReactNode} renderExtraFooter
 * @prop {Moment} value
 * @prop {(date: Moment | null, dateString: string)=>void} onChange
 * @prop {(date: any) => React.ReactNode} monthCellRender
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */

/**
 * @param {Props} props
 */

const MonthPicker = ({
  defaultPickerValue,
  defaultValue,
  format,
  renderExtraFooter,
  monthCellRender,
  value,
  onChange,
  children,
}) => {
  const props = {
    defaultPickerValue,
    defaultValue,
    format,
    renderExtraFooter,
    monthCellRender,
    value,
    onChange,
    children,
  };

  return (
    <AntdDatePicker.MonthPicker {...props}>
      {children}
    </AntdDatePicker.MonthPicker>
  );
};
export default MonthPicker;
