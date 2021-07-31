import React from "react";
import { Form as AntdForm } from "antd";
import { Options } from "scroll-into-view-if-needed";
import { ValidateMessages, FieldData, ValidateErrorEntity} from "rc-field-form/lib/interface";

/**
 * @typedef Props
 * @prop {boolean} colon
 * @prop {React.ComponentType | false} component
 * @prop {FieldData[]} fields
 * @prop {any} form
 * @prop {object} initialValues
 * @prop {"left" | "right"} labelAlign
 * @prop {object} labelCol
 * @prop {"horizontal" | "vertical" | "inline"} layout
 * @prop {string} name
 * @prop {boolean} preserve
 * @prop {boolean | 'optional'} requiredMark
 * @prop {boolean | Options} scrollToFirstError
 * @prop {"small" | "middle" | "large"} size
 * @prop {ValidateMessages} validateMessages
 * @prop {string | string[]} validateTrigger
 * @prop {object} wrapperCol
 * @prop {(changedFields: FieldData[], allFields: FieldData[]) => void} onFieldsChange
 * @prop {(values:any )=>void	} onFinish
 * @prop {(errorInfo: ValidateErrorEntity<any>) => void} onFinishFailed
 * @prop {(changedValues:any, allValues:any)=>void} onValuesChange
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */

const Form = ({
  colon,
  children,
  component,
  fields,
  form,
  initialValues,
  labelAlign,
  labelCol,
  layout,
  name,
  preserve,
  requiredMark,
  scrollToFirstError,
  size,
  validateMessages,
  validateTrigger,
  wrapperCol,
  onFieldsChange,
  onFinishFailed,
  onValuesChange,
}) => {
  const props = {
    colon,
    children,
    component,
    fields,
    form,
    initialValues,
    labelAlign,
    labelCol,
    layout,
    name,
    preserve,
    requiredMark,
    scrollToFirstError,
    size,
    validateMessages,
    validateTrigger,
    wrapperCol,
    onFieldsChange,
    onFinishFailed,
    onValuesChange,
  };

  return <AntdForm {...props}>{children}</AntdForm>;
};
export default Form;
