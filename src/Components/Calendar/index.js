import React from "react";
import { Calendar as AntdCalendar } from "antd";
import TimePickerLocale from "rc-picker/lib/locale/de_DE";
import { AdditionalPickerLocaleLangProps } from "antd/es/date-picker/generatePicker";
import { Locale } from "rc-picker/lib/interface";
import {Moment} from "moment";

/**
 * @typedef Props
 * @prop {(date: Moment)=> React.ReactNode} dateCellRender
 * @prop {(date: Moment)=> React.ReactNode} dateFullCellRender
 * @prop { Moment} defaultValue
 * @prop {(date: Moment) => boolean} disabledDate
 * @prop {boolean} fullscreen
 * @prop {(object:{value: Moment, type: string, onChange: function, onTypeChange: function })=> React.ReactNode	} headerRender
 * @prop {{ lang: Locale & AdditionalPickerLocaleLangProps; timePickerLocale: TimePickerLocale; }} locale
 * @prop {"month" | "year"} mode
 * @prop {(date: Moment)=>  React.ReactNode} monthCellRender
 * @prop {(date: Moment)=>  React.ReactNode} monthFullCellRender
 * @prop {[Moment, Moment]} validRange
 * @prop {Moment} value
 * @prop {(date: Moment)=> void} onChange
 * @prop {(date: Moment, mode: string)=> void	} onPanelChange
 * @prop {(date: Moment) => void} onSelect
 * @returns {JSX.Element}
 * @constructor
 */

/**
 * @param {Props} props
 */

const Calendar = ({
  dateCellRender,
  dateFullCellRender,
  defaultValue,
  disabledDate,
  fullscreen,
  headerRender,
  locale,
  mode,
  monthCellRender,
  validRange,
  value,
  onChange,
  onPanelChange,
  onSelect,
}) => {
  const props = {
    dateCellRender,
    dateFullCellRender,
    defaultValue,
    disabledDate,
    fullscreen,
    headerRender,
    locale,
    mode,
    monthCellRender,
    validRange,
    value,
    onChange,
    onPanelChange,
    onSelect,
  };

  return <AntdCalendar {...props} />;
};
export default Calendar;
