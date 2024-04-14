import { useEffect, useState } from "react";
import React, { FC } from "react";
import ColorfulMessage from "./components/ColorfulMessage.tsx";

export const App: FC = () => {
  const [num, setNum] = useState(0);
  const [isShow, setIsShow] = useState(false);
  const onClickCountUp = () => {
    // setNum(num + 1);
    setNum((prev) => prev + 1);
  };
  const onClickToggle = () => {
    setIsShow(!isShow);
  };

  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        isShow || setIsShow(true);
      } else {
        isShow && setIsShow(false);
      }
    }
  }, [num]);

  return (
    <>
      <h1>こんにちは</h1>
      <ColorfulMessage color="red">お元気ですか</ColorfulMessage>
      <ColorfulMessage color="green">元気です</ColorfulMessage>

      <button onClick={onClickCountUp}>カウントアップ</button>
      <p>{num}</p>
      <button onClick={onClickToggle}>on/off</button>
      {isShow && <p>3の倍数</p>}
    </>
  );
};

export default App;
