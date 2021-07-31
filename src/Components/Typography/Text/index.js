import React from "react";
import { Typography as AntdTypography } from "antd";
import { CopyConfig, EditConfig } from "antd/lib/typography/Base";

/**
 * @typedef Props
 * @prop {boolean} code
 * @prop { boolean | CopyConfig} copyable
 * @prop {boolean} delete
 * @prop {boolean} disabled
 * @prop {boolean | EditConfig} editable
 * @prop {boolean} ellipsis
 * @prop {boolean} keyboard
 * @prop {boolean} mark
 * @prop {(e?: React.MouseEvent<HTMLDivElement, MouseEvent> | undefined) => void} onClick
 * @prop {boolean} strong
 * @prop {boolean} italic
 * @prop {"secondary" | "success" | "warning" | "danger"} type
 * @prop {boolean} underline
 * @prop {string} className
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */

/**
 * @param {Props} props
 *
 */

const Text = ({
  code,
  className,
  copyable,
  disabled,
  // delete,
  editable,
  ellipsis,
  keyboard,
  mark,
  onClick,
  strong,
  italic,
  type,
  underline,
  children,
}) => {
  const props = {
    code,
    className,
    copyable,
    disabled,
    // delete,
    editable,
    ellipsis,
    keyboard,
    mark,
    onClick,
    strong,
    italic,
    type,
    underline,
    children,
  };
  return <AntdTypography.Text {...props}>{children}</AntdTypography.Text>;
};
export default Text;
