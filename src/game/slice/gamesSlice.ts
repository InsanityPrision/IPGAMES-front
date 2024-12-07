import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Game } from "../types";

interface GamesState {
  games: Game[];
}

const initialGameState: GamesState = {
  games: [],
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
  },
});

export const { loadGames } = gamesSlice.actions;
export default gamesSlice.reducer;
