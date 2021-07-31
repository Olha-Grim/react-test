import React from "react";
import {  Mentions as AntdMentions } from "antd";
import { MentionsProps } from 'rc-mentions/lib/Mentions';
import { OptionProps } from 'rc-mentions/lib/Option';

/**
 * @typedef Props
 * @prop {boolean} autoFocus
 * @prop {boolean | object	} autoSize
 * @prop {string} defaultValue
 * @prop {false | ((input: string, { value }: OptionProps) => boolean) | undefined} filterOption
 * @prop {() => HTMLElement} getPopupContainer
 * @prop { React.ReactNode} notFoundContent
 * @prop {"top" | "bottom"	} placement
 * @prop {string | string[]} prefix
 * @prop {string} split
 * @prop {(text: string, props: MentionsProps) => boolean	} validateSearch
 * @prop {string} value
 * @prop {() => void} onBlur
 * @prop {(text: string) => void} onChange
 * @prop {() => void} onFocus
 * @prop {(size: { width: number; height: number; }) => void} onResize
 * @prop {(text: string, prefix: string) => void} onSearch
 * @prop {(option: OptionProps, prefix: string) => void} onSelect
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */

 

const Mentions = ({
  autoFocus,
  autoSize,
  defaultValue,
  filterOption,
  getPopupContainer,
  notFoundContent,
  placement,
  prefix,
  split,
  validateSearch,
  value,
  onBlur,
  onChange,
  onFocus,
  onResize,
  onSearch,
  onSelect,
  children,
}) => {
  const props = {
    autoFocus,
    autoSize,
    defaultValue,
    filterOption,
    getPopupContainer,
    notFoundContent,
    placement,
    prefix,
    split,
    validateSearch,
    value,
    onBlur,
    onChange,
    onFocus,
    onResize,
    onSearch,
    onSelect,
    children,
  };

  return <AntdMentions {...props}>{children}</AntdMentions>;
};
export default Mentions;
