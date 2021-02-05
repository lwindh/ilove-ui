import React from "react";
import { ThemeProps } from "../Icon/Icon";
export interface ProgressProps {
    /**百分比 */
    percent: number;
    /**进度条的高度 */
    strokeHeight?: number;
    /**是否显示进度数值 */
    showText?: boolean;
    styles?: React.CSSProperties;
    /**进度条的色彩 */
    theme?: ThemeProps;
}
/**
 * 在操作需要较长时间才能完成时，为用户显示该操作的当前进度和状态。
 * ~~~js
 * import { Progress } from 'vikingship'
 * ~~~
 */
declare const Progress: React.FC<ProgressProps>;
export default Progress;
