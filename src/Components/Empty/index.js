import React from "react";
import { Empty as AntdEmpty } from "antd";
/**
 * 
 * @typedef Props
 * @prop {React.ReactNode}  description
 * @prop {React.ReactNode}  image
 * @prop {React.CSSProperties}  imageStyle
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */

const Empty = ({ description, image, imageStyle, children }) => {
  const props = {
    description,
    image,
    imageStyle,
    children,
  };

  return <AntdEmpty {...props}>{children}</AntdEmpty>;
};
export default Empty;
