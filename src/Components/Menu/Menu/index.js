import React from "react";
import {SubMenuProps, Menu as AntdMenu } from "antd";
import {SelectEventHandler, MenuClickEventHandler } from "rc-menu/lib/interface";
import { Key } from "rc-tree/lib/interface";

/**
 *
 * @typedef Props
 * @prop {string[]	} defaultOpenKeys
 * @prop {string[]} defaultSelectedKeys
 * @prop {React.ReactNode |((props: SubMenuProps & { isSubMenu: boolean }) => React.ReactNode)	} expandIcon
 * @prop {boolean} forceSubMenuRender
 * @prop {boolean} inlineCollapsed
 * @prop {number} inlineIndent
 * @prop {"vertical" | "horizontal" | "inline"} mode
 * @prop {boolean} multiple
 * @prop {string[]	} openKeys
 * @prop {React.ReactNode} overflowedIndicator
 * @prop {boolean} selectable
 * @prop {string[]	} selectedKeys
 * @prop {React.CSSProperties}  style
 * @prop {number} subMenuCloseDelay
 * @prop {number} subMenuOpenDelay
 * @prop {"light" | "dark"} theme
 * @prop {"hover" | "click"} triggerSubMenuAction
 * @prop {MenuClickEventHandler} onClick
 * @prop {SelectEventHandler} onDeselect
 * @prop {(openKeys: string[] | Key[]) => void} onOpenChange
 * @prop {SelectEventHandler} onSelect
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */

const Menu = ({
  defaultOpenKeys,
  defaultSelectedKeys,
  expandIcon,
  forceSubMenuRender,
  inlineCollapsed,
  inlineIndent,
  mode,
  multiple,
  openKeys,
  overflowedIndicator,
  selectable,
  selectedKeys,
  style,
  subMenuCloseDelay,
  subMenuOpenDelay,
  theme,
  triggerSubMenuAction,
  onClick,
  onDeselect,
  onOpenChange,
  onSelect,
  children,
}) => {
  const props = {
    defaultOpenKeys,
    defaultSelectedKeys,
    expandIcon,
    forceSubMenuRender,
    inlineCollapsed,
    inlineIndent,
    mode,
    multiple,
    openKeys,
    overflowedIndicator,
    selectable,
    selectedKeys,
    style,
    subMenuCloseDelay,
    subMenuOpenDelay,
    theme,
    triggerSubMenuAction,
    onClick,
    onDeselect,
    onOpenChange,
    onSelect,
    children,
  };

  return <AntdMenu {...props}>{children}</AntdMenu>;
};
export default Menu;
