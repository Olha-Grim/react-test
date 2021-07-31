import React from "react";
import { Skeleton as AntdSkeleton } from "antd";
import { SkeletonAvatarProps} from "antd/lib/skeleton/Skeleton";
import { SkeletonTitleProps} from "antd/lib/skeleton/Title";
import { SkeletonParagraphProps} from "antd/lib/skeleton/Paragraph";

/**
 *
 * @typedef SkeletonProps
 * @prop {boolean} active
 * @prop {boolean | SkeletonAvatarProps} avatar
 * @prop {boolean} loading
 * @prop {boolean | SkeletonParagraphProps} paragraph
 * @prop {boolean} round
 * @prop {boolean | SkeletonTitleProps} title
 * @prop {JSX.Element} children
 * @return {JSX.Element} 
 * @constructor
 */
/**
 * @param {SkeletonProps} props
 */


const Skeleton = ({
  active,
  avatar,
  loading,
  paragraph,
  round,
  title,
  children,
}) => {
  const props = { active, avatar, loading, paragraph, round, title, children };

  return <AntdSkeleton {...props}>{children}</AntdSkeleton>;
};
export default Skeleton;
