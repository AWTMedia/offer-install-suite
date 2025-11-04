// src/main.tsx
import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

function showBootError(err: unknown) {
  const pre = document.createElement("pre");
  pre.textContent =
    "Boot error:\n\n" +
    (err instanceof Error ? `${err.message}\n\n${err.stack}` : String(err));
  pre.style.whiteSpace = "pre-wrap";
  pre.style.padding = "16px";
  pre.style.background = "#111";
  pre.style.color = "#C9F93E";
  pre.style.border = "1px solid #333";
  pre.style.borderRadius = "12px";
  pre.style.maxWidth = "960px";
  pre.style.margin = "24px auto";
  document.body.appendChild(pre);
}

try {
  const el = document.getElementById("root");
  if (!el) throw new Error('#root not found in index.html');
  createRoot(el).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
  // helpful when checking console on Pages
  console.info("App mounted");
} catch (e) {
  console.error(e);
  showBootError(e);
}
