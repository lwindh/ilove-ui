var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from "react";
import classNames from "classnames";
import Icon from "../Icon/Icon";
/**
 * Input 输入框 通过鼠标或键盘输入内容，是最基础的表单域的包装。
 *
 * ~~~js
 * // 这样引用
 * import { Input } from 'vikingship'
 * ~~~
 * 支持 HTMLInput 的所有基本属性
 */
export var Input = function (_a) {
    var _b;
    var disabled = _a.disabled, size = _a.size, icon = _a.icon, prepend = _a.prepend, append = _a.append, style = _a.style, props = __rest(_a, ["disabled", "size", "icon", "prepend", "append", "style"]);
    var classes = classNames("lv-input-wrapper", (_b = {},
        _b["input-size-" + size] = size,
        _b["is-disabled"] = disabled,
        _b["input-group"] = prepend || append,
        _b["input-group-append"] = !!append,
        _b["input-group-prepend"] = !!prepend,
        _b));
    var fixControlledValue = function (value) {
        if (typeof value === "undefined" || value === null) {
            return "";
        }
        return value;
    };
    if ("value" in props) {
        delete props.defaultValue;
        props.value = fixControlledValue(props.value);
    }
    return (
    // 根据属性判断是否要添加特定的节点
    React.createElement("div", { className: classes, style: style },
        prepend && React.createElement("div", { className: "lv-input-group-prepend" }, prepend),
        icon && (React.createElement("div", { className: "icon-wrapper" },
            React.createElement(Icon, { icon: icon, title: "title-" + icon }))),
        React.createElement("input", __assign({ className: "lv-input-inner", disabled: disabled }, props)),
        append && React.createElement("div", { className: "lv-input-group-append" }, append)));
};
export default Input;
