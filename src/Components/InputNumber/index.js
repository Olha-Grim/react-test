import React from "react";
import { InputNumber as AntdInputNumber } from "antd";
import {ValueType} from "antd/lib/input-number";

/**
 * @typedef Props
 * @prop {boolean} autoFocus
 * @prop {boolean} bordered
 * @prop {string} decimalSeparator
 * @prop {number} defaultValue
 * @prop {boolean} disabled
 * @prop {(value: string | number| undefined)=> string	} formatter
 * @prop {boolean} keyboard
 * @prop {number} max
 * @prop {number} min
 * @prop {(displayValue: string | undefined) => number} parser
 * @prop {number} precision
 * @prop {boolean} readOnly
 * @prop {"large" | "middle" | "small"	} size
 * @prop {number | string	} step
 * @prop { boolean} stringMode
 * @prop {number| undefined} value
 * @prop {(value: number | string | null) =>void	} onChange
 * @prop {React.KeyboardEventHandler<HTMLInputElement>} onPressEnter
 * @prop {(value: number, info: { offset: ValueType; type: "up" | "down"; }) => void} onStep
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */

/**
 * @param {Props} props
 */

const InputNumber = ({
  autoFocus,
  bordered,
  decimalSeparator,
  defaultValue,
  disabled,
  formatter,
  keyboard,
  max,
  min,
  parser,
  precision,
  readOnly,
  size,
  step,
  stringMode,
  value,
  onChange,
  onPressEnter,
  onStep,
  children,
}) => {
  const props = {
    children,
    autoFocus,
    bordered,
    decimalSeparator,
    defaultValue,
    disabled,
    formatter,
    keyboard,
    max,
    min,
    parser,
    precision,
    readOnly,
    size,
    step,
    stringMode,
    value,
    onChange,
    onPressEnter,
    onStep,
  };

  return <AntdInputNumber {...props} />;
};
export default InputNumber;
