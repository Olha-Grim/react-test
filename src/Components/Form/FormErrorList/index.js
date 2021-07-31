import React from "react";
import { Form as AntdForm } from "antd";
import { NamePath} from 'rc-field-form/lib/interface';
import { Field } from 'rc-field-form';
/**
 * @typedef Props
 * @prop {(fields: Field[], operation: { add:any, remove:any, move:any }, meta: { errors:any }) => React.ReactNode	} children
 * @prop { any[]} initialValue
 * @prop {NamePath} name
 * @prop {{ validator:any, message:string }[]	} rules
 * @prop {React.ReactNode[]} errors
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

const Form = ({ children, initialValue, name, rules, errors }) => {
  const props = {
    children,
    initialValue,
    name,
    rules,
    errors
  };

  return <AntdForm.ErrorList {...props}>{children}</AntdForm.ErrorList>;
};
export default Form;
