import { useAppSelector } from "../../../store/hooks";
import GameDetail from "../../components/GameDetail/GameDetail";

const GameDetailPage: React.FC = () => {
  const game = useAppSelector((state) => state.games.game);

  return <GameDetail game={game} />;
};

export default GameDetailPage;
