import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// コンポーネント読み込み
import { App } from "./App.tsx";

// ↓定型文
const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Root element not found");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
