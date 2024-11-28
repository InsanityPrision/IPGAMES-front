import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default App;
