import React from "react";
import { Avatar as AntdAvatar } from "antd";
/**
 * @typedef Props
 * @prop {number} maxCount
 * @prop {"top" | "bottom"	} maxPopoverPlacement
 * @prop {React.CSSProperties} maxStyle
 * @prop {number | "large" | "small" | "default" | { xs: number, sm: number,}	} size
 * @prop {JSX.Element} children
 * @returns {JSX.Element}
 * @constructor
 */

/**
 * @param {Props} props
 */

const AvatarGroup = ({
  maxCount,
  maxPopoverPlacement,
  maxStyle,
  size,
  children,
}) => {
  const props = { maxCount, maxPopoverPlacement, maxStyle, size, children };

  return <AntdAvatar.Group {...props}>{children}</AntdAvatar.Group>;
};
export default AvatarGroup;
