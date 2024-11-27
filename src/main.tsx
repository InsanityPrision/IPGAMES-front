import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./Components/App/App";
import "@fontsource/poppins/index.css";
import "./styles/styles.css";

const root = document.querySelector(".root");

if (!root) {
  throw new Error("Missing root element");
}

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>
);
