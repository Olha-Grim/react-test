import React from "react";
import { TimePicker as AntdTimePicker } from "antd";
import { PickerLocale } from "antd/lib/date-picker/generatePicker/index";
// import { EventValue } from "rc-picker/lib/interface";
import { Moment } from "moment";
import { PanelMode, EventValue, DisabledTimes } from "rc-picker/lib/interface";
/**
 *
 * @typedef Props
 * @prop {boolean} allowClear
 * @prop {boolean} autoFocus
 * @prop {boolean} bordered
 * @prop {string} className
 * @prop {(currentDate: Moment, today: Moment) => React.ReactNode	} dateRender
 * @prop {boolean} disabled
 * @prop {(currentDate: Moment) => boolean	} disabledDate
 * @prop {string} dropdownClassName
 * @prop {(trigger: any)=>HTMLElement} getPopupContainer
 * @prop {boolean} inputReadOnly
 * @prop {PickerLocale | undefined} locale
 * @prop {[PanelMode, PanelMode] | undefined} mode
 * @prop {boolean} open
 * @prop {(panelNode:any) => React.ReactNode	} panelRender
 * @prop {"date" | "week" | "month" | "quarter" | "year"	} picker
 * @prop {[string, string] | undefined} placeholder
 * @prop {React.CSSProperties} popupStyle
 * @prop {"large" | "middle" | "small"	} size
 * @prop {React.CSSProperties} style
 * @prop {React.ReactNode} suffixIcon
 * @prop {(open:any)=>void} onOpenChange
 * @prop {[Moment, Moment]} defaultPickerValue
 * @prop {[EventValue<Moment>, EventValue<Moment>]} defaultValue
 * @prop {(date:any)=>DisabledTimes} disabledTime
 * @prop {string | ((value: Moment) => string )| ((string | ((value: Moment) => string)[]))	} format
 * @prop {(mode: any) => React.ReactNode} renderExtraFooter
 * @prop {boolean} showNow
 * @prop {Moment} showTime.defaultValue
 * @prop {boolean} showToday
 * @prop {[EventValue<Moment>, EventValue<Moment>]} value
 * @prop {()=>void} onChange
 * @prop {(value: any, mode:any)=>void} onPanelChange
 * @prop {boolean} order
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */
const TimePickerRangePicker = ({
  order,
  children,
  allowClear,
  autoFocus,
  bordered,
  className,
  dateRender,
  disabled,
  disabledDate,
  dropdownClassName,
  getPopupContainer,
  inputReadOnly,
  locale,
  mode,
  open,
  panelRender,
  picker,
  placeholder,
  popupStyle,
  size,
  style,
  suffixIcon,
  onOpenChange,
  onPanelChange,
  defaultPickerValue,
  defaultValue,
  disabledTime,
  format,
  renderExtraFooter,
  showNow,
  showToday,
  value,
  onChange,
}) => {
  const props = {
    order,
    children,
    allowClear,
    autoFocus,
    bordered,
    className,
    dateRender,
    disabled,
    disabledDate,
    dropdownClassName,
    getPopupContainer,
    inputReadOnly,
    locale,
    mode,
    open,
    panelRender,
    picker,
    placeholder,
    popupStyle,
    size,
    style,
    suffixIcon,
    onOpenChange,
    onPanelChange,
    defaultPickerValue,
    defaultValue,
    disabledTime,
    format,
    renderExtraFooter,
    showNow,
    showToday,
    value,
    onChange,
  };

  return (
    <AntdTimePicker.RangePicker {...props}>
      {children}
    </AntdTimePicker.RangePicker>
  );
};
export default TimePickerRangePicker;
