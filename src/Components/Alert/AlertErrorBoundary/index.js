import React from "react";
import { Alert as AntdAlert } from "antd";
/**
 * @typedef Props
 * @prop {React.ReactNode} description
 * @prop {React.ReactNode} message
 * @returns {JSX.Element}
 * @constructor
 */

/**
 * @param {Props} props
 */


const Alert = ({ description, message }) => {
  const props = {
    description,
    message,
  };

  return <AntdAlert.ErrorBoundary {...props} />;
};
export default Alert;
