import React from "react";
import { Tree as AntdTree } from "antd";
import { EventDataNode, DataNode, Key } from "rc-tree/lib/interface";
import { NodeDragEventParams } from "rc-tree/lib/contextTypes";

/**
 *
 * @typedef Props
 * @prop {(options: { dropNode: DataNode; dropPosition: 0 | 1 | -1; })=> boolean} allowDrop
 * @prop {boolean} autoExpandParent
 * @prop {boolean} blockNode
 * @prop {boolean} checkable
 * @prop {string[] | {checked: string[], halfChecked: string[]}	} checkedKeys
 * @prop {boolean} checkStrictly
 * @prop {string[]	} defaultCheckedKeys
 * @prop {boolean} defaultExpandAll
 * @prop {string[]	} defaultExpandedKeys
 * @prop {boolean} defaultExpandParent
 * @prop {string[]} defaultSelectedKeys
 * @prop {boolean} disabled
 * @prop {((node: DataNode) => boolean) | boolean} draggable
 * @prop {string[]	} expandedKeys
 * @prop {(node:any)=>boolean	} filterTreeNode
 * @prop {number} height
 * @prop {React.ReactNode | ((props:any) => React.ReactNode)	} icon
 * @prop {(node:any)=>Promise<void>	} loadData
 * @prop {string[]	} loadedKeys
 * @prop {boolean	} multiple
 * @prop {boolean	} selectable
 * @prop {string[] | Key[]} selectedKeys
 * @prop {boolean} showIcon
 * @prop {boolean | {showLeafIcon: boolean}}  showLine
 * @prop {React.ReactElement<any, string | React.JSXElementConstructor<any>>} switcherIcon
 * @prop {(nodeData:any) => React.ReactNode	} titleRender
 * @prop {Array<{ key:any, title:string, children: [disabled:any, selectable:any] }>	} treeData
 * @prop {boolean} virtual
 * @prop {(checked: Key[] | { checked: Key[]; halfChecked: Key[]; }, info: any) => void	} onCheck
 * @prop {(info: NodeDragEventParams<HTMLDivElement>) => void} onDragEnd
 * @prop {(info: NodeDragEventParams<HTMLDivElement> & { expandedKeys: Key[]; }) => void} onDragEnter
 * @prop {(info: NodeDragEventParams<HTMLDivElement>) => void} onDragLeave
 * @prop {(info: NodeDragEventParams<HTMLDivElement>) => void} onDragOver
 * @prop {(info: NodeDragEventParams<HTMLDivElement>) => void} onDragStart
 * @prop {(info: NodeDragEventParams<HTMLDivElement> & { dragNode: EventDataNode; dragNodesKeys: Key[]; dropPosition: number; dropToGap: boolean; }) => void} onDrop
 * @prop {(expandedKeys: Key[], info: { node: EventDataNode; expanded: boolean; nativeEvent: MouseEvent; }) => void} onExpand
 * @prop {(loadedKeys: Key[], info: { event: "load"; node: EventDataNode; }) => void} onLoad
 * @prop {(info: { event: React.MouseEvent<Element, MouseEvent>; node: EventDataNode; }) => void} onRightClick
 * @prop {(selectedKeys: Key[], info: { event: "select"; selected: boolean; node: EventDataNode; selectedNodes: DataNode[]; nativeEvent: MouseEvent; }) => void} onSelect
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */

const Tree = ({
  allowDrop,
  autoExpandParent,
  blockNode,
  checkable,
  checkedKeys,
  checkStrictly,
  defaultCheckedKeys,
  defaultExpandAll,
  defaultExpandedKeys,
  defaultSelectedKeys,
  disabled,
  draggable,
  expandedKeys,
  filterTreeNode,
  height,
  icon,
  loadData,
  loadedKeys,
  multiple,
  selectable,
  selectedKeys,
  showIcon,
  showLine,
  switcherIcon,
  titleRender,
  treeData,
  virtual,
  onCheck,
  onDragEnd,
  onDragEnter,
  onDragLeave,
  onDragOver,
  onDragStart,
  onDrop,
  onExpand,
  onLoad,
  onRightClick,
  onSelect,
  children,
}) => {
  const props = {
    allowDrop,
    autoExpandParent,
    blockNode,
    checkable,
    checkedKeys,
    checkStrictly,
    defaultCheckedKeys,
    defaultExpandAll,
    defaultExpandedKeys,
    defaultSelectedKeys,
    disabled,
    draggable,
    expandedKeys,
    filterTreeNode,
    height,
    icon,
    loadData,
    loadedKeys,
    multiple,
    selectable,
    selectedKeys,
    showIcon,
    showLine,
    switcherIcon,
    titleRender,
    treeData,
    virtual,
    onCheck,
    onDragEnd,
    onDragEnter,
    onDragLeave,
    onDragOver,
    onDragStart,
    onDrop,
    onExpand,
    onLoad,
    onRightClick,
    onSelect,
    children,
  };

  return <AntdTree {...props}>{children}</AntdTree>;
};
export default Tree;
