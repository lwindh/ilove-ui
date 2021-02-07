import React from "react";
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
export declare const tabsContext: React.Context<ITabsContext>;
/**
 * 选项卡切换组件。 提供平级的区域将大块内容进行收纳和展现，保持界面整洁。
 * ~~~js
 * import { Tabs } from 'ilove-ui'
 * ~~~
 */
export declare const Tabs: React.FC<TabsProps>;
export default Tabs;
