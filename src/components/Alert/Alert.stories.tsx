import React from "react";
import { storiesOf } from "@storybook/react";
import Alert from "./Alert";

const defaultAlert = () => (
  <Alert closable message="this is alert!" type="info"></Alert>
);

const alertTypes = () => (
  <div>
    <Alert closable message="this is alert!" type="info"></Alert>
    <Alert closable message="this is alert!" type="success"></Alert>
    <Alert closable message="this is alert!" type="warning"></Alert>
    <Alert closable={false} message="this is alert!" type="error"></Alert>
  </div>
);

const alertDesc = () => (
    <Alert closable message="Info Text" description='Info Description Info DescriptionInfo Description Info Description' type="info"></Alert>
  );

storiesOf("Alert Component", module)
  .add("Alert", defaultAlert)
  .add("不同类型 Alert", alertTypes)
  .add("有描述的 Alert", alertDesc);
