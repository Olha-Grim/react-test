import React from "react";
import { Switch as AntdSwitch } from "antd";
/**
 *
 * @typedef Props
 * @prop {boolean} autoFocus
 * @prop {boolean} checked
 * @prop {React.ReactNode} checkedChildren
 * @prop {string} className
 * @prop {boolean} defaultChecked
 * @prop {boolean} disabled
 * @prop {boolean} loading
 * @prop {"small" | "default" | undefined} size
 * @prop {React.ReactNode} unCheckedChildren
 * @prop {(checked: boolean, event: Event)=>void	} ReactNode
 * @prop {(checked: boolean, event: Event)=>void	} onClick
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */

const Switch = ({
  autoFocus,
  checked,
  checkedChildren,
  className,
  defaultChecked,
  disabled,
  loading,
  size,
  unCheckedChildren,
  ReactNode,
  onClick,
  children,
}) => {
  const props = {
    autoFocus,
    checked,
    checkedChildren,
    className,
    defaultChecked,
    disabled,
    loading,
    size,
    unCheckedChildren,
    ReactNode,
    onClick,
    children,
  };

  return <AntdSwitch {...props}>{children}</AntdSwitch>;
};
export default Switch;
