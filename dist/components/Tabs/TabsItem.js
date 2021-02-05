import React, { useContext } from "react";
import classNames from "classnames";
import { tabsContext } from "./Tabs";
export var TabsItem = function (_a) {
    var label = _a.label, index = _a.index;
    var context = useContext(tabsContext);
    var classes = classNames("tabsItem", {
        "is-active": context.key === index,
    });
    var handleClick = function () {
        if (context.onSelect && typeof index === "string") {
            context.onSelect(index);
        }
    };
    return (React.createElement("div", { className: classes, onClick: handleClick }, label));
};
TabsItem.displayName = "TabsItem";
export default TabsItem;
