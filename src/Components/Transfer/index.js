import React from "react";
import { Transfer as AntdTransfer } from "antd";
import { RenderResult, SelectAllLabel, ListStyle } from "antd/lib/transfer";

/**
 *
 * @typedef Props
 * @prop {any} dataSource
 * @prop {boolean} disabled
 * @prop {(inputValue: string, item: any) => boolean} filterOption
 * @prop {(props:any) => React.ReactNode	} footer
 * @prop {React.CSSProperties | ((style: ListStyle) => React.CSSProperties) | undefined} listStyle
 * @prop {{ itemUnit: string; itemsUnit: string; searchPlaceholder: string; notFoundContent: React.ReactNode; }	} locale
 * @prop {boolean} oneWay
 * @prop { string[]} operations
 * @prop {object} operationStyle
 * @prop {boolean | { pageSize: number }} pagination
 * @prop {(record:any ) => RenderResult} render
 * @prop {SelectAllLabel[] | undefined} selectAllLabels
 * @prop {string[]	} selectedKeys
 * @prop {boolean} showSearch
 * @prop {boolean } showSelectAll
 * @prop {string[]	} targetKeys
 * @prop {React.ReactNode[]	} titles
 * @prop {(targetKeys: string[], direction: 'left' | 'right', moveKeys: string[]) => void} onChange
 * @prop {(direction: 'left' | 'right', e: React.SyntheticEvent<HTMLUListElement>) => void} onScroll
 * @prop {(direction: 'left' | 'right', value: string) => void} onSearch
 * @prop {(sourceSelectedKeys: string[], targetSelectedKeys: string[]) => void} onSelectChange
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */

const Transfer = ({
  dataSource,
  disabled,
  filterOption,
  footer,
  listStyle,
  locale,
  oneWay,
  operations,
  operationStyle,
  pagination,
  render,
  selectAllLabels,
  selectedKeys,
  showSearch,
  showSelectAll,
  targetKeys,
  titles,
  onChange,
  onScroll,
  onSearch,
  onSelectChange,
}) => {
  const props = {
    dataSource,
    disabled,
    filterOption,
    footer,
    listStyle,
    locale,
    oneWay,
    operations,
    operationStyle,
    pagination,
    render,
    selectAllLabels,
    selectedKeys,
    showSearch,
    showSelectAll,
    targetKeys,
    titles,
    onChange,
    onScroll,
    onSearch,
    onSelectChange,
  };

  return <AntdTransfer {...props} />;
};
export default Transfer;
