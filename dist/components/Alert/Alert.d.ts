import React from "react";
declare type AlertTypes = "success" | "info" | "error" | "warning";
export interface AlertProps {
    className?: string;
    /**标题 */
    message: string;
    /**描述 */
    description?: string;
    /**类型 四种可选 */
    type?: AlertTypes;
    /**是否显示关闭图标 */
    closable?: boolean;
    /**关闭alert时触发的事件 */
    onClose?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
/**
 * 用于页面中展示重要的提示信息。 点击右侧的叉提示自动消失
 * ### 引用方法
 *
 * ~~~js
 * import { Alert } from 'vikingship'
 * ~~~
 */
export declare const Alert: React.FC<AlertProps>;
export default Alert;
