import React from "react";
import { Avatar as AntdAvatar } from "antd";
/**
 * @typedef Props
 * @prop {React.CSSProperties} style
 * @prop {string} alt
 * @prop {number} gap
 * @prop {React.ReactNode} icon
 * @prop {"circle" | "square"	} shape
 * @prop {number | "large" | "small" | "default" | { xs: number, sm: number, }	} size
 * @prop {string | React.ReactNode	} src
 * @prop {string} srcSet
//  * @prop {boolean | "true" | "false" } draggable
 * @prop {() => boolean} onError
 * @prop {string} className
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */

/**
 * @param {Props} props
 */

const Avatar = ({
  alt,
  gap,
  icon,
  shape,
  size,
  src,
  srcSet,
  // draggable,
  onError,
  children,
  style,
  className,
}) => {
  const props = {
    alt,
    style,
    gap,
    icon,
    shape,
    size,
    src,
    srcSet,
    // draggable,
    onError,
    children,
    className,
  };

  return <AntdAvatar {...props}>{children}</AntdAvatar>;
};
export default Avatar;
