import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import "@fontsource/poppins/index.css";
import "@fontsource/poppins/700.css";
import "./styles/styles.css";

const root = document.querySelector(".root");

if (!root) {
  throw new Error("Missing root element");
}

createRoot(root).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
