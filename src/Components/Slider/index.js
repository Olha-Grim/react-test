import React from "react";
import { Slider as AntdSlider } from "antd";
import { RangeProps } from "rc-slider/lib/Range";
import { SliderMarks } from "antd/lib/slider";
import { TooltipPlacement } from "antd/lib/tooltip";

/**
 *
 * @typedef Props
 * @prop {boolean} disabled
 * @prop {boolean} dots
 * @prop {(triggerNode: HTMLElement) => HTMLElement} getTooltipPopupContainer
 * @prop {boolean} included
 * @prop {SliderMarks} marks
 * @prop {number} max
 * @prop {number} min
 * @prop {true |  RangeProps} range
 * @prop {boolean} reverse
 * @prop {number | null} step
 * @prop {((value?: number | undefined) => React.ReactNode) | null | undefined} tipFormatter
 * @prop {TooltipPlacement | undefined} tooltipPlacement
 * @prop {boolean} tooltipVisible
 * @prop {[number, number] | undefined} value
 * @prop {boolean} vertical
 * @prop {(value: [number, number] | undefined) => void} onAfterChange
 * @prop {(value: [number, number] | undefined) => void} onChange
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */

const Slider = ({
  disabled,
  dots,
  getTooltipPopupContainer,
  included,
  marks,
  max,
  min,
  range,
  reverse,
  step,
  tipFormatter,
  tooltipPlacement,
  tooltipVisible,
  value,
  vertical,
  onAfterChange,
  onChange,
  children,
}) => {
  const props = {
    disabled,
    dots,
    getTooltipPopupContainer,
    included,
    marks,
    max,
    min,
    range,
    reverse,
    step,
    tipFormatter,
    tooltipPlacement,
    tooltipVisible,
    value,
    vertical,
    onAfterChange,
    onChange,
    children,
  };

  return <AntdSlider {...props}>{children}</AntdSlider>;
};
export default Slider;
