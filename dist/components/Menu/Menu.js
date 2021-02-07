import React, { createContext, useState } from "react";
import classNames from "classnames";
export var MenuContext = createContext({ index: "0" });
/**
 * 为网站提供导航功能的菜单。支持横向纵向两种模式，支持下拉菜单。
 * ~~~js
 * import { Menu } from 'ilove-ui'
 * ~~~
 */
export var Menu = function (_a) {
    var className = _a.className, mode = _a.mode, style = _a.style, children = _a.children, defaultIndex = _a.defaultIndex, defalutOpenSubMenus = _a.defalutOpenSubMenus, onSelect = _a.onSelect;
    var _b = useState(defaultIndex), currentActive = _b[0], setActive = _b[1];
    var classes = classNames("lv-menu", className, {
        "menu-vertical": mode === "vertical",
        'menu-horizontal': mode !== 'vertical',
    });
    var handleClick = function (index) {
        setActive(index);
        if (onSelect) {
            onSelect(index);
        }
    };
    var passedContext = {
        index: currentActive ? currentActive : "0",
        onSelect: handleClick,
        mode: mode,
        defalutOpenSubMenus: defalutOpenSubMenus,
    };
    var renderChildren = function () {
        return React.Children.map(children, function (child, index) {
            var childElement = child;
            var displayName = childElement.type.displayName;
            if (displayName === "MenuItem" || displayName === "SubMenu") {
                return React.cloneElement(childElement, {
                    index: index.toString(),
                });
            }
            else {
                console.error("Waring: Menu has a child which is not a MenuItem");
            }
        });
    };
    return (React.createElement("ul", { className: classes, style: style, "data-testid": "test-menu" },
        React.createElement(MenuContext.Provider, { value: passedContext }, renderChildren())));
};
Menu.defaultProps = {
    defaultIndex: "0",
    mode: "horizontal",
    defalutOpenSubMenus: [],
};
export default Menu;
