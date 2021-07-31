import React from "react";
import { TreeSelect as AntdTreeSelect } from "antd";
import { FilterFunc } from "rc-select/lib/interface/generator";
import { DataNode, Key } from "rc-tree/lib/interface";
import { LegacyDataNode, LabelValueType } from "rc-tree-select/lib/interface";
import { CheckedStrategy } from "rc-tree-select/lib/utils/strategyUtil";

/**
 *
 * @typedef Props
 * @prop {boolean} allowClear
 * @prop {boolean} autoClearSearchValue
 * @prop {boolean} bordered
 * @prop {string | string[]} defaultValue
 * @prop {boolean} disabled
 * @prop {string} dropdownClassName
 * @prop {boolean | number	} dropdownMatchSelectWidth
 * @prop {((menu: React.ReactElement<any, string | React.JSXElementConstructor<any>>) => React.ReactElement<any, string | React.JSXElementConstructor<any>>)} dropdownRender
 * @prop {React.CSSProperties} dropdownStyle
 * @prop {boolean | FilterFunc<LegacyDataNode> | undefined} filterTreeNode
 * @prop {(triggerNode:HTMLElement)=> HTMLElement} getPopupContainer
 * @prop {boolean} labelInValue
 * @prop {number} listHeight
 * @prop {(node:any)=> Promise<unknown>	} loadData
 * @prop { "responsive" | undefined	} maxTagCount
 * @prop {((omittedValues: LabelValueType[]) => React.ReactNode) | undefined	} maxTagPlaceholder
 * @prop {boolean} multiple
 * @prop {string} placeholder
 * @prop {string} searchValue
 * @prop {boolean} showArrow
 * @prop {CheckedStrategy | undefined} showCheckedStrategy
 * @prop {boolean} showSearch
 * @prop {"large" | "middle" | "small"	} size
 * @prop {React.ReactNode} suffixIcon
 * @prop {React.ReactNode} switcherIcon
 * @prop {boolean} treeCheckable
 * @prop {boolean} treeCheckStrictly
 * @prop {DataNode[]}  treeData
 * @prop {boolean | Object	} treeDataSimpleMode
 * @prop {boolean} treeDefaultExpandAll
 * @prop {string[]	} treeDefaultExpandedKeys
 * @prop {string[]	} treeExpandedKeys
 * @prop {boolean} treeIcon
 * @prop {string} treeNodeLabelProp
 * @prop {string | string[]	} value
 * @prop {boolean} virtual
 * @prop {(value:any, label:any, extra:any)=> void	} onChange
 * @prop {(open:any)=> void	} onDropdownVisibleChange
 * @prop {(value: string)=>void	} onSearch
 * @prop {(value: string, option: any) => void} onSelect
 * @prop {(expandedKeys:any)=>void	} onTreeExpand
 * * TreeNode - We recommend you to use treeData rather than TreeNode, to avoid the trouble of manual construction
 * @prop {boolean} checkable
 * @prop {boolean} disableCheckbox
 * @prop {boolean} disabled
 * @prop {boolean} isLeaf
 * @prop {string | number | Key | undefined} key
 * @prop {boolean} selectable
 * @prop {React.ReactNode} title
 * @prop {string} value
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */

const TreeSelect = ({
  allowClear,
  autoClearSearchValue,
  bordered,
  defaultValue,
  disabled,
  dropdownClassName,
  dropdownMatchSelectWidth,
  dropdownRender,
  dropdownStyle,
  filterTreeNode,
  getPopupContainer,
  labelInValue,
  listHeight,
  loadData,
  maxTagCount,
  maxTagPlaceholder,
  multiple,
  placeholder,
  searchValue,
  showArrow,
  showCheckedStrategy,
  showSearch,
  size,
  suffixIcon,
  switcherIcon,
  treeCheckable,
  treeCheckStrictly,
  treeData,
  treeDataSimpleMode,
  treeDefaultExpandAll,
  treeExpandedKeys,
  treeDefaultExpandedKeys,
  treeIcon,
  treeNodeLabelProp,
  value,
  virtual,
  onChange,
  onDropdownVisibleChange,
  onSearch,
  onSelect,
  onTreeExpand,
  children,
}) => {
  const props = {
    allowClear,
    autoClearSearchValue,
    bordered,
    defaultValue,
    disabled,
    dropdownClassName,
    dropdownMatchSelectWidth,
    dropdownRender,
    dropdownStyle,
    filterTreeNode,
    getPopupContainer,
    labelInValue,
    listHeight,
    loadData,
    maxTagCount,
    maxTagPlaceholder,
    multiple,
    placeholder,
    searchValue,
    showArrow,
    showCheckedStrategy,
    showSearch,
    size,
    suffixIcon,
    switcherIcon,
    treeCheckable,
    treeCheckStrictly,
    treeData,
    treeDataSimpleMode,
    treeDefaultExpandAll,
    treeExpandedKeys,
    treeDefaultExpandedKeys,
    treeIcon,
    treeNodeLabelProp,
    value,
    virtual,
    onChange,
    onDropdownVisibleChange,
    onSearch,
    onSelect,
    onTreeExpand,
    children,
  };

  return <AntdTreeSelect {...props}>{children}</AntdTreeSelect>;
};
export default TreeSelect;
