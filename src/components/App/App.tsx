import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";
import Header from "../Header/Header";
import NavMenu from "../NavMenu/NavMenu";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <main className="main-container">
        <Outlet />
      </main>
      <ToastContainer
        position="top-center"
        hideProgressBar={true}
        autoClose={2000}
        icon={false}
        limit={3}
      />
      <NavMenu />
    </>
  );
};

export default App;
