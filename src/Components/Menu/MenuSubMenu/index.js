import React from "react";
import { Menu as AntdMenu } from "antd";
import MenuItem from "../MenuItem";

/**
 * 
 * @typedef Props
 * @prop {boolean} disabled
 * @prop {React.ReactNode} icon
 * @prop {string} key
 * @prop {string} popupClassName
 * @prop {string} title
 * @prop {[number, number]	} popupOffset
 * @prop {(e: {key: string; domEvent: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>}) => void} onTitleClick
 * @prop {Array<MenuItem | SubMenu>} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */


const SubMenu = ({
  disabled,
  icon,
  key,
  title,
  popupClassName,
  popupOffset,
  onTitleClick,
  children,
}) => {
  const props = {
    disabled,
    icon,
    key,
    title,
    popupClassName,
    popupOffset,
    onTitleClick,
    children,
  };

  return <AntdMenu.SubMenu {...props}>{children}</AntdMenu.SubMenu>;
};
export default SubMenu;