import React from "react";
import { Dropdown as AntdDropdown, Menu } from "antd";

/**
 * @typedef Props
 * @prop {(buttons: React.ReactNode[]) => React.ReactNode[]} buttonsRender
 * @prop {boolean} disabled
 * @prop {React.ReactNode} icon
 * @prop {React.ReactElement<any, string | React.JSXElementConstructor<any>>} overlay
 * @prop {"topLeft" | "topCenter" | "topRight" | "bottomLeft" | "bottomCenter" | "bottomRight" | undefined} placement
 * @prop {'small' | 'middle' | 'large' | undefined} size
 * @prop {('click' | 'hover' | 'contextMenu')[]} trigger
 * @prop {'primary' | 'ghost' | 'dashed' | undefined} type
 * @prop {boolean} visible
 * @prop {React.MouseEventHandler<HTMLButtonElement>} onClick
 * @prop {(visible: boolean) => void	} onVisibleChange
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */

const DropdownButton = ({
  buttonsRender,
  disabled,
  icon,
  overlay,
  placement,
  size,
  trigger,
  type,
  visible,
  onClick,
  onVisibleChange,
  children,
}) => {
  const props = {
    buttonsRender,
    disabled,
    icon,
    overlay,
    placement,
    size,
    trigger,
    type,
    visible,
    onClick,
    onVisibleChange,
    children,
  };

  return <AntdDropdown.Button {...props}>{children}</AntdDropdown.Button>;
};
export default DropdownButton;
