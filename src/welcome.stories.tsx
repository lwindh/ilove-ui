import React from "react";
import { storiesOf } from "@storybook/react";

storiesOf("Welcome page", module).add(
  "welcome",
  () => {
    return (
      <>
        <h1>欢迎来到 lv 组件库</h1>
        <p>
          lv 是一套简单易用的组件库
        </p>
        <h3>安装试试</h3>
        <code>npm install ilove-ui --save</code>
      </>
    );
  },
  { info: { disable: true } }
);
