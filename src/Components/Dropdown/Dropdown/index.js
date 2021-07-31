import React from "react";
import { Dropdown as AntdDropdown} from "antd";

/**
 * @typedef Props
 * @prop {boolean} arrow
 * @prop {boolean} disabled
 * @prop {(triggerNode: HTMLElement) => HTMLElement} getPopupContainer
 * @prop {React.ReactElement<any, string | React.JSXElementConstructor<any>> } overlay
 * @prop {string} overlayClassName
 * @prop {React.CSSProperties} overlayStyle
 * @prop {"topLeft" | "topCenter" | "topRight" | "bottomLeft" | "bottomCenter" | "bottomRight" | undefined} placement
 * @prop {('click' | 'hover' | 'contextMenu')[]} trigger
 * @prop {boolean} visible
 * @prop {(visible: boolean) => void} onVisibleChange
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */

const Dropdown = ({
  arrow,
  disabled,
  getPopupContainer,
  overlay,
  overlayClassName,
  overlayStyle,
  placement,
  trigger,
  visible,
  onVisibleChange,
  children,
}) => {
  const props = {
    arrow,
    disabled,
    getPopupContainer,
    overlay,
    overlayClassName,
    overlayStyle,
    placement,
    trigger,
    visible,
    onVisibleChange,
    children,
  };

  return <AntdDropdown {...props}>{children}</AntdDropdown>;
};
export default Dropdown;
