import React from "react";
import { Table as AntdTable } from "antd";
import { Breakpoint } from "antd/lib/_util/responsiveObserve";
import {
  FilterDropdownProps,
  CompareFn,
  SortOrder,
  ColumnFilterItem,
} from "antd/lib/table/interface";
import { FixedType } from "rc-table/lib/interface";
import { TooltipPropsWithOverlay } from "antd/lib/tooltip";

/**
 *
 * @typedef Props
 * @prop {"left" | "right" | "center"} align
 * @prop {string}  className
 * @prop {number}  colSpan
 * @prop {string | string[]		}  dataIndex
 * @prop {string[]	}  defaultFilteredValue
 * @prop {"ascend" | "descend"	} defaultSortOrder
 * @prop {boolean} editable
 * @prop {boolean | {showTitle?: boolean }	} ellipsis
 * @prop {React.ReactNode | ((props: FilterDropdownProps) => React.ReactNode)} filterDropdown
 * @prop {boolean} filterDropdownVisible
 * @prop {true} filtered
 * @prop {string[]	} filteredValue
 * @prop {React.ReactNode | ((filtered: boolean) => React.ReactNode	)} filterIcon
 * @prop {boolean} filterMultiple
 * @prop {ColumnFilterItem[]} filters
 * @prop {FixedType | undefined} fixed
 * @prop {string} key
 * @prop {(text:string, record:any, index:any)=>{}	} render
 * @prop {Breakpoint[]} responsive
 * @prop {(record:any, prevRecord:any) => boolean} shouldCellUpdate
 * @prop {TooltipPropsWithOverlay} showSorterTooltip
 * @prop {[]} sortDirections
 * @prop {{ compare?: CompareFn<any> | undefined; multiple?: number | undefined; }} sorter
 * @prop {SortOrder | undefined} sortOrder
 * @prop {React.ReactNode | (( sortOrder:any, sortColumn:any, filters:any ) => React.ReactNode)	} title
 * @prop {string | number	} width
 * @prop {(record: any, rowIndex:any)=> React.HTMLAttributes<HTMLElement>	} onCell
 * @prop {(value: string | number | boolean, record: any) => boolean} onFilter
 * @prop {(visible:any)=> {}	} onFilterDropdownVisibleChange
 * @prop {(column:any)=>React.HTMLAttributes<HTMLElement>	}  onHeaderCell
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */

const TableColumn = ({
  align,
  className,
  colSpan,
  dataIndex,
  defaultFilteredValue,
  defaultSortOrder,
  editable,
  ellipsis,
  filterDropdown,
  filterDropdownVisible,
  filtered,
  filteredValue,
  filterIcon,
  filterMultiple,
  filters,
  fixed,
  key,
  render,
  responsive,
  shouldCellUpdate,
  showSorterTooltip,
  sortDirections,
  sorter,
  sortOrder,
  title,
  width,
  onCell,
  onFilter,
  onFilterDropdownVisibleChange,
  onHeaderCell,
}) => {
  const props = {
    align,
    className,
    colSpan,
    dataIndex,
    defaultFilteredValue,
    defaultSortOrder,
    editable,
    ellipsis,
    filterDropdown,
    filterDropdownVisible,
    filtered,
    filteredValue,
    filterIcon,
    filterMultiple,
    filters,
    fixed,
    key,
    render,
    responsive,
    shouldCellUpdate,
    showSorterTooltip,
    sortDirections,
    sorter,
    sortOrder,
    title,
    width,
    onCell,
    onFilter,
    onFilterDropdownVisibleChange,
    onHeaderCell,
  };

  return <AntdTable.Column {...props} />;
};
export default TableColumn;
