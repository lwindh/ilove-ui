import { useState } from "react";
import Button, { ButtonType, ButtonSize } from "./components/Button/Button";
function App() {
  const [size, setSize] = useState(ButtonSize.Default)
  return (
    <>
      <div>按钮类型</div>
      <Button> Default Button </Button>
      <Button btnType={ButtonType.Primary}> Primary Button </Button>
      <Button btnType={ButtonType.Danger}> Danger Button </Button>
      <Button btnType={ButtonType.Link} href="https://www.baidu.com" target='_block'> Link Button </Button>
      <div>按钮尺寸</div>
      <div>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Small} onClick={() => setSize(ButtonSize.Small)}> small </Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Default} onClick={() => setSize(ButtonSize.Default)}> Default </Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large} onClick={() => setSize(ButtonSize.Large)}> Large </Button>
      </div>
      <Button size={size}> Default </Button>
      <Button btnType={ButtonType.Primary} size={size}> Primary </Button>
      <Button btnType={ButtonType.Danger} size={size}> Danger </Button>
      <Button btnType={ButtonType.Link} size={size} href="https://www.baidu.com" target='_block'> Link </Button>
    </>
  );
}

export default App;
