import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./Components/App/App";

createRoot(document.querySelector(".root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
