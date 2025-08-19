import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./Mixtape.css"; // or "./index.css" — whichever you actually use

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
