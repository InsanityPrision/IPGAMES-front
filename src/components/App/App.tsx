import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import "./App.css";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <main className="main-container">
        <Outlet />
      </main>
    </>
  );
};

export default App;
