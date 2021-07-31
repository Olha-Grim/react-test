import React from "react";
import { Table as AntdTable } from "antd";

/**
 *
 * @typedef Props
 * @prop {React.ReactNode} title
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */


const TableColumn = ({ children, title }) => {
  const props = { children, title };

  return <AntdTable.ColumnGroup {...props}>{children}</AntdTable.ColumnGroup>;
};
export default TableColumn;
