import React from "react";
import { notification as AntdNotification } from "antd";
/**
 *
 * @typedef Props
 * @prop {number} bottom
 * @prop {React.ReactNode} btn
 * @prop {string} className
 * @prop {React.ReactNode} closeIcon
 * @prop {React.ReactNode} description
 * @prop {number} duration
 * @prop {() => HTMLElement} getContainer
 * @prop {React.ReactNode} icon
 * @prop {string} key
 * @prop {React.ReactNode} message
 * @prop {string} placement
 * @prop {	React.CSSProperties} style
 * @prop {number} top
 * @prop {function} onClick
 * @prop {function} onClose
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */

const notification = ({
  bottom,
  btn,
  className,
  closeIcon,
  description,
  duration,
  getContainer,
  icon,
  key,
  message,
  placement,
  style,
  top,
  onClick,
  onClose,
}) => {
  const props = {
    bottom,
    btn,
    className,
    closeIcon,
    description,
    duration,
    getContainer,
    icon,
    key,
    message,
    placement,
    style,
    top,
    onClick,
    onClose,
  };

  return AntdNotification;
};
export default notification;
