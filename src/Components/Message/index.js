import React from "react";
import { message as AntdMessage } from "antd";
/**
 *
 * @typedef Props
 * @prop {string} className
 * @prop {React.ReactNode} content
 * @prop {number} duration
 * @prop {React.ReactNode} icon
 * @prop {string | number	} key
 * @prop {React.CSSProperties} style
 * @prop {function} onClick
 * @prop {function} onClose
 * @return {void}
 * @constructor
 */
/**
 * @param {Props} props
 */
const Message = ({
  className,
  content,
  duration,
  icon,
  key,
  style,
  onClick,
  onClose,
}) => {
  const props = {
    className,
    content,
    duration,
    icon,
    key,
    style,
    onClick,
    onClose,
  };

  return AntdMessage ;
};
export default Message;
