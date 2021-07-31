import React from "react";
import { Breadcrumb as AntdBreadcrumb } from "antd";
/**
 *
 * @typedef Props
 * @prop {string} className
 * @prop {React.ReactNode} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */
const Separator = ({ className, children }) => {
  const props = { className, children };

  return (
    <AntdBreadcrumb.Separator {...props}>{children}</AntdBreadcrumb.Separator>
  );
};
export default Separator;
