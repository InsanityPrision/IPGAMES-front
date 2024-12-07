import { Navigate, Route, Routes } from "react-router";
import App from "../components/App/App";
import GameListPage from "../game/pages/GamesListPage/GamesListPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Navigate to={"/games"} />} />
        <Route path="games" element={<GameListPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
