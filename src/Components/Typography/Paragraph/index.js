import React from "react";
import { Typography as AntdTypography } from "antd";
import {
  CopyConfig,
  EditConfig,
  EllipsisConfig,
} from "antd/lib/typography/Base";

/**
 * @typedef Props
 * @prop {boolean} code
 * @prop {boolean | CopyConfig} copyable
 * @prop {boolean} delete
 * @prop {boolean} disabled
 * @prop {boolean | EditConfig} editable
 * @prop {boolean | Omit<EllipsisConfig, 'expandable' | 'rows' | 'onExpand'>} ellipsis
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
 */

const Paragraph = ({
  code,
  copyable,
  disabled,
  // delete,
  editable,
  ellipsis,
  mark,
  onClick,
  strong,
  italic,
  type,
  underline,
  className,
  children,
}) => {
  const props = {
    code,
    copyable,
    disabled,
    // delete,
    editable,
    ellipsis,
    mark,
    onClick,
    strong,
    italic,
    type,
    underline,
    className,
    children,
  };

  return (
    <AntdTypography.Paragraph {...props}>{children}</AntdTypography.Paragraph>
  );
};
export default Paragraph;
