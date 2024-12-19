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
  scroll(0, 0);

  const createNewGame = async (gamesData: Omit<Game, "_id">) => {
    try {
      await gamesClient.createGame(gamesData);

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
    <main className="main-container">
      <h1 className="form-title">Add Game</h1>
      <AddGame sendData={sendNewGameData} />
    </main>
  );
};

export default AddGamePage;
