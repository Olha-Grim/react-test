import React from "react";
import { Badge as AntdBadge } from "antd";
/**
 *
 * @typedef Props
 * @prop {string} color
 * @prop {"start" | "end"	} placement
 * @prop {React.ReactNode} text
 * @prop {JSX.Element} children
 * @returns {JSX.Element}
 * @constructor
 */

/**
 * @param {Props} props
 */

const BadgeRibbon = ({ color, children, placement, text }) => {
  const props = { color, placement, text, children };

  return <AntdBadge.Ribbon {...props}>{children}</AntdBadge.Ribbon>;
};
export default BadgeRibbon;
