import React from "react";
import { Tabs as AntdTabs } from "antd";

/**
 *
 * @typedef Props
 * @prop {string} activeKey
 * @prop {React.ReactNode} addIcon
 * @prop {boolean | { inkBar: boolean, tabPane: boolean }	} animated
 * @prop {boolean} centered
 * @prop {string} defaultActiveKey
 * @prop {boolean} hideAdd
 * @prop {React.ReactNode} moreIcon
 * @prop {(props: any, DefaultTabBar: React.ComponentClass) => React.ReactElement} renderTabBar
 * @prop {"large" | "default" | "small"	} size
 * @prop {React.ReactNode | {left?: React.ReactNode, right?: React.ReactNode}	} tabBarExtraContent
 * @prop {number} tabBarGutter
 * @prop {object} tabBarStyle
 * @prop {"top" | "right" | "bottom" | "left"	} tabPosition
 * @prop {'line' | 'card' | 'editable-card'	} type
 * @prop {(activeKey: any)=>void} onChange
 * @prop {(e: React.MouseEvent | React.KeyboardEvent | string, action: 'add' | 'remove') => void} onEdit
 * @prop {(key: string, event: MouseEvent)=>void	} onTabClick
 * @prop {( direction: "left" | "right" | "top" | "bottom" )=> void	} onTabScroll
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */
const Tabs = ({ children }) => {
  const props = {};

  return <AntdTabs {...props}>{children}</AntdTabs>;
};
export default Tabs;
