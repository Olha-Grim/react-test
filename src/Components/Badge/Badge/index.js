import React from "react";
import { Badge as AntdBadge } from "antd";

/**
 *
 * @typedef Props
 * @prop {string} color
 * @prop {React.ReactNode | number} count
 * @prop {boolean} dot
 * @prop {[number, number]	} offset
 * @prop {number} overflowCount
 * @prop {boolean} showZero
 * @prop {"default" | "small"	} size
 * @prop {"success" | "processing" | "default" | "error" | "warning"	} status
 * @prop {React.ReactNode} text
 * @prop {string} title
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */

/**
 * @param {Props} props
 */
const Badge = ({
  color,
  count,
  dot,
  offset,
  overflowCount,
  showZero,
  size,
  status,
  text,
  title,
  children,
}) => {
  const props = {
    color,
    count,
    dot,
    offset,
    overflowCount,
    showZero,
    size,
    status,
    text,
    title,
    children,
  };

  return <AntdBadge {...props}>{children}</AntdBadge>;
};
export default Badge;
