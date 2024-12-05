import { StrictMode } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router";
import { createRoot } from "react-dom/client";
import "@fontsource/poppins/index.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/300.css";
import AppRouter from "./router";
import { store } from "./game/store";
import "./styles/styles.css";

const root = document.querySelector(".root");

if (!root) {
  throw new Error("Missing root element");
}

createRoot(root).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
);
