import { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import GamesCardsList from "../../components/GamesCardsList/GamesCardsList";
import useGames from "../../hooks/useGames";
import "react-toastify/dist/ReactToastify.css";
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
          icon: () => <span aria-label="Loading" className="loader"></span>,
        },
        error: {
          render() {
            return "Failed loading games";
          },
          icon: () => <img src="/error.svg" alt="" />,
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
      <ToastContainer
        position="top-center"
        hideProgressBar={true}
        autoClose={false}
        icon={false}
      />
    </>
  );
};

export default GameListPage;
