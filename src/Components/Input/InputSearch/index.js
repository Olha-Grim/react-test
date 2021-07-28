import React from "react";
import { Input as AntdInput } from "antd";

/**
 * 
 * @typedef Props
 * @prop {string} className
 * @prop {"large" | "middle" | "small"} size
 * @prop {boolean | React.ReactNode} enterButton
 * @prop {boolean} loading
 * @prop {(value: string, event?: | React.ChangeEvent<HTMLInputElement> | React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLInputElement>,) => void} onSearch
 * @prop {string} placeholder
 * @prop {React.CSSProperties} style
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */

const InputSearch = ({
  enterButton,
  size,
  loading,
  onSearch,
  className,
  placeholder,
  style,
}) => {
  const props = {
    enterButton,
    size,
    className,
    loading,
    onSearch,
    placeholder,
    style,
  };

  return <AntdInput.Search {...props} />;
};
export default InputSearch;
