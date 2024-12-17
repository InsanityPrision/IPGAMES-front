import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { gamesClient } from "../../client/GamesClient";
import AddGame from "../../components/AddGame/AddGame";
import { Game } from "../../types";
import loadErrorAlert from "../../../toast/toastError/loadErrorAlert";
import loadSuccesAlert from "../../../toast/toastSucces/loadSuccesAlert";
import "./AddGamePage.css";

const AddGamePage: React.FC = () => {
  const navigate = useNavigate();

  const createNewGame = async (gamesData: Omit<Game, "_id">) => {
    try {
      const newGame = await gamesClient.createGame(gamesData);
      if (!newGame) {
        throw new Error("Failed creating game");
      }

      loadSuccesAlert("Game created", "ok");
    } catch {
      loadErrorAlert("Failed creating game");
    }
  };

  const sendNewGameData = async (gamesData: Omit<Game, "_id">) => {
    await toast.promise(
      createNewGame(gamesData),
      {
        pending: {
          render() {
            return "Creating game";
          },
          icon: <span aria-label="Loading" className="loader"></span>,
        },
      },
      {
        closeButton: false,
      },
    );

    navigate("/games");
  };

  return (
    <>
      <h1 className="form-title">Add Game</h1>
      <AddGame sendData={sendNewGameData} />
    </>
  );
};

export default AddGamePage;
