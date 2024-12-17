import { ToastContainer } from "react-toastify";
import { Outlet } from "react-router";
import { Suspense } from "react";
import Header from "../Header/Header";
import NavMenu from "../NavMenu/NavMenu";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Suspense>
        <main className="main-container">
          <Outlet />
        </main>
      </Suspense>
      <ToastContainer
        position="top-center"
        hideProgressBar={true}
        autoClose={2000}
        icon={false}
        limit={4}
      />
      <NavMenu />
    </>
  );
};

export default App;
