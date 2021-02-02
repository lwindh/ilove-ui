import React from "react";
import { storiesOf } from "@storybook/react";
import Progress from "./Progress";

const defaultProgress = () => (
  <div>
    <Progress percent={20} styles={{width:'360px'}} />
    <Progress percent={23} styles={{width:'360px'}} theme="danger" />
    <Progress percent={30} styles={{width:'360px'}} theme="dark" />
    <Progress percent={25} styles={{width:'360px'}} theme="info" />
    <Progress percent={25} styles={{width:'360px'}} showText={false} theme="secondary" />
  </div>
);

storiesOf("Progress 进度条", module).add("Progress", defaultProgress);
