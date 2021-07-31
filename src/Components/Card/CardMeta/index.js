import React from "react";
import { Card as AntdCard } from "antd";
/**
 * @typedef Props
 * @prop {React.ReactNode} avatar
 * @prop {string} className
 * @prop {React.ReactNode} description
 * @prop {React.CSSProperties} style
 * @prop {React.ReactNode} title
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */

/**
 * @param {Props} props
 */

const CardMeta = ({
  children,
  avatar,
  className,
  description,
  style,
  title,
}) => {
  const props = { children, avatar, className, description, style, title };

  return <AntdCard.Meta {...props}>{children}</AntdCard.Meta>;
};
export default CardMeta;
