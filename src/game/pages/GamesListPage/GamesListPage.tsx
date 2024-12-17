import { useEffect } from "react";
import { toast } from "react-toastify";
import GamesCardsList from "../../components/GamesCardsList/GamesCardsList";
import useGames from "../../hooks/useGames";
import "./GamesListPage.css";

const GameListPage: React.FC = () => {
  const { games, loadGames } = useGames();

  useEffect(() => {
    toast.promise(
      loadGames,
      {
        pending: {
          render() {
            return "Loading games...";
          },
          icon: <span aria-label="Loading" className="loader"></span>,
        },
      },
      {
        closeButton: false,
      },
    );
  }, [loadGames]);

  return (
    <main className="main-container">
      <h1 className="page-title">Games</h1>
      <GamesCardsList games={games} />
    </main>
  );
};

export default GameListPage;
