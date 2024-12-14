import { useCallback } from "react";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { loadGames as loadGamesActionCreator } from "../slice/gamesSlice";
import { gamesClient } from "../client/GamesClient";
import loadErrorAlert from "../../toast/toastError/loadErrorAlert";

const useGames = () => {
  const games = useAppSelector((state) => state.games.games);
  const dispatch = useAppDispatch();
  const loadGames = useCallback(async () => {
    try {
      const games = await gamesClient.getGames();

      dispatch(loadGamesActionCreator(games));
    } catch {
      loadErrorAlert("Failed loading games");
    }
  }, [dispatch]);

  return {
    games,
    loadGames,
  };
};

export default useGames;
