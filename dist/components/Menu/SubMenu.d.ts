import React from "react";
export interface ISubMenuProps {
    /**超级菜单项的索引值 */
    index?: string;
    /**超级菜单项的标题 */
    title: string;
    className?: string;
}
declare const SubMenu: React.FC<ISubMenuProps>;
export default SubMenu;
