import React from "react";
export interface IMenuItemProps {
    /**子菜单项的索引值 */
    index: string;
    /**设置子菜单项的禁用 */
    disabled?: boolean;
    className?: string;
    style?: React.CSSProperties;
}
declare const MenuItem: React.FC<IMenuItemProps>;
export default MenuItem;
