import GameClient from "../../client/GameClient";

const GameListPage: React.FC = () => {
  const gameClient = new GameClient();
  gameClient.getGames();

  return <h1>Games</h1>;
};

export default GameListPage;
