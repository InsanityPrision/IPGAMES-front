import { render, screen } from "@testing-library/react";
import GameListPage from "./GamesListPage";
import { Provider } from "react-redux";
import { store } from "../../../store";
import { MemoryRouter } from "react-router";

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

  describe("When rendered and receives the games 'Subnautica' and 'Minecraft'", () => {
    test("Then it should show 'Subnautica' and 'Minecraft' inside a headings", async () => {
      render(
        <MemoryRouter>
          <Provider store={store}>
            <GameListPage />
          </Provider>
        </MemoryRouter>,
      );

      const subnauticaTitle = await screen.findByRole("heading", {
        name: /subnautica/i,
      });

      const minecraftTitle = await screen.findByRole("heading", {
        name: /minecraft/i,
      });

      expect(subnauticaTitle).toBeInTheDocument();
      expect(minecraftTitle).toBeInTheDocument();
    });

    test("Then it should show two images with alternative texts 'Subnautica cover' and 'Minecraft cover'", async () => {
      render(
        <MemoryRouter>
          <Provider store={store}>
            <GameListPage />
          </Provider>
        </MemoryRouter>,
      );
      const subnauticaImage = await screen.findByAltText(/subnautica cover/i);
      const minecraftImage = await screen.findByAltText(/minecraft cover/i);

      expect(subnauticaImage).toBeInTheDocument();
      expect(minecraftImage).toBeInTheDocument();
    });

    test("Then it should show 'Delete game' button in each game", () => {
      render(
        <MemoryRouter>
          <Provider store={store}>
            <GameListPage />
          </Provider>
        </MemoryRouter>,
      );

      const deleteGameButtons = screen.getAllByRole("button", {
        name: /delete game/i,
      });

      deleteGameButtons.forEach((deleteGameButton) => {
        expect(deleteGameButton).toBeInTheDocument();
      });
    });
  });
});
