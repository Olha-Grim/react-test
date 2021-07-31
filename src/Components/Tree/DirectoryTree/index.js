import React from "react";
import { Tree as AntdTree } from "antd";
/**
 * 
 * @typedef Props
 * @prop {false | 'click' | 'doubleClick' | undefined} expandAction
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */
const DirectoryTree = ({ expandAction }) => {
  const props = { expandAction };

  return <AntdTree.DirectoryTree {...props} />;
};
export default DirectoryTree;
