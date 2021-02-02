import React from "react";
import { storiesOf } from "@storybook/react";
import Input from "./Input";

const defaultInput = () => (
  <Input
    onChange={function noRefCheck() {}}
    style={{
      width: "500px",
    }}
    placeholder="漂亮的 Input"
  />
);
const disabledInput = () => (
  <Input style={{ width: "300px" }} placeholder="disabled input" disabled />
);

const iconInput = () => (
  <Input
    style={{ width: "300px" }}
    placeholder="input with icon"
    icon="search"
  />
);

const sizeInput = () => (
  <div>
    <Input style={{ width: "300px" }} placeholder="large size" size="lg" />
    <Input style={{ width: "300px" }} placeholder="small size" size="sm" />
  </div>
);

const pandInput = () => (
  <div>
    <Input
      style={{ width: "300px" }}
      placeholder="prepend text"
      prepend="https://"
    />
    <Input style={{ width: "300px" }} placeholder="google" append=".com" />
  </div>
);

storiesOf("Input 输入框", module)
  .add("Input", defaultInput)
  .add("被禁用的 Input", disabledInput)
  .add("带图标的 Input", iconInput)
  .add("大小不同的 Input", sizeInput)
  .add("带前后缀的 Input", pandInput);
