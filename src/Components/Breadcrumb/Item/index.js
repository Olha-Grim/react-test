import React from "react";
import {  Breadcrumb as AntdBreadcrumb } from "antd";
import { DropDownProps } from "antd/lib/dropdown/dropdown";

/**
 *
 * @typedef Props
 * @prop {string} className
 * @prop {DropDownProps} dropdownProps
 * @prop {string} href
 * @prop {React.ReactElement<any, string> } overlay
 * @prop {(event: React.MouseEvent<HTMLAnchorElement | HTMLSpanElement, MouseEvent>)=> void} onClick
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */

const BreadcrumbItem = ({
  className,
  dropdownProps,
  href,
  overlay,
  onClick,
  children,
}) => {
  const props = { className, dropdownProps, href, overlay, onClick, children };

  return <AntdBreadcrumb.Item {...props}>{children}</AntdBreadcrumb.Item>;
};
export default BreadcrumbItem;
