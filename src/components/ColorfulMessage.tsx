import React, { FC, ReactNode } from "react";

interface ColorfulMessageProps {
  color: string;
  children: ReactNode;
}

const ColorfulMessage: FC<ColorfulMessageProps> = (props) => {
  const contentStyle: React.CSSProperties = {
    color: props.color,
    fontSize: '20px',
  };

  return (
    // children ColorfulMessageタグで囲われた部分を取得
    <p style={contentStyle}>{props.children}</p>
  );
};

export default ColorfulMessage;
