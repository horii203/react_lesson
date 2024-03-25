import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Root element not found");
const root = createRoot(rootElement);

const App: React.FC = () => {
  return (
    <div>
      <h1>こんにちは</h1>
      <p>お元気ですか</p>
    </div>
  );
};

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
