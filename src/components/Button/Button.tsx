import React, { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";
import classNames from "classnames";

interface IBaseButtonProps {
  className?: string;
  /**设置 Button 的禁用*/
  disabled?: boolean;
  /**设置 Button 的尺寸*/
  size?: string;
  /**设置 Button 的类型*/
  btnType?: string;
  /**设置 Button 的形状*/
  shape?: string;
  children: React.ReactNode;
  /**设置 超链接Button 的链接地址*/
  href?: string;
}

type NativeButtonProps = IBaseButtonProps & ButtonHTMLAttributes<HTMLElement>;
type AnchorButtonProps = IBaseButtonProps & AnchorHTMLAttributes<HTMLElement>;
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;
/**
 * 页面中最常用的的按钮元素，适合于完成特定的交互
 * ### 引用方法
 * 
 * ~~~js
 * import { Button } from 'ilove-ui'
 * ~~~
 */
export const Button: React.FC<ButtonProps> = (props) => {
  const {
    btnType,
    className,
    disabled,
    size,
    children,
    href,
    shape,
    ...rest
  } = props;

  //btn, btn-lg, btn-primary
  const classes = classNames("btn", className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    [`btn-${shape}`]: shape,
    disabled: btnType === "link" && disabled,
  });

  if (btnType === "link" && href) {
    return (
      <a className={classes} href={href} {...rest}>
        {children}
      </a>
    );
  } else {
    return (
      <button className={classes} disabled={disabled} {...rest}>
        {children}
      </button>
    );
  }
};

Button.defaultProps = {
  disabled: false,
  btnType: "default",
};

export default Button;
