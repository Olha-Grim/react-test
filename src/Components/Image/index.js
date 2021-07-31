import React from "react";
import { Image as AntdImage } from "antd";
import { ImagePreviewType } from "rc-image/lib/Image";
/**
 *
 * @typedef Props
 * @prop {string} alt
 * @prop {string} fallback
 * @prop {string | number	} height
 * @prop {React.ReactNode} placeholder
 * @prop {boolean | ImagePreviewType} preview
 * @prop {string} src
 * @prop {string | number	} width
 * @prop {(event: React.SyntheticEvent<HTMLImageElement, Event>) => void	} onError
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */
const Image = ({
  alt,
  fallback,
  height,
  placeholder,
  preview,
  src,
  width,
  onError,
}) => {
  const props = {
    alt,
    fallback,
    height,
    placeholder,
    preview,
    src,
    width,
    onError,
  };

  return <AntdImage {...props} />;
};
export default Image;
