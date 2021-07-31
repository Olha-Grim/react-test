import React from "react";
import { Anchor as AntdAnchor } from "antd";
/**
 * @typedef Props
 * @prop {boolean} affix
 * @prop {number} bounds
 * @prop {() => HTMLElement} getContainer
 * @prop {() => string	} getCurrentAnchor
 * @prop {number} offsetTop
 * @prop {boolean} showInkInFixed
 * @prop {number} targetOffset
 * @prop {(currentActiveLink: string) => void	} onChange
 * @prop {(e: React.MouseEvent<HTMLElement, MouseEvent>, link: { title: React.ReactNode; href: string; }) => void} onClick
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */

/**
 * @param {Props} props
 */

const Anchor = ({
  affix,
  bounds,
  getContainer,
  getCurrentAnchor,
  offsetTop,
  showInkInFixed,
  targetOffset,
  onChange,
  onClick,
  children,
}) => {
  const props = {
    affix,
    bounds,
    getContainer,
    getCurrentAnchor,
    offsetTop,
    showInkInFixed,
    targetOffset,
    onChange,
    onClick,
    children,
  };

  return <AntdAnchor {...props}>{children}</AntdAnchor>;
};
export default Anchor;
