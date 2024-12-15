import { gamesClient } from "../../client/GamesClient";
import AddGame from "../../components/AddGame/AddGame";
import { Game } from "../../types";
import "./AddGamePage.css";

const AddGamePage: React.FC = () => {
  const sendNewGameData = async (gamesData: Omit<Game, "_id">) => {
    try {
      const newGame = await gamesClient.createGame(gamesData);

      if (!newGame) {
        throw new Error("Failed creating game");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1 className="form-title">Add Game</h1>
      <AddGame sendData={sendNewGameData} />
    </>
  );
};

export default AddGamePage;
