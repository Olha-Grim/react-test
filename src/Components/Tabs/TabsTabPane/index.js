import React from "react";
import { Tabs as AntdTabs } from "antd";

/**
 *
 * @typedef Props
 * @prop {React.ReactNode} closeIcon
 * @prop {boolean} forceRender
 * @prop {string} key
 * @prop {React.ReactNode} tab
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */
const TabsTabPane = ({ closeIcon, forceRender, key, tab, children }) => {
  const props = { closeIcon, forceRender, key, tab, children };

  return <AntdTabs.TabPane {...props}>{children}</AntdTabs.TabPane>;
};
export default TabsTabPane;
