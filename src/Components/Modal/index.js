import React from "react";
import {ButtonProps, Modal as AntdModal } from "antd";
import { LegacyButtonType } from "antd/lib/button/button";

/**
 * 
 * @typedef Props
 * @prop {() => void} afterClose
 * @prop {React.CSSProperties} bodyStyle
 * @prop {ButtonProps} cancelButtonProps
 * @prop {boolean} centered
 * @prop {boolean} closable
 * @prop {React.ReactNode} closeIcon
 * @prop {boolean} confirmLoading
 * @prop {boolean} destroyOnClose
 * @prop {boolean} focusTriggerAfterClose
 * @prop {React.ReactNode} footer
 * @prop {boolean} forceRender
 * @prop {HTMLElement | (() => HTMLElement)	} getContainer
 * @prop {boolean} keyboard
 * @prop {boolean} mask
 * @prop {boolean} maskClosable
 * @prop {React.CSSProperties	} maskStyle
 * @prop {(node: React.ReactNode) => React.ReactNode	} modalRender
 * @prop {ButtonProps} okButtonProps
 * @prop {React.ReactNode} okText
 * @prop {LegacyButtonType | undefined} okType
 * @prop {React.CSSProperties} style
 * @prop {React.ReactNode} title
 * @prop {boolean} visible
 * @prop {string | number	} width
 * @prop {string} wrapClassName
 * @prop {number} zIndex
 * @prop {()=>void	} onCancel
 * @prop {()=>void	} onOk
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */

const Modal = ({
  afterClose,
  bodyStyle,
  cancelButtonProps,
  centered,
  closable,
  confirmLoading,
  destroyOnClose,
  focusTriggerAfterClose,
  footer,
  forceRender,
  getContainer,
  keyboard,
  mask,
  maskClosable,
  maskStyle,
  modalRender,
  okButtonProps,
  okText,
  okType,
  style,
  title,
  width,
  wrapClassName,
  zIndex,
  onCancel,
  onOk,
  children,
}) => {
  const props = {
    afterClose,
    bodyStyle,
    cancelButtonProps,
    centered,
    closable,
    confirmLoading,
    destroyOnClose,
    focusTriggerAfterClose,
    footer,
    forceRender,
    getContainer,
    keyboard,
    mask,
    maskClosable,
    maskStyle,
    modalRender,
    okButtonProps,
    okText,
    okType,
    style,
    title,
    width,
    wrapClassName,
    zIndex,
    onCancel,
    onOk,
    children,
  };

  return <AntdModal {...props}>{children}</AntdModal>;
};
export default Modal;
