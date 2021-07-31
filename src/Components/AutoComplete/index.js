import React from "react";
import { AutoComplete as AntdAutoComplete } from "antd";
import { OptionData, OptionGroupData } from "rc-select/lib/interface";
import { FilterFunc } from "rc-select/lib/interface/generator";
import { InputProps } from 'antd/lib/input';
import { OptionProps } from 'rc-mentions/lib/Option';


/**
 * @typedef Props
 * @prop {boolean} allowClear
 * @prop {boolean} autoFocus
 * @prop {boolean} backfill
 * @prop {HTMLInputElement | HTMLTextAreaElement | React.ReactElement<InputProps>	} children 
 * @prop {React.ReactElement<OptionProps> | Array<React.ReactElement<OptionProps>>	} children 
 * @prop {boolean} defaultActiveFirstOption
 * @prop {boolean} defaultOpen
 * @prop {string} defaultValue
 * @prop {boolean} disabled
 * @prop {string} dropdownClassName
 * @prop {boolean | number	} dropdownMatchSelectWidth
 * @prop {boolean |  FilterFunc<OptionData | OptionGroupData>} filterOption
 * @prop {string} notFoundContent
 * @prop {boolean}  open
 * @prop {{ label: any, value:any }[]} options
 * @prop {string} placeholder
 * @prop {string} value
 * @prop {()=> void} onBlur
 * @prop {(value:any ) => void}  onChange
 * @prop {(open: boolean) => void}  onDropdownVisibleChange
 * @prop {()=> void} onFocus
 * @prop {(value:any) => void} onSearch
 * @prop {(value:any, option:any) => void} onSelect
 * @prop {string} className
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */

const AutoComplete = ({
  allowClear,
  className,
  autoFocus,
  backfill,
  children,
  defaultActiveFirstOption,
  defaultOpen,
  defaultValue,
  disabled,
  dropdownClassName,
  dropdownMatchSelectWidth,
  filterOption,
  notFoundContent,
  open,
  options,
  placeholder,
  value,
  onBlur,
  onChange,
  onDropdownVisibleChange,
  onFocus,
  onSearch,
  onSelect,
}) => {
  const props = {
    allowClear,
    className,
    autoFocus,
    backfill,
    children,
    defaultActiveFirstOption,
    defaultOpen,
    defaultValue,
    disabled,
    dropdownClassName,
    dropdownMatchSelectWidth,
    filterOption,
    notFoundContent,
    open,
    options,
    placeholder,
    value,
    onBlur,
    onChange,
    onDropdownVisibleChange,
    onFocus,
    onSearch,
    onSelect,
  };

  return <AntdAutoComplete {...props}>{children}</AntdAutoComplete>;
};
export default AutoComplete;
