import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { Provider } from "react-redux";
import GameCard from "./GameCard";
import { Game } from "../../types";
import { store } from "../../../store";

describe("Given the GameCard component", () => {
  describe("When renderd and receives the game 'Counter Strike'", () => {
    const counterStrike: Game = {
      _id: "674c54d35afaeddac083e999",
      name: "Counter strike",
      price: 0,
      isFree: true,
      rate: 5,
      description:
        "Counter-Strike: Global Offensive (CS:GO) is a team-based first-person shooter developed by Valve and Hidden Path Entertainment. Released in 2012, it features competitive gameplay where teams of Terrorists and Counter-Terrorists complete objectives, such as planting/defusing bombs or rescuing hostages. Known for its tactical depth, skill-based mechanics, and esports scene, CS:GO remains one of the most popular multiplayer games worldwide.",
      developer: "Valve",
      date: "",
      genders: ["RPG", "Shooter"],
      imageUrl:
        "https://cdn.akamai.steamstatic.com/apps/csgo/images/csgo_react/social/cs2.jpg",
      imageAlt: "Counter cover",
    };

    test("Then it should show 'Counter Strike' inside a heading", () => {
      render(
        <MemoryRouter>
          <Provider store={store}>
            <GameCard game={counterStrike} loading="eager" />
          </Provider>
        </MemoryRouter>,
      );

      const gameName = screen.getByRole("heading", {
        name: /counter strike/i,
      });

      expect(gameName).toBeInTheDocument();
    });

    test("Then it should show a image with the alternative text 'Counter cover'", () => {
      render(
        <MemoryRouter>
          <Provider store={store}>
            <GameCard game={counterStrike} loading="eager" />
          </Provider>
        </MemoryRouter>,
      );

      const gameImage = screen.getByAltText(/counter cover/i);

      expect(gameImage).toBeInTheDocument();
    });

    test("Then it should show a 'Delete game' button", () => {
      render(
        <MemoryRouter>
          <Provider store={store}>
            <GameCard game={counterStrike} loading="eager" />
          </Provider>
        </MemoryRouter>,
      );

      const deleteGameButton = screen.getByRole("button", {
        name: /delete game/i,
      });

      expect(deleteGameButton).toBeInTheDocument();
    });
  });
});
