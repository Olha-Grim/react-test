import React from "react";
import { DatePicker as AntdDatePicker } from "antd";
import {
  PanelMode,
  EventValue,
  DisabledTimes,
  RangeValue,
} from "rc-picker/lib/interface";
import { RangeType, RangeInfo} from "rc-picker/lib/RangePicker";
import TimePickerLocale from "rc-picker/lib/locale/de_DE";
import { AdditionalPickerLocaleLangProps } from "antd/es/date-picker/generatePicker";
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
 * @prop {(date: Moment | null) => boolean} disabledDate
 * @prop {string} dropdownClassName
 * @prop {(trigger:any)=> HTMLElement} getPopupContainer
 * @prop {boolean} inputReadOnly
 * @prop {{ lang: Locale & AdditionalPickerLocaleLangProps; timePickerLocale: TimePickerLocale; }} locale
 * @prop {[PanelMode, PanelMode] | undefined} mode
 * @prop {boolean} open
 * @prop {(panelNode:any) => React.ReactNode	} panelRender
 * @prop {"date" | undefined	} picker
 * @prop {[string, string] | undefined} placeholder
 * @prop {React.CSSProperties} popupStyle
 * @prop {"large" | "middle" | "small"	} size
 * @prop {React.CSSProperties} style
 * @prop {React.ReactNode} suffixIcon
 * @prop {(open:any)=> void} onOpenChange
 * @prop {(value:any, mode:any)=>void} onPanelChange
 * @prop {[boolean, boolean]} allowEmpty
 * @prop {(currentDate: Moment , today: Moment , info: { range: "start" | "end" }) => React.ReactNode} dateRender
 * @prop {[Moment, Moment]} defaultPickerValue
 * @prop {[Moment, Moment]} defaultValue
 * @prop {[boolean, boolean]}  disabled
 * @prop {(date: EventValue<Moment>, type: RangeType) => DisabledTimes} disabledTime
 * @prop {string | string[]} format
 * @prop {Record<string, [EventValue<Moment>, EventValue<Moment>] | (() => [EventValue<Moment>, EventValue<Moment>])>}  ranges
 * @prop {() => React.ReactNode} renderExtraFooter
 * @prop {React.ReactNode	} separator
 * @prop {object | boolean	} showTime
 * @prop {Moment[]| null} showTime.defaultValue
 * @prop {[Moment | null, Moment | null]} value
 * @prop {(values: RangeValue<Moment>, formatString: [string, string], info: RangeInfo) => void} onCalendarChange
 * @prop {(values: RangeValue<Moment>, formatString: [string, string]) => void	} onChange
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */

const RangePicker = ({
  allowClear,
  autoFocus,
  bordered,
  className,
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
  allowEmpty,
  dateRender,
  defaultPickerValue,
  defaultValue,
  disabledTime,
  format,
  ranges,
  renderExtraFooter,
  separator,
  showTime,
  value,
  onCalendarChange,
  onChange,
  children,
}) => {
  const props = {
    allowClear,
    autoFocus,
    bordered,
    className,
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
    allowEmpty,
    dateRender,
    defaultPickerValue,
    defaultValue,
    disabledTime,
    format,
    ranges,
    renderExtraFooter,
    separator,
    showTime,
    value,
    onCalendarChange,
    onChange,
    children,
  };

  return (
    <AntdDatePicker.RangePicker {...props}>
      {children}
    </AntdDatePicker.RangePicker>
  );
};
export default RangePicker;
