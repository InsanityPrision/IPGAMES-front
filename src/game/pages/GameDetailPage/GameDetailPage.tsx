import { useCallback, useEffect } from "react";
import { useParams } from "react-router";
import { toast } from "react-toastify";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import GameDetail from "../../components/GameDetail/GameDetail";
import { gamesClient } from "../../client/GamesClient";
import { loadGame as loadGameActionCreator } from "../../slice/gamesSlice";
import loadErrorAlert from "../../../toast/toastError/loadErrorAlert";

const GameDetailPage: React.FC = () => {
  const { _id } = useParams<string>();
  const dispatch = useAppDispatch();
  const game = useAppSelector((state) => state.gamesState.game);

  const loadGame = useCallback(async () => {
    try {
      const newGame = await gamesClient.getGameById(_id!);

      dispatch(loadGameActionCreator(newGame));
    } catch {
      loadErrorAlert("Failed loading game");
    }
  }, [_id, dispatch]);

  useEffect(() => {
    toast.promise(loadGame, {
      pending: {
        render() {
          return "Loading games...";
        },
        icon: <span aria-label="Loading" className="loader"></span>,
      },
    });

    return () => {
      dispatch(loadGameActionCreator(null));
    };
  }, [dispatch, loadGame]);

  return <GameDetail game={game} />;
};

export default GameDetailPage;
