import React, { FC, ReactNode } from "react";

interface ColorfulMessageProps {
  color: string;
  children: ReactNode;
}

const ColorfulMessage: FC<ColorfulMessageProps> = ({ color, children }) => {
  const contentStyle: React.CSSProperties = {
    color, //color: color, 同じ場合は省略できる
    fontSize: "20px",
  };

  return (
    // children ColorfulMessageタグで囲われた部分を取得
    <p style={contentStyle}>{children}</p>
  );
};

export default ColorfulMessage;
