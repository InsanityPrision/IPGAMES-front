import useGames from "../../hooks/useGames";
import { Game } from "../../types";
import "./GameDetail.css";

interface GameDetailProps {
  game: Game;
}

const GameDetail: React.FC<GameDetailProps> = ({ game }) => {
  const { renderStars } = useGames();
  const gamePrice = game.isFree ? "FREE" : `${game.price}$`;

  return (
    <>
      <img
        className="game-detail__image"
        src={game.imageUrl}
        alt={game.imageAlt}
        width={450}
        height={295}
      />
      <div className="game-detail__content">
        <div className="game-detail__header">
          <h2>{game.name}</h2>
          <ol className="game-detail__rating">{renderStars(game)}</ol>
          <span
            className={game.isFree ? "game-detail__price" : undefined}
          >{`${gamePrice}`}</span>
        </div>
        <div className="game-detail__genders-section">
          <h3>Genders</h3>
          <ul className="game-detail__genders">
            {game.genders.map((gender, index) => {
              return (
                <li key={gender.length - index}>
                  <span className="game-detail__gender">{gender}</span>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <h3>Description</h3>
          <p>{game.description}</p>
        </div>
        <div className="game-detail__details">
          <h3>Developer:</h3>
          <span>{game.developer}</span>
        </div>
        <div className="game-detail__details">
          <h3>Date:</h3>
          <span>{game.date}</span>
        </div>
      </div>
    </>
  );
};

export default GameDetail;
