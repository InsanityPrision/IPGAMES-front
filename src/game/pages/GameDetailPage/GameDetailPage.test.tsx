import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import GameDetailPage from "./GameDetailPage";
import { Game } from "../../types";

describe("Given the GameDetailPage component", () => {
  describe("When rendered", () => {
    interface GamesState {
      game: Game;
    }

    const initialGameState: GamesState = {
      game: {
        _id: "1234",
        name: "Outer Wilds",
        price: 22.99,
        isFree: false,
        rate: 5,
        description:
          "Outer Wilds is an open-world mystery game where players explore a solar system trapped in a 22-minute time loop. As a Hearthian astronaut, you uncover the secrets of the Nomai civilization and the Eye of the Universe. The dynamic planets evolve in real time, creating a unique puzzle-solving experience. Praised for its storytelling and innovative design, it’s a standout in exploration games​",
        developer: "Mobius Digital",
        date: "2020-5-18",
        genders: ["Horror", "Adventure"],
        imageUrl: "/outerwilds.webp",
        imageAlt: "Outer Wilds cover",
      },
    };

    const gamesSlice = createSlice({
      name: "games",
      initialState: initialGameState,
      reducers: {
        loadGames: (state, action: PayloadAction<Game[]>) => {
          return {
            ...state,
            games: action.payload,
          };
        },

        loadGame: (state, action: PayloadAction<Game>) => {
          return {
            ...state,
            game: action.payload,
          };
        },
      },
    });

    const store = configureStore({
      reducer: {
        games: gamesSlice.reducer,
      },
    });

    test("Then it should show 'Outer Wilds' inside a heading", () => {
      render(
        <Provider store={store}>
          <GameDetailPage />
        </Provider>,
      );

      const outerWildsTitle = screen.getByRole("heading", {
        name: /outer wilds/i,
      });

      expect(outerWildsTitle).toBeInTheDocument();
    });

    test("Then it shoul show a image with alternative text 'Outer Wilds cover'", () => {
      render(
        <Provider store={store}>
          <GameDetailPage />
        </Provider>,
      );

      const outerWildsImage = screen.getByAltText(/outer wilds cover/i);

      expect(outerWildsImage).toBeInTheDocument();
    });
  });
});
