import React, { useContext } from "react";
import classNames from "classnames";
import { tabsContext } from "./Tabs";
export interface TabsItemProps {
  /**选项卡头显示文字 */
  label: any;
  /**对应 defaultActiveKey */
  index?: string;
}

export const TabsItem: React.FC<TabsItemProps> = ({ label, index }) => {
  const context = useContext(tabsContext);
  const classes = classNames("tabsItem", {
    "is-active": context.key === index,
  });
  const handleClick = () => {
    if (context.onSelect && typeof index === "string") {
      context.onSelect(index);
    }
  };
  return (
    <div className={classes} onClick={handleClick}>
      {label}
    </div>
  );
};

TabsItem.displayName = "TabsItem";
export default TabsItem;
