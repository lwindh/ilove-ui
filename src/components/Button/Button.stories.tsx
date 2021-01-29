import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Button from "./Button";
import Icon from '../Icon/icon'

const defaultButton = () => (
  <Button onClick={action("clicked")}>Default Button</Button>
);
const buttonSizes = () => (
  <div>
    <Button size="sm">small Button</Button>
    <Button>Default Button</Button>
    <Button size="lg">Large Button</Button>
  </div>
);
const buttonTypes = () => (
  <div>
    <Button>Default Button</Button>
    <Button btnType="primary">Primary Button</Button>
    <Button btnType="dashed">Dashed Button</Button>
    <Button btnType="text">
      Text Button
    </Button>
    <Button btnType="link" target="_block">
      Link Button
    </Button>
  </div>
);
const buttonShaps = () => (
  <>
    <Button>Default</Button>
    <Button shape="round">圆角按钮</Button>
    {/* <Button shape="circle"><Icon icon="angle-down" size='xs'/></Button> */}
  </>
);
storiesOf("Button Component", module)
  .add("Button", defaultButton)
  .add("不同大小 Button", buttonSizes)
  .add("不同类型 Button", buttonTypes)
  .add("不同形状 Button", buttonShaps);
