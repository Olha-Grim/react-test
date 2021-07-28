import React from "react";
import { Input as AntdInput } from "antd";

/**
 *
 * @typedef Props
 * @prop {(visible: boolean) => React.ReactNode} iconRender
 * @prop {boolean} visibilityToggle
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */

const InputPassword = ({ iconRender, visibilityToggle }) => {
  const props = { iconRender, visibilityToggle };

  return <AntdInput.Password {...props} />;
};
export default InputPassword;
