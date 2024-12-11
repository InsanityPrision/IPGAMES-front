import { useEffect } from "react";
import { toast } from "react-toastify";
import GamesCardsList from "../../components/GamesCardsList/GamesCardsList";
import useGames from "../../hooks/useGames";
import "./GamesListPage.css";

const GameListPage: React.FC = () => {
  const { games, loadGames } = useGames();

  useEffect(() => {
    loadGames();

    toast.promise(
      loadGames,
      {
        pending: {
          render() {
            return "Loading games...";
          },
          icon: <span aria-label="Loading" className="loader"></span>,
        },
        error: {
          render() {
            return (
              <span aria-label="Failed loading games">
                Failed loading games
              </span>
            );
          },
          icon: <img src="/error.svg" alt="" />,
        },
      },
      {
        closeButton: false,
      },
    );
  }, [loadGames]);

  return (
    <>
      <h1 className="page-title">Games</h1>
      <GamesCardsList games={games} />
    </>
  );
};

export default GameListPage;
