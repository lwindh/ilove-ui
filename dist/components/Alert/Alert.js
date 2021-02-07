import React from "react";
import classNames from "classnames";
import Icon from "../Icon";
/**
 * 用于页面中展示重要的提示信息。 点击右侧的叉提示自动消失
 * ### 引用方法
 *
 * ~~~js
 * import { Alert } from 'ilove-ui'
 * ~~~
 */
export var Alert = function (_a) {
    var _b;
    var message = _a.message, description = _a.description, type = _a.type, closable = _a.closable, className = _a.className, onClose = _a.onClose;
    var _c = React.useState(false), closed = _c[0], setClosed = _c[1];
    var classes = classNames("alert", className, (_b = {},
        _b["alert-" + type] = type,
        _b["alert-motion-leave"] = closed,
        _b["alert-motion-leave-active"] = closed,
        _b));
    var handleClose = function (e) {
        setClosed(true);
        onClose === null || onClose === void 0 ? void 0 : onClose(e);
    };
    var renderCloseIcon = function () {
        return closable ? (React.createElement("button", { type: "button", onClick: handleClose, className: "alert-close-icon", tabIndex: 0 },
            React.createElement(Icon, { icon: "times", size: "1x", theme: "light" }))) : null;
    };
    return (React.createElement("div", { "data-show": !closed, "data-testid": "test-alert", className: classes, role: "alert" },
        React.createElement("div", { className: "alert-content" },
            React.createElement("div", { className: "alert-message" }, message),
            React.createElement("div", { className: "alert-description" }, description)),
        renderCloseIcon()));
};
Alert.defaultProps = {
    type: "info",
    closable: true,
};
Alert.displayName = 'Alert';
export default Alert;
