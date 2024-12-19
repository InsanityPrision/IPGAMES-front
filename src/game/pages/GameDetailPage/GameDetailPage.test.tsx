import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import GameDetailPage from "./GameDetailPage";
import { store } from "../../../store";

describe("Given the GameDetailPage component", () => {
  describe("When rendered", () => {
    test("Then it should show 'Outer Wilds' inside a heading", async () => {
      render(
        <Provider store={store}>
          <GameDetailPage />
        </Provider>,
      );

      const outerWildsTitle = await screen.findByRole("heading", {
        name: /outer wilds/i,
      });

      expect(outerWildsTitle).toBeInTheDocument();
    });

    test("Then it shoul show a image with alternative text 'Outer Wilds cover'", async () => {
      render(
        <Provider store={store}>
          <GameDetailPage />
        </Provider>,
      );

      const outerWildsImage = await screen.findByAltText(/outer wilds cover/i);

      expect(outerWildsImage).toBeInTheDocument();
    });
  });
});
