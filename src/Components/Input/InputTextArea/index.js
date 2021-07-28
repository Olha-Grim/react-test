import React from "react";
import { Input as AntdInput } from "antd";

/**
 *
 * @typedef Props
 * @prop {boolean} allowClear
 * @prop {boolean | object} autoSize
 * @prop {boolean} bordered
 * @prop {string} defaultValue
 * @prop {number} maxLength
 * @prop {boolean | { formatter: (args: { count: number; maxLength?: number | undefined; })=> string}} showCount
 * @prop {string} value
 * @prop {(size: { width: number; height: number; }) => void} onResize
 * @prop {(e?: React.KeyboardEventHandler<HTMLInputElement> | React.KeyboardEvent<HTMLTextAreaElement>)=>void} onPressEnter
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */

const InputTextArea = ({
  allowClear,
  autoSize,
  bordered,
  defaultValue,
  maxLength,
  showCount,
  value,
  onResize,
  onPressEnter,
}) => {
  const props = {
    allowClear,
    autoSize,
    bordered,
    defaultValue,
    maxLength,
    showCount,
    value,
    onResize,
    onPressEnter,
  };

  return <AntdInput.TextArea {...props} />;
};
export default InputTextArea;
