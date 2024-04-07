import React, { FC } from "react";
import ColorfulMessage from "./components/ColorfulMessage.tsx"; // .tsxの拡張子は不要です

export const App: FC = () => {
  const onClickButton = () => alert('alert');
  return (
    <>
      <h1>こんにちは</h1>
      <ColorfulMessage color='red'>お元気ですか</ColorfulMessage>
      <ColorfulMessage color='green'>元気です</ColorfulMessage>

      {/* タグの中にJSが書ける {}のなかにJSを書く */}
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

export default App;
