import React from "react";
import { DatePicker as AntdDatePicker } from "antd";
import { Moment } from "moment";

/**
 *
 * @typedef Props
 * @prop {Moment} defaultPickerValue
 * @prop {Moment} defaultValue
 * @prop {string} format
 * @prop {() => React.ReactNode} renderExtraFooter
 * @prop {Moment | null} value
 * @prop {(date: Moment | null, dateString: string)=>void} onChange
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */

/**
 * @param {Props} props
 */

const QuarterPicker = ({
  defaultPickerValue,
  defaultValue,
  onChange,
  value,
  format,
  renderExtraFooter,
  children,
}) => {
  const props = {
    defaultPickerValue,
    defaultValue,
    onChange,
    value,
    format,
    renderExtraFooter,
    children,
  };

  return (
    <AntdDatePicker.QuarterPicker {...props}>
      {children}
    </AntdDatePicker.QuarterPicker>
  );
};
export default QuarterPicker;
