import { NavLink } from "react-router-dom";
import "./NavMenu.css";

const NavMenu: React.FC = () => {
  return (
    <nav className="nav-menu">
      <NavLink to="/games" className="navMenu-container__link">
        <img src="/home.svg" alt="home icon" width={20} height={20} />
        <span className="navMenu-container__text">Home</span>
      </NavLink>
    </nav>
  );
};

export default NavMenu;
