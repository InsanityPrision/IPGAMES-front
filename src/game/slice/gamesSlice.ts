import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Game } from "../types";

interface GamesState {
  games: Game[];
  game: Game | null;
}

const initialGameState: GamesState = {
  games: [],
  game: null,
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
    loadGame: (state, action: PayloadAction<Game | null>) => {
      return {
        ...state,
        game: action.payload,
      };
    },
  },
});

export const { loadGames, loadGame } = gamesSlice.actions;
export default gamesSlice.reducer;
