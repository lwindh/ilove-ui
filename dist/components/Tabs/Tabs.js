import React, { useState, createContext } from "react";
import classNames from "classnames";
export var tabsContext = createContext({ key: "0" });
/**
 * 选项卡切换组件。 提供平级的区域将大块内容进行收纳和展现，保持界面整洁。
 * ~~~js
 * import { Tabs } from 'ilove-ui'
 * ~~~
 */
export var Tabs = function (_a) {
    var _b;
    var defaultActiveKey = _a.defaultActiveKey, type = _a.type, className = _a.className, children = _a.children, onSelect = _a.onSelect;
    var classes = classNames("tabs", className, (_b = {},
        _b["tabs-" + type] = type,
        _b));
    var _c = useState(defaultActiveKey), active = _c[0], setActive = _c[1];
    var handleClick = function (index) {
        setActive(index);
        if (onSelect) {
            onSelect(index);
        }
    };
    var tabsItemContext = {
        key: active ? active : "0",
        onSelect: handleClick,
    };
    var renderChildren = function () {
        return React.Children.map(children, function (child, index) {
            var childElement = child;
            var displayName = childElement.type.displayName;
            if (displayName === "TabsItem") {
                return React.cloneElement(childElement, {
                    index: index.toString(),
                });
            }
            else {
                console.error("Waring: Tabs has a child which is not a TabsItem");
            }
        });
    };
    var renderTabContent = function () {
        return React.Children.map(children, function (child, index) {
            if (index.toString() === active) {
                var childElement = child;
                return childElement.props.children;
            }
        });
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: classes, "data-testid": "test-tabs" },
            React.createElement(tabsContext.Provider, { value: tabsItemContext }, renderChildren())),
        React.createElement("div", { className: "tab_content" }, renderTabContent())));
};
Tabs.defaultProps = {
    defaultActiveKey: "0",
    type: "line",
};
Tabs.displayName = "Tabs";
export default Tabs;
