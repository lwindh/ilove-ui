import React from "react";
/**
 * 在操作需要较长时间才能完成时，为用户显示该操作的当前进度和状态。
 * ~~~js
 * import { Progress } from 'ilove-ui'
 * ~~~
 */
var Progress = function (_a) {
    var percent = _a.percent, strokeHeight = _a.strokeHeight, showText = _a.showText, styles = _a.styles, theme = _a.theme;
    return (React.createElement("div", { className: "lv-progress-bar", style: styles, "data-testid": "test-progress" },
        React.createElement("div", { className: "lv-progress-bar-outer", style: { height: strokeHeight + "px" } },
            React.createElement("div", { className: "lv-progress-bar-inner color-" + theme, style: { width: percent + "%" } }, showText && React.createElement("span", { className: "inner-text" }, percent + "%")))));
};
Progress.defaultProps = {
    strokeHeight: 15,
    showText: true,
    theme: "primary",
};
export default Progress;
