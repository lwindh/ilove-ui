import { FC } from 'react';
import { TabsProps } from './Tabs';
import { TabsItemProps } from './TabsItem';
export declare type IMenuComponent = FC<TabsProps> & {
    Item: FC<TabsItemProps>;
};
declare const TransTabs: IMenuComponent;
export default TransTabs;
