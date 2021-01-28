import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Button from "./Button";

const buttonSizes = () => (
  <>
    <Button size="sm">small</Button>
    <Button>Default</Button>
    <Button size="lg">Large</Button>
  </>
);
const buttonTypes = () => (
  <>
    <Button>Default Button</Button>
    <Button btnType="primary">Primary Button</Button>
    <Button btnType="dashed">Dashed Button</Button>
    <Button btnType="text" target="_block">
      Text Button
    </Button>
    <Button btnType="link" href="https://www.baidu.com" target="_block">
      Link Button
    </Button>
  </>
);
const buttonShaps = () => (
    <>
      <Button>Default</Button>
      <Button shape="round">圆角按钮</Button>
    </>
  );
storiesOf("Button", module)
  .add("不同大小 Button", buttonSizes)
  .add("不同类型 Button", buttonTypes)
  .add("不同形状 Button", buttonShaps)
