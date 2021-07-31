import React from "react";
import { Pagination as AntdPagination } from "antd";
/**
 *
 * @typedef Props
 * @prop {number} current
 * @prop {number} defaultCurrent
 * @prop {number} defaultPageSize
 * @prop {boolean} disabled
 * @prop {boolean} hideOnSinglePage
 * @prop {(page: number, type: 'page' | 'prev' | 'next' | 'jump-prev' | 'jump-next', originalElement: React.ReactElement<HTMLElement>,) => React.ReactNode} itemRender
 * @prop {number} pageSize
 * @prop {string[]} pageSizeOptions
 * @prop {boolean} responsive
 * @prop {boolean} showLessItems
 * @prop {boolean | { goButton: React.ReactNode }} showQuickJumper
 * @prop {boolean} showSizeChanger
 * @prop {boolean} showTitle
 * @prop {(total: number, range: [number, number]) => React.ReactNode} showTotalshowTotal
 * @prop {boolean} simple
 * @prop {"default" | "small"} size
 * @prop {number} total
 * @prop {(page: number, pageSize?: number) => void} onChange
 * @prop {(current: number, size: number) => void} onShowSizeChange
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */

/**
 * @param {Props} props
 */

const Pagination = ({
  current,
  defaultCurrent,
  defaultPageSize,
  disabled,
  hideOnSinglePage,
  itemRender,
  pageSize,
  pageSizeOptions,
  responsive,
  showLessItems,
  showQuickJumper,
  showSizeChanger,
  showTitle,
  showTotalshowTotal,
  simple,
  size,
  total,
  onChange,
  onShowSizeChange,
}) => {
  const props = {
    current,
    defaultCurrent,
    defaultPageSize,
    disabled,
    hideOnSinglePage,
    itemRender,
    pageSize,
    pageSizeOptions,
    responsive,
    showLessItems,
    showQuickJumper,
    showSizeChanger,
    showTitle,
    showTotalshowTotal,
    simple,
    size,
    total,
    onChange,
    onShowSizeChange,
  };
console.log(props)
  return <AntdPagination {...props}/>;
};
export default Pagination;
