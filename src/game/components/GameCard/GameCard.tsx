import { Game } from "../../types";
import "./GameCard.css";

interface GameCardProps {
  game: Game;
  loading: "lazy" | "eager";
}

const GameCard: React.FC<GameCardProps> = ({ game, loading }) => {
  const starsNumbers: number[] = Array(game.rate).fill(0);

  const renderPrice = () => {
    return (
      <span
        className={game.isFree ? "game-card__price-number--free" : undefined}
      >
        {game.isFree ? "FREE" : `${game.price}$`}
      </span>
    );
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
      </div>
    </article>
  );
};

export default GameCard;
