import { useCallback } from "react";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { loadGames as loadGamesActionCreator } from "../slice/gamesSlice";
import { gamesClient } from "../client/GamesClient";
import loadErrorAlert from "../../toast/toastError/loadErrorAlert";
import { Game } from "../types";

const useGames = () => {
  const games = useAppSelector((state) => state.gamesState.games);
  const dispatch = useAppDispatch();

  const loadGames = useCallback(async () => {
    try {
      const games = await gamesClient.getGames();

      dispatch(loadGamesActionCreator(games));
    } catch {
      loadErrorAlert("Failed loading games");
    }
  }, [dispatch]);

  const renderStars = (game: Game) => {
    const starsNumbers: number[] = Array(game.rate)
      .fill(null)
      .map((_stars, index) => {
        return index;
      });

    return starsNumbers.map((_starsNumber, index) => {
      return (
        <li key={starsNumbers.length - index}>
          <img
            src="/star.svg"
            alt={`Rated level ${index + 1}`}
            width={11}
            height={10}
          />
        </li>
      );
    });
  };

  return {
    games,
    loadGames,
    renderStars,
  };
};

export default useGames;
