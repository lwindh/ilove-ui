import { configure, addDecorator, addParameters } from '@storybook/react';
import "../src/styles/index.scss"
/* const loaderFn = () => {
  const allExports = [require('../src/welcome.stories.tsx')];
  const req = require.context('../src/components', true, /\.stories\.tsx$/);
  req.keys().forEach(fname => allExports.push(req(fname)));
  return allExports;
};


// automatically import all files ending in *.stories.js
configure(loaderFn, module); */
configure(require.context('../src', true, /\.stories\.tsx$/), module);
