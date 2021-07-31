import React from "react";
import { Form as AntdForm } from "antd";
import { NamePath } from "rc-field-form/lib/interface";
import { FormListOperation, FormListFieldData} from "antd/lib/form/FormList";
import { ValidatorRule } from "rc-field-form/lib/interface";


/**
 * @typedef Props
 * @prop {(fields: FormListFieldData[], operation: FormListOperation, meta: { errors: React.ReactNode[] }) => React.ReactNode} children
 * @prop { any[]} initialValue
 * @prop {NamePath} name
 * @prop {ValidatorRule[]} rules
 * * operation - Some operator functions in render form of Form.List.
 * @prop {(defaultValue?: any, insertIndex?: number) => void	} add
 * @prop {(from: number, to: number) => void	} move
 * @prop {(index: number | number[]) => void	} remove
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */
/**
 * @param {Props} props
 */

const FormList = ({ children, initialValue, name, rules }) => {
  const props = {
    children,
    initialValue,
    name,
    rules,
  };

  return <AntdForm.List {...props}>{children}</AntdForm.List>;
};
export default FormList;
