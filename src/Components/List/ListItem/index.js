import React from "react";
import { List as AntdList } from "antd";
/**
 *
 * @typedef Props
 * @prop {Array<React.ReactNode>	} actions
 * @prop {React.ReactNode} extra
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */
const ListItem = ({ children, actions, extra }) => {
  const props = { children, actions, extra };

  return <AntdList.Item {...props}>{children}</AntdList.Item>;
};
export default ListItem;
