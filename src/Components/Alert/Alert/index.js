import React from "react";
import { Alert as AntdAlert } from "antd";
/**
 * @typedef Props
 * @prop {React.ReactNode } action
 * @prop {() => void} afterClose
 * @prop {boolean	} banner
 * @prop {boolean	} closable
 * @prop {React.ReactNode} closeText
 * @prop {React.ReactNode} description
 * @prop {React.ReactNode} icon
 * @prop {React.ReactNode} message
 * @prop {boolean} showIcon
 * @prop {"success" | "info" | "warning" | "error" | undefined} type
 * @prop {(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void	} onClose
 * @returns {JSX.Element}
 * @constructor
 */

/**
 * @param {Props} props
 */

const Alert = ({
  action,
  afterClose,
  banner,
  closable,
  closeText,
  description,
  icon,
  message,
  showIcon,
  type,
  onClose,
}) => {
  const props = {
    action,
    afterClose,
    banner,
    closable,
    closeText,
    description,
    icon,
    message,
    showIcon,
    type,
    onClose,
  };

  return <AntdAlert {...props} />;
};
export default Alert;
