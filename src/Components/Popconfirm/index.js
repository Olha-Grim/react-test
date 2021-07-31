import React from "react";
import { Popconfirm as AntdPopconfirm } from "antd";
import {LegacyButtonType, BaseButtonProps as ButtonProps} from "antd/lib/button/button";



/**
 *
 * @typedef Props
 * @prop {ButtonProps} cancelButtonProps
 * @prop {string} cancelText
 * @prop {boolean} disabled
 * @prop {React.ReactNode} icon
 * @prop {ButtonProps} okButtonProps
 * @prop {string} okText
 * @prop {LegacyButtonType | undefined} okType
 * @prop {string} title
 * @prop {(e?: React.MouseEvent<HTMLElement>) => void} onCancel
 * @prop {(e?: React.MouseEvent<HTMLElement>) => void} onConfirm
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */
const Popconfirm = ({
  cancelButtonProps,
  cancelText,
  disabled,
  icon,
  okButtonProps,
  okText,
  okType,
  title,
  onCancel,
  onConfirm,
  children,
}) => {
  const props = {
    cancelButtonProps,
    cancelText,
    disabled,
    icon,
    okButtonProps,
    okText,
    okType,
    title,
    onCancel,
    onConfirm,
    children,
  };

  return <AntdPopconfirm {...props}>{children}</AntdPopconfirm>;
};
export default Popconfirm;
