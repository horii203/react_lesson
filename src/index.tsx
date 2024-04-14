import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Todo } from "./Todo.tsx";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Root element not found");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Todo />
  </StrictMode>
);
