import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.scss";
import { initGA } from "./analytics";
initGA();

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
