import React from "react";
import { Popover as AntdPopover } from "antd";
/**
 *
 * @typedef Props
 * @prop {React.ReactNode |( () => React.ReactNode) 	}  content
 * @prop {React.ReactNode | (() => React.ReactNode )	}  title
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */
const Popover = ({ content, title, children }) => {
  const props = { content, title, children };

  return <AntdPopover {...props}>{children}</AntdPopover>;
};
export default Popover;
