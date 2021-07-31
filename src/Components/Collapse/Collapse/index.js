import React from "react";
import { Collapse as AntdCollapse } from "antd";
/**
 * @typedef Props
 * @prop {boolean} accordion
 * @prop {Array<string | number> | string | number} activeKey
 * @prop {boolean} bordered
 * @prop {'header' | 'disabled'} collapsible
 * @prop {Array<string | number> | string | number} defaultActiveKey
 * @prop {boolean} destroyInactivePanel
 * @prop {(panelProps:any) => React.ReactNode	} expandIcon
 * @prop {"left" | "right"	} expandIconPosition
 * @prop {boolean} ghost
 * @prop {(key: string | string[])=>void} onChange
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */


const Collapse = ({
  accordion,
  activeKey,
  bordered,
  collapsible,
  defaultActiveKey,
  destroyInactivePanel,
  expandIcon,
  expandIconPosition,
  ghost,
  onChange,
  children,
}) => {
  const props = {
    accordion,
    activeKey,
    bordered,
    collapsible,
    defaultActiveKey,
    destroyInactivePanel,
    expandIcon,
    expandIconPosition,
    ghost,
    onChange,
    children,
  };

  return <AntdCollapse {...props}>{children}</AntdCollapse>;
};
export default Collapse;
