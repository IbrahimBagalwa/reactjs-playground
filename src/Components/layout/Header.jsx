import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
const Header = () => {
  const activeLink = ({ isActive }) => (isActive ? "active-link" : "");
  return (
    <header>
      <Link className="site-logo" to="/">
        #VanLife
      </Link>
      <nav>
        <NavLink className={activeLink} to="/host">
          Host
        </NavLink>
        <NavLink className={activeLink} to="/about">
          About
        </NavLink>
        <NavLink className={activeLink} to="/vans">
          Vans
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
