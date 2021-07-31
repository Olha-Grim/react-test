import React from "react";
import { DatePicker as AntdDatePicker } from "antd";
import { DisabledTimes, CustomFormat } from "rc-picker/lib/interface";
import { AdditionalPickerLocaleLangProps } from "antd/es/date-picker/generatePicker";
import TimePickerLocale from "rc-picker/lib/locale/de_DE";
import { Locale } from "rc-picker/lib/interface";
import { Moment } from "moment";

/**
 * @typedef Props
 * @prop {boolean} allowClear
 * @prop {boolean} autoFocus
 * @prop {boolean} bordered
 * @prop {string} className
 * @prop {(currentDate: Moment, today: Moment) => React.ReactNode	} dateRender
 * @prop {boolean} disabled
 * @prop {(currentDate: Moment) => boolean	} disabledDate
 * @prop {string} dropdownClassName
 * @prop {(trigger:any)=>HTMLElement} getPopupContainer
 * @prop {boolean} inputReadOnly
 * @prop {{ lang: Locale & AdditionalPickerLocaleLangProps; timePickerLocale: TimePickerLocale; }} locale
 * @prop {"time" | "date" | "month" | "year" | "decade"	} mode
 * @prop {boolean} open
 * @prop {(panelNode:any) => React.ReactNode	} panelRender
 * @prop {"date" | undefined} picker
 * @prop {string} placeholder
 * @prop {React.CSSProperties} popupStyle
 * @prop {"large" | "middle" | "small"	} size
 * @prop {React.CSSProperties} style
 * @prop {React.ReactNode} suffixIcon
 * @prop {(open:any)=>void} onOpenChange
 * @prop {(value:any, mode:any)=>void} onPanelChange
 * @prop {Moment} defaultPickerValue
 * @prop {Moment} defaultValue
 * @prop {(date:any)=> DisabledTimes} disabledTime
 * @prop {string | CustomFormat<Moment> | (string | CustomFormat<Moment>)[] | undefined} format
 * @prop {(mode:any) => React.ReactNode} renderExtraFooter
 * @prop {boolean} showNow
 * @prop {Moment} showTime.defaultValue
 * @prop {boolean} showToday
 * @prop {Moment} value
 * @prop {()=>void} onChange
 * @prop {(value:any, mode:any)=>void} onPanelChange
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */

const DatePicker = ({
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

  return <AntdDatePicker {...props}>{children}</AntdDatePicker>;
};
export default DatePicker;
