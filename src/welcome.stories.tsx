import React from "react";
import { storiesOf } from "@storybook/react";

storiesOf("Welcome page", module).add(
  "welcome",
  () => {
    return (
      <>
        <h1>快速上手</h1>
        <p>ilove-ui 是一套简单易用的组件库</p>
        <h3>安装</h3>
        <code>npm install ilove-ui --save</code>
        <h3>使用</h3>
        <code>
          <span>// 加载样式</span>
          <br />
          <span>import 'ilove-ui/dist/index.css'</span>
          <br />
          <span>// 引入组件</span>
          <br />
          <span>
            import {"\u007B"} Button {"\u007d"} from 'ilove-ui'
          </span>
        </code>
      </>
    );
  },
  { info: { disable: true } }
);
