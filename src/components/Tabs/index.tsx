import { FC } from 'react'
import Tabs, { TabsProps } from './Tabs'
import TabsItem, { TabsItemProps } from './TabsItem'

export type IMenuComponent = FC<TabsProps> & {
    Item: FC<TabsItemProps>,
}
const TransTabs = Tabs as IMenuComponent

TransTabs.Item = TabsItem

export default TransTabs;