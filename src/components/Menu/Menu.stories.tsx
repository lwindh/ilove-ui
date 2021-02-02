import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Menu from "./Menu";
import MenuItem from "./MenuItem";
import SubMenu from "./SubMenu";

const defaultMenu = () => (
  <Menu
    defaultIndex="0"
    onSelect={(index) => {
      action(`clicked ${index} item`);
    }}
  >
    <MenuItem index="0">cool link</MenuItem>
    <MenuItem disabled index="1">
      disabled
    </MenuItem>
    <MenuItem index="2">cool link 2</MenuItem>
  </Menu>
);

const subMenu = () => (
  <Menu defaultIndex={"0"} onSelect={(index) => console.log(index)}>
    <MenuItem index={"0"}>test Menu 1</MenuItem>
    <MenuItem disabled index={"1"}>
      test Menu 2
    </MenuItem>
    <SubMenu title="dropdown" index={"2"}>
      <MenuItem index={"2-0"}>dropdown 1</MenuItem>
      <MenuItem index={"2-1"}>dropdown 2</MenuItem>
    </SubMenu>
    <MenuItem index={"3"}>test Menu 3</MenuItem>
  </Menu>
);

const verticalMenu = () => (
  <Menu
    defaultIndex={"0"}
    defalutOpenSubMenus={["2"]}
    mode="vertical"
    onSelect={(index) => console.log(index)}
  >
    <MenuItem index={"0"}>test Menu 1</MenuItem>
    <MenuItem disabled index={"1"}>
      test Menu 2
    </MenuItem>
    <SubMenu title="dropdown" index={"2"}>
      <MenuItem index={"2-0"}>dropdown 1</MenuItem>
      <MenuItem index={"2-1"}>dropdown 2</MenuItem>
    </SubMenu>
    <MenuItem index={"3"}>test Menu 3</MenuItem>
  </Menu>
);
storiesOf("Menu 导航菜单", module)
  .add("Menu", defaultMenu)
  .add("subMenu", subMenu)
  .add("verticalMenu", verticalMenu);
