import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import "./App.css";
import NavMenu from "../NavMenu/NavMenu";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <main className="main-container">
        <Outlet />
      </main>
      <NavMenu />
    </>
  );
};

export default App;
