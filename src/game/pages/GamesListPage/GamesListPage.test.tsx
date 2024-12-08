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

    test("Then it should show a loading", () => {
      render(
        <Provider store={store}>
          <GameListPage />
        </Provider>,
      );

      const loading = screen.getByLabelText(/loading/i);

      expect(loading).toBeInTheDocument();
    });
  });

  describe("When rendered and receives the games 'Subnautica' and 'Minecraft'", () => {
    test("Then it should show 'Subnautica' and 'Minecraft' inside a headings", async () => {
      render(
        <Provider store={store}>
          <GameListPage />
        </Provider>,
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
        <Provider store={store}>
          <GameListPage />
        </Provider>,
      );

      const subnauticaImage = await screen.findByAltText(/subnautica cover/i);
      const minecraftImage = await screen.findByAltText(/minecraft cover/i);

      expect(subnauticaImage).toBeInTheDocument();
      expect(minecraftImage).toBeInTheDocument();
    });
  });
});
