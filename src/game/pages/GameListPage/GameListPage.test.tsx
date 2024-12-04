import { render, screen } from "@testing-library/react";
import GameListPage from "./GameListPage";

describe("Given the GameListPage component", () => {
  describe("When rendered", () => {
    test("Then it should show 'Games' in a heading", () => {
      render(<GameListPage />);

      const gameListPageTitle = screen.getByRole("heading", {
        name: /games/i,
      });

      expect(gameListPageTitle).toBeInTheDocument();
    });
  });
});
