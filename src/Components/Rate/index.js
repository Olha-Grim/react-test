import React from "react";
import { Rate as AntdRate } from "antd";
/**
 *
 * @typedef RateProps
 * @prop {boolean} allowClear
 * @prop {boolean} allowHalf
 * @prop {boolean} autoFocus
 * @prop {React.ReactNode | ((arg0: RateProps) => React.ReactNode)	} character
 * @prop {string} className
 * @prop {number} count
 * @prop {number} defaultValue
 * @prop {boolean} disabled
 * @prop {React.CSSProperties} style
 * @prop {string[]	} tooltips
 * @prop {number} value
 * @prop {()=>void} onBlur
 * @prop {(value: number)=>void} onChange
 * @prop {()=>void} onFocus
 * @prop {(value: number)=>void} onHoverChange
 * @prop {(event)} onKeyDown
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {RateProps} props
 */

const Rate = ({
  onChange,
  onFocus,
  onHoverChange,
  onKeyDown,
  count,
  defaultValue,
  disabled,
  style,
  tooltips,
  value,
  onBlur,
  allowClear,
  allowHalf,
  autoFocus,
  character,
  className,
  children,
}) => {
  const props = {
    onChange,
    onFocus,
    onHoverChange,
    onKeyDown,
    count,
    defaultValue,
    disabled,
    style,
    tooltips,
    value,
    onBlur,
    allowClear,
    allowHalf,
    autoFocus,
    character,
    className,
    children,
  };

  return <AntdRate {...props}>{children}</AntdRate>;
};
export default Rate;
