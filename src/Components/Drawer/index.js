import React from "react";
import { Drawer as AntdDrawer } from "antd";
/**
 * @typedef Props
 * @prop {(visible: boolean) => void} afterVisibleChange
 * @prop {object} bodyStyle
 * @prop {string} className
 * @prop {boolean} closable
 * @prop {React.ReactNode} closeIcon
 * @prop {React.CSSProperties} contentWrapperStyle
 * @prop {boolean} destroyOnClose
 * @prop {object} drawerStyle
 * @prop {React.ReactNode} footer
 * @prop {React.CSSProperties} footerStyle
 * @prop {boolean} forceRender
 * @prop {string | HTMLElement | (() => HTMLElement) | false} getContainer
 * @prop {object} headerStyle
 * @prop {string | number	} height
 * @prop {boolean} keyboard
 * @prop {boolean} mask
 * @prop {boolean} maskClosable
 * @prop {React.CSSProperties} maskStyle
 * @prop {"top" | "right" | "bottom" | "left"	} placement
 * @prop {boolean | { distance: string | number }	} push
 * @prop {React.CSSProperties	} style
 * @prop {React.ReactNode} title
 * @prop {boolean} visible
 * @prop {string | number	} width
 * @prop {number} zIndex
 * @prop {(e: | React.KeyboardEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement | HTMLButtonElement>) => void} onClose
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */

const Drawer = ({
  afterVisibleChange,
  bodyStyle,
  className,
  closable,
  closeIcon,
  contentWrapperStyle,
  destroyOnClose,
  drawerStyle,
  footer,
  footerStyle,
  forceRender,
  getContainer,
  headerStyle,
  height,
  keyboard,
  mask,
  maskClosable,
  maskStyle,
  placement,
  push,
  style,
  title,
  visible,
  width,
  zIndex,
  onClose,
  children,
}) => {
  const props = {
    afterVisibleChange,
    bodyStyle,
    className,
    closable,
    closeIcon,
    contentWrapperStyle,
    destroyOnClose,
    drawerStyle,
    footer,
    footerStyle,
    forceRender,
    getContainer,
    headerStyle,
    height,
    keyboard,
    mask,
    maskClosable,
    maskStyle,
    placement,
    push,
    style,
    title,
    visible,
    width,
    zIndex,
    onClose,
    children,
  };

  return <AntdDrawer {...props}>{children}</AntdDrawer>;
};
export default Drawer;
