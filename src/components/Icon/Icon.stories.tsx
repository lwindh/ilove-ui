import React from "react";
import { storiesOf } from "@storybook/react";
import Icon from "./Icon";

const defaultIcon = () => (
  <div>
    <Icon icon="check" size="3x" />
    <Icon icon="times" size="3x" />
    <Icon icon="anchor" size="3x" />
    <Icon icon="trash" size="3x" />
  </div>
);

const iconTheme = () => (
  <div>
    <Icon icon="check" size="3x" theme="success" />
    <Icon icon="times" size="3x" theme="danger" />
    <Icon icon="anchor" size="3x" theme="primary" />
    <Icon icon="exclamation-circle" size="3x" theme="warning" />
  </div>
);

const iconShow = () => (
  <div>
    <Icon icon="spinner" size="3x" spin theme="primary" />
    <Icon icon="spinner" pulse size="3x" theme="success" />
  </div>
);

storiesOf("Icon 图标", module)
  .add("Icon", defaultIcon)
  .add("不同主题的Icon", iconTheme)
  .add("更多行为的Icon", iconShow);
