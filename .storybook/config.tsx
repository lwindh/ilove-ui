import { configure, addDecorator, addParameters } from "@storybook/react";
import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core"
import { fas } from "@fortawesome/free-solid-svg-icons"
import { withInfo } from "@storybook/addon-info";
import "../src/styles/index.scss";
library.add(fas)
const wrapperStyle: React.CSSProperties = {
  padding: "20px 40px",
};

const storyWrapper = (storyFn: any) => (
  <div style={wrapperStyle}>
    <h3>组件演示</h3>
    {storyFn()}
  </div>
);
addDecorator(storyWrapper);
addDecorator(withInfo);
addParameters({info: { inline: true, header: false}})
/* const loaderFn = () => {
  const allExports = [require('../src/welcome.stories.tsx')];
  const req = require.context('../src/components', true, /\.stories\.tsx$/);
  req.keys().forEach(fname => allExports.push(req(fname)));
  return allExports;
};


// automatically import all files ending in *.stories.js
configure(loaderFn, module); */
configure(require.context("../src", true, /\.stories\.tsx$/), module);