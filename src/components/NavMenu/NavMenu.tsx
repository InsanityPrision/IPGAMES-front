import { NavLink } from "react-router-dom";
import "./NavMenu.css";

const NavMenu: React.FC = () => {
  return (
    <nav className="navMenu-container">
      <NavLink to={"/games"} className={"navMenu-container__link"}>
        <div className="navMenu-container__link--active"></div>
        <img src="/home.svg" alt="home icon" width={20} height={20} />
        <span className="navMenu-container__text">Home</span>
      </NavLink>
    </nav>
  );
};

export default NavMenu;