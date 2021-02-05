import React from "react";
export interface TabsItemProps {
    /**选项卡头显示文字 */
    label: any;
    /**对应 defaultActiveKey */
    index?: string;
}
export declare const TabsItem: React.FC<TabsItemProps>;
export default TabsItem;
