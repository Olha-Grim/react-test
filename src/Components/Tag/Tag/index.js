import React from "react";
import { Tag as AntdTag } from "antd";

/**
 * @typedef Props
 * @prop {boolean} closable
 * @prop {React.ReactNode} closeIcon
 * @prop {string} color
 * @prop {React.ReactNode} icon
 * @prop {boolean} visible
 * @prop {(e: React.MouseEvent<HTMLElement>) => void} onClose
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */

const Tag = ({
  children,
  closable,
  closeIcon,
  color,
  icon,
  visible,
  onClose,
}) => {
  const props = {
    children,
    closable,
    closeIcon,
    color,
    icon,
    visible,
    onClose,
  };

  return <AntdTag {...props}>{children}</AntdTag>;
};
export default Tag;
