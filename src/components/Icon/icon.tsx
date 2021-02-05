import React from "react";
import classNames from "classnames";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";

export type ThemeProps = "primary"
  | "secondary"
  | "success"
  | "info"
  | "warning"
  | "danger"
  | "light"
  | "dark";

export interface IconProps extends FontAwesomeIconProps {
  /**支持框架主题 根据主题显示不同的颜色 */
  theme?: ThemeProps;
}
/**
 * 提供了一套常用的图标集合 基于 react-fontawesome。
 * 
 * 支持 react-fontawesome的所有属性 可以在这里查询 https://github.com/FortAwesome/react-fontawesome#basic
 * 
 * 支持 fontawesome 所有 free-solid-icons，可以在这里查看所有图标 https://github.com/FortAwesome/react-fontawesome#basic
 * 
 * 更多例子请参见：https://github.com/FortAwesome/react-fontawesome#basic
 * ~~~js
 * import { Icon } from 'vikingship'
 * ~~~
 */
const Icon: React.FC<IconProps> = ({ className, theme, ...restProps }) => {
  // icon-primary
  const classes = classNames("viking-icon", className, {
    [`icon-${theme}`]: theme,
  });
  return <FontAwesomeIcon className={classes} {...restProps} />;
};

Icon.defaultProps = {
  theme: "primary",
};
export default Icon;
