import { Game } from "../../types";
import "./GameCard.css";

interface GameCardProps {
  game: Game;
}

const GameCard: React.FC<GameCardProps> = ({ game }) => {
  const starsCount: number[] = Array(game.rate).fill(0);

  return (
    <article className="game-card">
      <img
        className="game-card__image"
        src={game.imageUrl}
        alt={game.imageAlt}
        width={250}
        height={135}
      />
      <div>
        <div className="game-card__header">
          <h2 className="game-card__name">{game.name}</h2>
          <ol className="game-card__raiting">
            {starsCount.map((_starCount, index) => {
              return (
                <li key={index}>
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
          <span>Price:</span>
          <span className="game-card__price-number">{game.price}</span>
        </div>
      </div>
    </article>
  );
};

export default GameCard;
