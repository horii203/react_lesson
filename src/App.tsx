import { useState } from "react";
import React, { FC } from "react";
import ColorfulMessage from "./components/ColorfulMessage.tsx";

export const App: FC = () => {
  const [num, setNum] = useState(0);
  const onClickCountUp = () => {
    // setNum(num + 1);
    setNum((prev) => prev + 1);
  };
  return (
    <>
      <h1>こんにちは</h1>
      <ColorfulMessage color="red">お元気ですか</ColorfulMessage>
      <ColorfulMessage color="green">元気です</ColorfulMessage>

      <button onClick={onClickCountUp}>カウントアップ</button>
      <p>{num}</p>
    </>
  );
};

export default App;
