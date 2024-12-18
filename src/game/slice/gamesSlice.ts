import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Game } from "../types";

interface GamesState {
  games: Game[];
  game: Game;
}

const initialGameState: GamesState = {
  games: [],
  game: {
    _id: "",
    name: "",
    price: 0,
    isFree: false,
    rate: 0,
    description: "",
    developer: "",
    date: "",
    genders: [],
    imageUrl: "",
    imageAlt: "",
  },
};

export const gamesSlice = createSlice({
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

export const { loadGames, loadGame } = gamesSlice.actions;
export default gamesSlice.reducer;
