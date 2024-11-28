import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from "react-router-dom";
import App from "../components/App/App";
import GameListPage from "../games/pages/GameListPage/GameListPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Navigate to={"/games"} />} />
      <Route path="games" element={<GameListPage />} />
    </Route>,
  ),
);

export default router;
