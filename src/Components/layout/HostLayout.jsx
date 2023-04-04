import { NavLink, Outlet } from "react-router-dom";

const HostLayout = () => {
  const activeLink = ({ isActive }) => (isActive ? "host-active-link" : "");
  return (
    <>
      <nav className="host-nav">
        <NavLink className={activeLink} end to="/host">
          Dashboard
        </NavLink>
        <NavLink className={activeLink} to="/host/income">
          Income
        </NavLink>
        <NavLink className={activeLink} to="/host/reviews">
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
};

export default HostLayout;
