import { NavLink, Outlet } from "react-router-dom";

const HostLayout = () => {
  const activeLink = ({ isActive }) => (isActive ? "host-active-link" : "");
  return (
    <>
      <nav className="host-nav">
        <NavLink className={activeLink} end to=".">
          Dashboard
        </NavLink>
        <NavLink className={activeLink} to="income">
          Income
        </NavLink>
        <NavLink className={activeLink} to="vans">
          Vans
        </NavLink>
        <NavLink className={activeLink} to="reviews">
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
};

export default HostLayout;
