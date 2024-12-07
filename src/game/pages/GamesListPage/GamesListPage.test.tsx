import { render, screen } from "@testing-library/react";
import GameListPage from "./GamesListPage";
import { Provider } from "react-redux";
import { store } from "../../store";

describe("Given the GameListPage component", () => {
  describe("When rendered", () => {
    test("Then it should show 'Games' in a heading", () => {
      render(
        <Provider store={store}>
          <GameListPage />
        </Provider>,
      );

      const gameListPageTitle = screen.getByRole("heading", {
        name: /games/i,
      });

      expect(gameListPageTitle).toBeInTheDocument();
    });
  });
});
