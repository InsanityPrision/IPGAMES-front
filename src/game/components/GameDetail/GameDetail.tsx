import useGames from "../../hooks/useGames";
import { Game } from "../../types";
import "./GameDetail.css";

interface GameDetailProps {
  game: Game | null;
}

const GameDetail: React.FC<GameDetailProps> = ({ game }) => {
  const { renderStars } = useGames();

  if (!game) {
    return <></>;
  }

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
          <h1 className="game-detail__name">{game.name}</h1>
          <ol className="game-detail__rating">{renderStars(game)}</ol>
          <span
            className={game.isFree ? "game-detail__price" : undefined}
          >{`${gamePrice}`}</span>
        </div>
        <div className="game-detail__genders-section">
          <h2 className="game-detail__genders-title-section">Genders</h2>
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
          <h2 className="game-detail__genders-title-section">Description</h2>
          <p>{game.description}</p>
        </div>
        <div className="game-detail__details">
          <h2 className="game-detail__genders-title-section">Developer:</h2>
          <span>{game.developer}</span>
        </div>
        <div className="game-detail__details">
          <h2 className="game-detail__genders-title-section">Date:</h2>
          <span>{game.date}</span>
        </div>
      </div>
    </>
  );
};

export default GameDetail;
