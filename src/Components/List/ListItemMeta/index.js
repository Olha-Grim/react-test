import React from "react";
import { List as AntdList } from "antd";
/**
 *
 * @typedef Props
 * @prop {React.ReactNode} avatar
 * @prop {React.ReactNode} description
 * @prop {React.ReactNode} title
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */

const ListItemMeta = ({ avatar, description, title, children }) => {
  const props = { avatar, description, title, children };

  return <AntdList.Item.Meta {...props}>{children}</AntdList.Item.Meta>;
};
export default ListItemMeta;
