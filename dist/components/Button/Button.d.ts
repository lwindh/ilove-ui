import React, { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";
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
declare type NativeButtonProps = IBaseButtonProps & ButtonHTMLAttributes<HTMLElement>;
declare type AnchorButtonProps = IBaseButtonProps & AnchorHTMLAttributes<HTMLElement>;
export declare type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;
/**
 * 页面中最常用的的按钮元素，适合于完成特定的交互
 * ### 引用方法
 *
 * ~~~js
 * import { Button } from 'vikingship'
 * ~~~
 */
export declare const Button: React.FC<ButtonProps>;
export default Button;
