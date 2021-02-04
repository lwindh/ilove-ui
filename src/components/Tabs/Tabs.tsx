import React, { useState, createContext } from "react";
import classNames from "classnames";
import { TabsItemProps } from "./TabsItem";

export interface TabsProps {
  className?: string;
  /**当前激活 tab 面板的 key，默认为0 */
  defaultActiveKey?: string;
  /**页签的基本样式，可选 line、card 类型 */
  type: "line" | "card";
  /**点击 Tab 触发的回调函数 */
  onSelect?: (selectKey: string) => void;
}

interface ITabsContext {
  key: string;
  onSelect?: (selectKey: string) => void;
}

export const tabsContext = createContext<ITabsContext>({ key: "0" });
/**
 * 选项卡切换组件。 提供平级的区域将大块内容进行收纳和展现，保持界面整洁。
 * ~~~js
 * import { Tabs } from 'vikingship'
 * ~~~
 */
export const Tabs: React.FC<TabsProps> = ({
  defaultActiveKey,
  type,
  className,
  children,
  onSelect,
}) => {
  const classes = classNames("tabs", className, {
    [`tabs-${type}`]: type,
  });
  const [active, setActive] = useState(defaultActiveKey);
  const handleClick = (index: string) => {
    setActive(index);
    if (onSelect) {
      onSelect(index);
    }
  };
  const tabsItemContext: ITabsContext = {
    key: active ? active : "0",
    onSelect: handleClick,
  };
  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      const childElement = child as React.FunctionComponentElement<
        TabsItemProps
      >;
      const { displayName } = childElement.type;
      if (displayName === "TabsItem") {
        return React.cloneElement(childElement, {
            index: index.toString(),
        });
      } else {
        console.error("Waring: Tabs has a child which is not a TabsItem");
      }
    });
  };

  const renderTabContent = () => {
    return React.Children.map(children, (child, index) => {
      if (index.toString() === active) return child?.props?.children;
    });
  };
  return (
    <>
      <div className={classes} data-testid="test-tabs">
        <tabsContext.Provider value={tabsItemContext}>
          {renderChildren()}
        </tabsContext.Provider>
      </div>
      <div className="tab_content">{renderTabContent()}</div>
    </>
  );
};

Tabs.defaultProps = {
  defaultActiveKey: "0",
  type: "line",
};

Tabs.displayName = "Tabs";
export default Tabs;
