import { Game } from "../../types";
import GameCard from "../GameCard/GameCard";
import "./GamesCardsList.css";

interface GamesCardsListProps {
  games: Game[];
}

const GamesCardsList: React.FC<GamesCardsListProps> = ({ games }) => {
  return (
    <ul className="games-list">
      {games.map((game, gamePosition) => {
        return (
          <li key={game._id}>
            <GameCard
              game={game}
              loading={gamePosition <= 3 ? "eager" : "lazy"}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default GamesCardsList;
