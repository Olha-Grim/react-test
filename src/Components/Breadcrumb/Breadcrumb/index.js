import React from "react";
import { Breadcrumb as AntdBreadcrumb } from "antd";
import { Route } from "antd/lib/breadcrumb/Breadcrumb";


/**
 *
 * @typedef Props
 * @prop {(route: Route, params: any, routes: Route[], paths: string[]) => React.ReactNode} itemRender
 * @prop {object} params
 * @prop {Route[]} routes
 * @prop {React.ReactNode} separator
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */

const Breadcrumb = ({ itemRender, params, routes, separator, children }) => {
  const props = { itemRender, params, routes, separator, children };

  return <AntdBreadcrumb {...props}>{children}</AntdBreadcrumb>;
};
export default Breadcrumb;
