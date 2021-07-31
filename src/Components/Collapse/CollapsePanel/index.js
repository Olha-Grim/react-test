import React from "react";
import { Collapse } from "antd";

/**
 * @typedef Props
 * @prop {"header" | "disabled"} collapsible
 * @prop {React.ReactNode} extra
 * @prop {boolean} forceRender
 * @prop {React.ReactNode} header
 * @prop {string | number} key
 * @prop {boolean} showArrow
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */

const CollapsePanel = ({
  collapsible,
  extra,
  forceRender,
  header,
  key,
  showArrow,
  children,
}) => {
  const props = {
    collapsible,
    extra,
    forceRender,
    header,
    key,
    showArrow,
    children,
  };

  return <Collapse.Panel {...props}>{children}</Collapse.Panel>;
};
export default CollapsePanel;
