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
 * @prop {boolean | EllipsisConfig} ellipsis
 * @prop {5 | 1 | 2 | 3 | 4 | undefined} level
 * @prop {boolean} mark
 * @prop {(event: React.MouseEvent<HTMLDivElement, MouseEvent> | undefined) => void} onClick
 * @prop {boolean} italic
 * @prop {"secondary" | "success" | "warning" | "danger"} type
 * @prop {boolean | undefined} underline
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */

const Title = ({
  code,
  copyable,
  disabled,
  // delete,
  editable,
  ellipsis,
  level,
  mark,
  onClick,
  italic,
  type,
  underline,
  children,
}) => {
  const props = {
    code,
    copyable,
    disabled,
    // delete,
    editable,
    ellipsis,
    level,
    mark,
    onClick,
    italic,
    type,
    underline,
    children,
  };

  return <AntdTypography.Title {...props}>{children}</AntdTypography.Title>;
};
export default Title;
