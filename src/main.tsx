import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@fontsource/poppins/index.css";
import "./styles/styles.css";
import { RouterProvider } from "react-router-dom";
import router from "./router";

const root = document.querySelector(".root");

if (!root) {
  throw new Error("Missing root element");
}

createRoot(root).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
