import React from "react";
import { Carousel as AntdCarousel } from "antd";
/**
 * @typedef Props
 * @prop {boolean} autoplay
 * @prop {'top' | 'bottom' | 'left' | 'right'} dotPosition
 * @prop {boolean | { className?: string }	} dots
 * @prop {string} easing
 * @prop {"scrollx" | "fade"	} effect
 * @prop {(current:any)=> void	} afterChange
 * @prop {(from:any, to:any) =>void	} beforeChange
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */

/**
 * @param {Props} props
 */
const Carousel = ({
  autoplay,
  dotPosition,
  dots,
  easing,
  effect,
  afterChange,
  beforeChange,
  children,
}) => {
  const props = {
    autoplay,
    dotPosition,
    dots,
    easing,
    effect,
    afterChange,
    beforeChange,
    children,
  };

  return <AntdCarousel {...props}>{children}</AntdCarousel>;
};
export default Carousel;
