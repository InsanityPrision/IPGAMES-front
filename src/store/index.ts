import { configureStore } from "@reduxjs/toolkit";
import gamesReducer from "../game/slice/gamesSlice";

export const store = configureStore({
  reducer: {
    gamesState: gamesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
