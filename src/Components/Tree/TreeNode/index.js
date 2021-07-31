import React from "react";
import { Tree as AntdTree } from "antd";
/**
 *
 * @typedef Props
 * @prop {boolean} checkable
 * @prop {boolean} disableCheckbox
 * @prop {boolean} disabled
 * @prop {React.ReactNode | ((props:any) => React.ReactNode)	} icon
 * @prop {boolean} isLeaf
 * @prop {string} key
 * @prop {boolean} selectable
 * @prop {React.ReactNode} title
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */
const TreeNode = ({
  checkable,
  title,
  key,
  selectable,
  disableCheckbox,
  disabled,
  icon,
  isLeaf,
}) => {
  const props = {
    checkable,
    title,
    key,
    selectable,
    disableCheckbox,
    disabled,
    icon,
    isLeaf,
  };

  return <AntdTree.TreeNode {...props} />;
};
export default TreeNode;
