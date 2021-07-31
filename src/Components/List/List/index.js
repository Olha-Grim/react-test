import React from "react";
import { SpinProps, List as AntdList } from "antd";
import { ListLocale } from "antd/lib/list/index";
import { PaginationConfig } from "antd/es/pagination";

/**
 *
 * @typedef Props
 * @prop {boolean} bordered
 * @prop {any[]} dataSource
 * @prop {React.ReactNode} footer
 * @prop {object} grid
 * @prop {React.ReactNode} header
 * @prop {"horizontal" | "vertical"} itemLayout
 * @prop {boolean | SpinProps} loading
 * @prop {React.ReactNode} loadMore
 * @prop {ListLocale | undefined} locale
 * @prop {false | PaginationConfig | undefined} pagination
 * @prop {(item: any) => React.ReactNode	} renderItem
 * @prop {string | ((record:any)=>string)	} rowKey
 * @prop {"default" | "large" | "small"	} size
 * @prop {boolean} split
 * @prop {string} className
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */

const List = ({
  children,
  bordered,
  dataSource,
  footer,
  grid,
  header,
  itemLayout,
  loading,
  loadMore,
  locale,
  pagination,
  renderItem,
  rowKey,
  size,
  split,
  className,
}) => {
  const props = {
    children,
    bordered,
    dataSource,
    footer,
    grid,
    header,
    itemLayout,
    loading,
    loadMore,
    locale,
    pagination,
    renderItem,
    rowKey,
    size,
    split,
    className,
  };

  return <AntdList {...props}>{children}</AntdList>;
};
export default List;
