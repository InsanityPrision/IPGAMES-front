import Button from "../../../components/Button/Button";
import { gamesClient } from "../../client/GamesClient";
import { Game } from "../../types";
import "./GameCard.css";
import loadErrorAlert from "../../../toast/toastError/loadErrorAlert";
import useGames from "../../hooks/useGames";

interface GameCardProps {
  game: Game;
  loading: "lazy" | "eager";
}

const GameCard: React.FC<GameCardProps> = ({ game, loading }) => {
  const starsNumbers: number[] = Array(game.rate).fill(0);
  const { loadGames } = useGames();

  const renderPrice = () => {
    return (
      <span
        className={game.isFree ? "game-card__price-number--free" : undefined}
      >
        {game.isFree ? "FREE" : `${game.price}$`}
      </span>
    );
  };

  const deleteGame = async () => {
    try {
      const deletedGame = await gamesClient.deleteGame(game._id);

      if (!deletedGame) {
        throw new Error("Failed deleting game");
      }

      loadGames();
    } catch {
      loadErrorAlert("Failed deleting game");
    }
  };

  const deleteGameOnClick = async () => {
    await deleteGame();
  };

  return (
    <article className="game-card">
      <img
        className="game-card__image"
        src={game.imageUrl}
        alt={game.imageAlt}
        width={380}
        height={192}
        loading={loading}
      />
      <div>
        <div className="game-card__header">
          <h2 className="game-card__name">{game.name}</h2>
          <ol className="game-card__raiting">
            {starsNumbers.map((_starsNumber, index) => {
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
            })}
          </ol>
        </div>
        <div className="game-card__price">
          <span className="game-card__price-title">Price:</span>
          {renderPrice()}
        </div>
        <Button className="button button--delete" onClick={deleteGameOnClick}>
          Delete game
        </Button>
      </div>
    </article>
  );
};

export default GameCard;
