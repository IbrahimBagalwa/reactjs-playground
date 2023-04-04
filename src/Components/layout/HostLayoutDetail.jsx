import { NavLink } from "react-router-dom";

const HostLayoutDetail = () => {
  const activeLink = ({ isActive }) => (isActive ? "host-active-link" : "");

  return (
    <>
      <nav className="host-nav">
        <NavLink className={activeLink} to="." end>
          Details
        </NavLink>
        <NavLink className={activeLink} to="pricing">
          Princing
        </NavLink>
        <NavLink className={activeLink} to="photos">
          Photos
        </NavLink>
      </nav>
    </>
  );
};
export default HostLayoutDetail;
