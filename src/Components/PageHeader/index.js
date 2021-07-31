import React from "react";
import { BreadcrumbInterface } from "antd/lib/breadcrumb/Breadcrumb";
import { TagType } from "antd";
import { BreadcrumbProps, PageHeaderProps, PageHeader as AntdPageHeader } from "antd";
import { AvatarProps } from "antd/lib/avatar/avatar";

/**
 *
 * @typedef Prop
 * @prop {AvatarProps} avatar
 * @prop {React.ReactNode | boolean} backIcon
 * @prop {(props: PageHeaderProps, defaultDom: React.ReactNode) => React.ReactNode} breadcrumbRender
 * @prop {BreadcrumbProps | React.ReactElement<BreadcrumbInterface, string | React.JSXElementConstructor<any>> | undefined} breadcrumb
 * @prop {React.ReactNode} extra
 * @prop {React.ReactNode} footer
 * @prop {boolean} ghost
 * @prop {React.ReactNode} subTitle
 * @prop {React.ReactElement<TagType, string | React.JSXElementConstructor<any>>[]} tags
 * @prop {React.ReactNode} title
 * @prop {() => void} onBack
 * @return {JSX.Element}
 * @constructor
 */

/**
 * @param {Prop} props
 */

const PageHeader = ({
  avatar,
  backIcon,
  breadcrumbRender,
  breadcrumb,
  extra,
  footer,
  ghost,
  subTitle,
  tags,
  title,
  onBack,
}) => {
  const props = {
    avatar,
    backIcon,
    breadcrumbRender,
    breadcrumb,
    extra,
    footer,
    ghost,
    subTitle,
    tags,
    title,
    onBack,
  };
  return <AntdPageHeader {...props} />;
};

export default PageHeader;
