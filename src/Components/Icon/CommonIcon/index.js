import React from "react";
import Icon from "@ant-design/icons";
import { CustomIconComponentProps } from "@ant-design/icons/lib/components/Icon";

/**
 *
 * @typedef Props
 * @prop {string} className
 * @prop {React.ComponentType<CustomIconComponentProps | React.SVGProps<SVGSVGElement>> | undefined} component
 * @prop {number} rotate
 * @prop {boolean} spin
 * @prop {React.CSSProperties} style
 * @prop {string} twoToneColor
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */

const CommonIcon = ({
  className,
  rotate,
  spin,
  style,
  twoToneColor,
  component,
}) => {
  const props = { className, rotate, spin, style, twoToneColor, component };

  return <Icon {...props} />;
};
export default CommonIcon;
