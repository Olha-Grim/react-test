import React from "react";
import { Tooltip as AntdTooltip } from "antd";
import { TooltipPlacement } from "antd/lib/tooltip";

/**
 *
 * @typedef Props
 * @prop {React.ReactNode | (() => React.ReactNode)	} title
 * @prop {object} align
 * @prop {boolean} arrowPointAtCenter
 * @prop {boolean} autoAdjustOverflow
 * @prop {string} color
 * @prop {boolean} defaultVisible
 * @prop {boolean | { keepParent?: boolean }	} destroyTooltipOnHide
 * @prop {(triggerNode:HTMLElement)=>HTMLElement	} getPopupContainer
 * @prop {number} mouseEnterDelay
 * @prop {number} mouseLeaveDelay
 * @prop {string} overlayClassName
 * @prop {object} overlayStyle
 * @prop {TooltipPlacement | undefined} placement
 * @prop {"hover" | "focus" | "click" | "contextMenu" | Array<string>	} trigger
 * @prop {boolean} visible
 * @prop {number} zIndex
 * @prop {(visible:any ) => void} onVisibleChange
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */

const Tooltip = ({
  getPopupContainer,
  mouseEnterDelay,
  mouseLeaveDelay,
  overlayClassName,
  overlayStyle,
  placement,
  trigger,
  visible,
  zIndex,
  onVisibleChange,
  children,
  title,
  align,
  arrowPointAtCenter,
  autoAdjustOverflow,
  color,
  defaultVisible,
  destroyTooltipOnHide,
}) => {
  const props = {
    getPopupContainer,
    mouseEnterDelay,
    mouseLeaveDelay,
    overlayClassName,
    overlayStyle,
    placement,
    trigger,
    visible,
    zIndex,
    onVisibleChange,
    children,
    title,
    align,
    arrowPointAtCenter,
    autoAdjustOverflow,
    color,
    defaultVisible,
    destroyTooltipOnHide,
  };

  return <AntdTooltip {...props}>{children}</AntdTooltip>;
};
export default Tooltip;
