import React from "react";
import { Result as AntdResult } from "antd";
/**
 *
 * @typedef Props
 * @prop {React.ReactNode} extra
 * @prop {React.ReactNode} icon
 * @prop {"success" | "error" | "info" | "warning" | 404 | 403 | 500	} status
 * @prop {React.ReactNode} subTitle
 * @prop {React.ReactNode} title
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */
const Result = ({ extra, icon, status, subTitle, title }) => {
  const props = { extra, icon, status, subTitle, title };

  return <AntdResult {...props} />;
};
export default Result;
