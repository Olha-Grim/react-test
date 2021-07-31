import React from "react";
import { Comment as AntdComment } from "antd";
/**
 *
 * @typedef Props
 * @prop {Array<React.ReactNode>	} actions
 * @prop {React.ReactNode} author
 * @prop {React.ReactNode} avatar
 * @prop {React.ReactNode} children
 * @prop {React.ReactNode} content
 * @prop {React.ReactNode} datetime
 * @return {JSX.Element}
 * @constructor
 */

/**
 * @param {Props} props
 */

const Comment = ({ actions, author, avatar, children, content, datetime }) => {
  const props = { actions, author, avatar, children, content, datetime };

  return <AntdComment {...props} />;
};
export default Comment;
