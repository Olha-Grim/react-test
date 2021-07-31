import React from "react";
import { Steps as AntdSteps } from "antd";

/**
 *
 * @typedef Props
 * @prop {React.ReactNode} description
 * @prop {boolean} disabled
 * @prop {React.ReactNode} icon
 * @prop {"error" | "wait" | "process" | "finish" | undefined} status
 * @prop {React.ReactNode} subTitle
 * @prop {React.ReactNode} title
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */

const Step = ({
  description,
  disabled,
  icon,
  status,
  subTitle,
  title,
  children
}) => {
  const props = {
    description,
    disabled,
    icon,
    status,
    subTitle,
    title,
    children
  };
  // console.log(props, 'steps')

  return <AntdSteps.Step {...props}>{children}</AntdSteps.Step>;
};
export default Step;
