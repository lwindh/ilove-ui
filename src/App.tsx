import { useState } from "react";
import Button from "./components/Button/Button";
import Menu from "./components/Menu/Menu";
import MenuItem from "./components/Menu/MenuItem";
function App() {
  const [size, setSize] = useState("");
  return (
    <>
      <Menu defaultIndex={0} mode={'vertical'} onSelect={(index) => console.log(index)}>
        <MenuItem index={0}>test Menu 1</MenuItem>
        <MenuItem index={1}>test Menu 2</MenuItem>
        <MenuItem index={2}>test Menu 3</MenuItem>
      </Menu>
      <div>按钮类型</div>
      <Button btnType="primary">Primary Button</Button>
      <Button>Default Button</Button>
      <Button btnType="dashed">Dashed Button</Button>
      <Button btnType="text" target="_block">
        Text Button
      </Button>
      <Button btnType="link" href="https://www.baidu.com" target="_block">
        Link Button
      </Button>
      <Button shape="round">圆角按钮</Button>
      {/* <Button shape="circle">1</Button> */}
      {/* <svg viewBox="64 64 896 896" focusable="false" data-icon="download" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M505.7 661a8 8 0 0012.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"></path></svg> */}
      <div>按钮尺寸</div>
      <div>
        <Button onClick={() => setSize("sm")}> small </Button>
        <Button onClick={() => setSize("")}> Default </Button>
        <Button onClick={() => setSize("lg")}> Large </Button>
      </div>
      <Button size={size}> Default </Button>
      <Button btnType="primary" size={size}>
        {" "}
        Primary{" "}
      </Button>
      <Button btnType="danger" size={size}>
        {" "}
        Danger{" "}
      </Button>
      <Button
        btnType="link"
        size={size}
        href="https://www.baidu.com"
        target="_block"
      >
        {" "}
        Link{" "}
      </Button>
      <Button shape="round" size={size}>
        圆角按钮
      </Button>
      {/* <Button shape="circle" size={size}>12</Button> */}
    </>
  );
}

export default App;
