import { StrictMode } from "react";
import { BrowserRouter } from "react-router";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import AppRouter from "./router";
import { store } from "./store";
import("@fontsource/poppins/index.css");
import("@fontsource/poppins/700.css");
import("@fontsource/poppins/500.css");
import("@fontsource/poppins/300.css");
import("./styles/styles.css");

const root = document.querySelector(".root");

if (!root) {
  throw new Error("Missing root element");
}

createRoot(root).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </BrowserRouter>
  </StrictMode>,
);
