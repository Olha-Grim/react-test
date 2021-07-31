import React from "react";
import { ConfigProvider as AntdConfigProvider } from "antd";
import { ValidateMessages } from "rc-field-form/lib/interface";
import { Locale } from "rc-picker/lib/interface";
/**
 * @typedef Props
 * @prop {boolean} autoInsertSpaceInButton
 * @prop {"small" | "middle" | "large"} componentSize
 * @prop {{ nonce: string }} csp
 * @prop {"ltr" | "rtl"} direction
 * @prop {boolean | undefined} dropdownMatchSelectWidth
 * @prop {{ validateMessages?: ValidateMessages, requiredMark?: boolean | "optional" } } form
 * @prop {(triggerNode: HTMLElement )=>HTMLElement	} getPopupContainer
 * @prop {() => HTMLElement	} getTargetContainer
 * @prop {string} iconPrefixCls
 * @prop {{ autoComplete?: string }} input
 * @prop {Locale | undefined} locale
 * @prop {{ ghost: boolean }	} pageHeader
 * @prop {string} prefixCls
 * @prop {(componentName: string | undefined) => React.ReactNode	} renderEmpty
 * @prop {{ size: "small" | "middle" | "large" | number }	} space
 * @prop {boolean} virtual
 * @prop {JSX.Element} children
 * @return {JSX.Element}
 * @constructor
 */

/**
 * @param {Props} props
 */

const ConfigProvider = ({
  autoInsertSpaceInButton,
  componentSize,
  csp,
  direction,
  dropdownMatchSelectWidth,
  form,
  getPopupContainer,
  iconPrefixCls,
  input,
  locale,
  pageHeader,
  prefixCls,
  renderEmpty,
  space,
  virtual,
  children,
}) => {
  const props = {
    autoInsertSpaceInButton,
    componentSize,
    csp,
    direction,
    dropdownMatchSelectWidth,
    form,
    getPopupContainer,
    iconPrefixCls,
    input,
    locale,
    pageHeader,
    prefixCls,
    renderEmpty,
    space,
    virtual,
    children,
  };

  return <AntdConfigProvider {...props}>{children}</AntdConfigProvider>;
};
export default ConfigProvider;
