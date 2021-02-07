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
 * import { Progress } from 'ilove-ui'
 * ~~~
 */
const Progress: React.FC<ProgressProps> = ({
  percent,
  strokeHeight,
  showText,
  styles,
  theme,
}) => {
  return (
    <div className="lv-progress-bar" style={styles} data-testid="test-progress">
      <div
        className="lv-progress-bar-outer"
        style={{ height: `${strokeHeight}px` }}
      >
        <div
          className={`lv-progress-bar-inner color-${theme}`}
          style={{ width: `${percent}%` }}
        >
          {showText && <span className="inner-text">{`${percent}%`}</span>}
        </div>
      </div>
    </div>
  );
};

Progress.defaultProps = {
  strokeHeight: 15,
  showText: true,
  theme: "primary",
};

export default Progress;
