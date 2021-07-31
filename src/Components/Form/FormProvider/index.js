import React from "react";
import { Form as AntdForm } from "antd";
/**
 *
 * @typedef Props
 * @prop {(formName: string, info: { changedFields: any, forms: any })=> void	} onFormChange
 * @prop {(formName: string, info: { values:any, forms: any })=> void	} onFormFinish
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */

const FormProvider = ({ onFormChange, onFormFinish, children }) => {
  const props = {
    onFormChange,
    onFormFinish,
    children,
  };

  return <AntdForm.Provider {...props}>{children}</AntdForm.Provider>;
};
export default FormProvider;
