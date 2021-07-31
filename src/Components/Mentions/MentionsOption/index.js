import React from "react";
import { Mentions as AntdMentions } from "antd";
/**
 *
 * @typedef Props
 * @prop {string} value
 * @prop {React.ReactNode} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */

const MentionsOption = ({ value, children }) => {
  const props = { value, children };

  return <AntdMentions.Option {...props}>{children}</AntdMentions.Option>;
};
export default MentionsOption;
