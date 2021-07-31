import React from "react";
import { Cascader as AntdCascader } from "antd";
import {
  CascaderValueType,
  FilledFieldNamesType,
  CascaderOptionType,
} from "antd/lib/cascader";

/**
 *
 * @typedef Props
 * @prop {boolean} allowClear
 * @prop {boolean} autoFocus
 * @prop {boolean} bordered
 * @prop {boolean} changeOnSelect
 * @prop {string} className
 * @prop {string[] | number[]	} defaultValue
 * @prop {boolean} disabled
 * @prop {(menus: React.ReactNode) => React.ReactNode	} dropdownRender
 * @prop {React.ReactNode} expandIcon
 * @prop {'click' | 'hover'} expandTrigger
 * @prop {object} fieldNames
 * @prop {(triggerNode: HTMLElement)=> HTMLElement} getPopupContainer
 * @prop {(selectedOptions: any) => void} loadData
 * @prop {string} notFoundContent
 * @prop {Option[]}  options
 * @prop {string}  placeholder
 * @prop {string} popupClassName
 * @prop {string} popupPlacement
 * @prop {boolean} popupVisible
 * @prop {boolean | Object} showSearch
 * @prop {"large" | "middle" | "small"} size
 * @prop {React.CSSProperties} style
 * @prop {React.ReactNode}  suffixIcon
 * @prop {string[] | number[]	} value
 * @prop {(value:any, selectedOptions: any) => void	} onChange
 * @prop {(value:any) => void} onPopupVisibleChange
 * @prop {(inputValue: string, path: CascaderValueType[], names: FilledFieldNamesType) => boolean	}  filter
 * @prop {number | false}  limit
 * @prop {boolean} matchInputWidth
 * @prop {( a: CascaderOptionType[], b: CascaderOptionType[], inputValue: string, names: FilledFieldNamesType,) => number} render
 * @prop {(a:any, b:any, inputValue:any)=>void} sort
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */

const Cascader = ({
  allowClear,
  autoFocus,
  bordered,
  changeOnSelect,
  className,
  defaultValue,
  disabled,
  dropdownRender,
  expandIcon,
  expandTrigger,
  fieldNames,
  getPopupContainer,
  loadData,
  notFoundContent,
  options,
  placeholder,
  popupClassName,
  popupPlacement,
  popupVisible,
  showSearch,
  size,
  style,
  suffixIcon,
  value,
  onChange,
  onPopupVisibleChange,
}) => {
  const props = {
    allowClear,
    autoFocus,
    bordered,
    changeOnSelect,
    className,
    defaultValue,
    disabled,
    dropdownRender,
    expandIcon,
    expandTrigger,
    fieldNames,
    getPopupContainer,
    loadData,
    notFoundContent,
    options,
    placeholder,
    popupClassName,
    popupPlacement,
    popupVisible,
    showSearch,
    size,
    style,
    suffixIcon,
    value,
    onChange,
    onPopupVisibleChange,
  };

  return <AntdCascader {...props} />;
};
export default Cascader;
