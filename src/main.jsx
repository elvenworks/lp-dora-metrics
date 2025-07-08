import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./lib/i18next.js";
import App from "./App.jsx";
import Analytics from "./components/common/Analytics";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Analytics />
    <App />
  </StrictMode>
);
