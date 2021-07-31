import React from "react";
import { Layout as AntdLayout } from "antd";

/**
 *
 * @typedef Props
 * @prop {"xs" | "sm" | "md" | "lg" | "xl" | "xxl"} breakpoint
 * @prop {string} className
 * @prop {boolean} collapsed
 * @prop {number} collapsedWidth
 * @prop {boolean} collapsible
 * @prop {boolean} defaultCollapsed
 * @prop {boolean} reverseArrow
 * @prop {React.CSSProperties} style
 * @prop {"light" | "dark"} theme
 * @prop {React.ReactNode} trigger
 * @prop {number | string} width
 * @prop {object} zeroWidthTriggerStyle
 * @prop {(broken: boolean) => void} onBreakpoint
 * @prop {(collapsed: boolean, type: 'clickTrigger' | 'responsive' ) => void} onCollapse
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */

const Sider = ({
  breakpoint,
  className,
  collapsed,
  collapsedWidth,
  collapsible,
  defaultCollapsed,
  reverseArrow,
  style,
  theme,
  trigger,
  width,
  zeroWidthTriggerStyle,
  onBreakpoint,
  onCollapse,
  children,
}) => {
  const props = {
    breakpoint,
    className,
    collapsed,
    collapsedWidth,
    collapsible,
    defaultCollapsed,
    reverseArrow,
    style,
    theme,
    trigger,
    width,
    zeroWidthTriggerStyle,
    onBreakpoint,
    onCollapse,
    children,
  };

  return <AntdLayout.Sider {...props}>{children}</AntdLayout.Sider>;
};
export default Sider;
