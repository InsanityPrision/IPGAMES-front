import { Navigate, Route, Routes } from "react-router";
import { lazy } from "react";
import GameListPage from "../game/pages/GamesListPage/GamesListPage";
import GameDetailPage from "../game/pages/GameDetailPage/GameDetailPage";
import App from "../components/App/App";

const AddGamePage = lazy(() => import("../game/pages/AddGamePage/AddGamePage"));

const NotFoundPage = lazy(() => import("../pages/NotFoundPage/NotFoundPage"));

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Navigate to={"/games"} />} />
        <Route path="games" element={<GameListPage />} />
        <Route path="add-game" element={<AddGamePage />} />
        <Route path="game-detail/:_id" element={<GameDetailPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
