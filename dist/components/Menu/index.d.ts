import { FC } from 'react';
import { IMenuProps } from './Menu';
import { ISubMenuProps } from './SubMenu';
import { IMenuItemProps } from './MenuItem';
export declare type IMenuComponent = FC<IMenuProps> & {
    Item: FC<IMenuItemProps>;
    SubMenu: FC<ISubMenuProps>;
};
declare const TransMenu: IMenuComponent;
export default TransMenu;
