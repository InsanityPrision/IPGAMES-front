import { useEffect } from "react";
import GamesCardsList from "../../components/GamesCardsList/GamesCardsList";
import useGames from "../../hooks/useGames";

const GameListPage: React.FC = () => {
  const { games, loadGames } = useGames();

  useEffect(() => {
    loadGames();
  }, [loadGames]);

  return (
    <>
      <h1 className="page-title">Games</h1>
      <GamesCardsList games={games} />
    </>
  );
};

export default GameListPage;
