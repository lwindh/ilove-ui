import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Tabs from "./Tabs";
import TabsItem from "./TabsItem";
import Icon from "../Icon/icon"

const defaultTabs = () => (
  <Tabs
    defaultActiveKey="0"
    type="line"
    onSelect={(index) => {
      action(`clicked ${index} item`);
    }}
  >
    <TabsItem label="1">
      <h1>cool link</h1>
    </TabsItem>
    <TabsItem label="2">
      disabled
    </TabsItem>
    <TabsItem label="3">
      cool link 2
    </TabsItem>
  </Tabs>
);
const tabsCard = () => (
  <Tabs
    defaultActiveKey="0"
    type="card"
    onSelect={(index) => {
      action(`clicked ${index} item`);
    }}
  >
    <TabsItem label="Tab 1">
      Content of Tab Itme 1
    </TabsItem>
    <TabsItem label="Tab 2">
      Content of Tab Itme 2
    </TabsItem>
    <TabsItem label="Tab 3">
      Content of Tab Itme 3
    </TabsItem>
  </Tabs>
);
const tabsCardIcon = () => (
  <Tabs
    defaultActiveKey="0"
    type="card"
    onSelect={(index) => {
      action(`clicked ${index} item`);
    }}
  >
    <TabsItem label={<><Icon icon="exclamation-circle" />{'  '}Tab 1</>}>
      Content of Tab Itme 1
    </TabsItem>
    <TabsItem label={<><Icon icon="coffee" />{'  '}Tab 2</>}>
      Content of Tab Itme 2
    </TabsItem>
  </Tabs>
);
storiesOf("Tabs Component", module)
  .add("Tabs", defaultTabs)
  .add("选项卡 tabs", tabsCard)
  .add("自定义选项卡样式", tabsCardIcon);
