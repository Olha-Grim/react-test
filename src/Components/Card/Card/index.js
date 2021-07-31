import React from "react";
import { Card as AntdCard } from "antd";
/**
 * @typedef Props
 * @prop {string} className
 * @prop {Array<React.ReactNode>	} actions
 * @prop {string} activeTabKey
 * @prop {React.CSSProperties} bodyStyle
 * @prop {boolean} bordered
 * @prop {React.ReactNode} cover
 * @prop {string} defaultActiveTabKey
 * @prop {React.ReactNode} extra
 * @prop {React.CSSProperties} headStyle
 * @prop {boolean} hoverable
 * @prop {boolean} loading
 * @prop {"default" | "small"	} size
 * @prop {React.ReactNode} tabBarExtraContent
 * @prop {Array<{key: string, tab: React.ReactNode}>	} tabList
 * @prop {any} tabProps
 * @prop {React.ReactNode} title
 * @prop {"inner" | undefined} type
 * @prop {React.CSSProperties} style
 * @prop {(key: any) => void} onTabChange
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */

/**
 * @param {Props} props
 */

const Card = ({
  children,
  className,
  actions,
  activeTabKey,
  bodyStyle,
  bordered,
  cover,
  defaultActiveTabKey,
  extra,
  headStyle,
  hoverable,
  loading,
  size,
  tabBarExtraContent,
  tabList,
  tabProps,
  title,
  type,
  onTabChange,
  style,
}) => {
  const props = {
    children,
    className,
    actions,
    activeTabKey,
    bodyStyle,
    bordered,
    cover,
    defaultActiveTabKey,
    extra,
    headStyle,
    hoverable,
    loading,
    size,
    tabBarExtraContent,
    tabList,
    tabProps,
    title,
    type,
    onTabChange,
    style,
  };

  return <AntdCard {...props}>{children}</AntdCard>;
};
export default Card;
