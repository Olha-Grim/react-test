import React from "react";
import { TimePicker as AntdTimePicker } from "antd";
import {Moment} from "moment";

/**
 * @typedef Props
 * @prop {boolean} autoFocus
 * @prop {boolean} bordered
 * @prop {string} className
 * @prop {React.ReactNode} clearIcon
 * @prop {string} clearText
 * @prop {Moment} defaultValue
 * @prop {boolean} disabled
 * @prop {()=>number[]} disabledHours
 * @prop {(selectedHour:any)=>number[]	} disabledMinutes
 * @prop {(selectedHour:any, selectedMinute:any)=>number[]} disabledSeconds
 * @prop {string} format
 * @prop {boolean} allowClear
 * @prop {(trigger:any)=> HTMLElement	} getPopupContainer
 * @prop {boolean} hideDisabledOptions
 * @prop {number} hourStep
 * @prop {boolean} inputReadOnly
 * @prop {number} minuteStep
 * @prop {boolean} open
 * @prop {string} placeholder
 * @prop {string} popupClassName
 * @prop {React.CSSProperties} popupStyle
 * @prop {() => React.ReactNode	} renderExtraFooter
 * @prop {number} secondStep
 * @prop {boolean} showNow
 * @prop {React.ReactNode} suffixIcon
 * @prop {boolean} use12Hours
 * @prop {Moment} value
 * @prop {(time: Moment | null, timeString: string)=> void	} onChange
 * @prop {(open: boolean) => void	} onOpenChange
 * @prop {(time: Moment | null)=> void	} onSelect
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */
const TimePicker = ({
  autoFocus,
  bordered,
  className,
  clearIcon,
  clearText,
  defaultValue,
  disabled,
  disabledHours,
  disabledMinutes,
  disabledSeconds,
  format,
  allowClear,
  getPopupContainer,
  hideDisabledOptions,
  hourStep,
  inputReadOnly,
  minuteStep,
  open,
  placeholder,
  popupClassName,
  popupStyle,
  renderExtraFooter,
  secondStep,
  showNow,
  suffixIcon,
  use12Hours,
  value,
  onChange,
  onOpenChange,
  onSelect,
  children,
}) => {
  const props = {
    autoFocus,
    bordered,
    className,
    clearIcon,
    clearText,
    defaultValue,
    disabled,
    disabledHours,
    disabledMinutes,
    disabledSeconds,
    format,
    allowClear,
    getPopupContainer,
    hideDisabledOptions,
    hourStep,
    inputReadOnly,
    minuteStep,
    open,
    placeholder,
    popupClassName,
    popupStyle,
    renderExtraFooter,
    secondStep,
    showNow,
    suffixIcon,
    use12Hours,
    value,
    onChange,
    onOpenChange,
    onSelect,
    children,
  };

  return <AntdTimePicker {...props}>{children}</AntdTimePicker>;
};
export default TimePicker;
