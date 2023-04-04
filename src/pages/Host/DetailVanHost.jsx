import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

import { useParams } from "react-router-dom";

const HostLayout = () => {
  const activeLink = ({ isActive }) => (isActive ? "host-active-link" : "");
  return (
    <>
      <nav className="host-nav">
        <NavLink className={activeLink}>Details</NavLink>
        <NavLink className={activeLink}>Princing</NavLink>
        <NavLink className={activeLink} to="/host/vans">
          Photos
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
};

const DetailVanHost = () => {
  const [hostVan, setHostListVans] = useState({});
  const { id } = useParams();
  const fetchSingleHostVan = async () => {
    const res = await fetch(`/api/host/vans/${id}`);
    const data = await res.json();
    setHostListVans(data.vans[0]);
  };
  useEffect(() => {
    fetchSingleHostVan();
  }, []);
  return (
    <div>
      {/* <Link to="/host/vans">Back to all vans</Link> */}
      <Link to=".." relative="path" className="back-button">
        &larr; <span>Back to all vans</span>
      </Link>
      <section>
        <div className="host-van-detail-layout-container">
          <div className="host-van-detail">
            <img src={hostVan.imageUrl} alt={hostVan.name} />
            <div className="host-van-detail-info-text">
              <i className={`van-type van-type-${hostVan.type}`}>
                {hostVan.type}
              </i>
              <h3>{hostVan.name}</h3>
              <h4>${hostVan.price}</h4>
            </div>
          </div>
          <div>
            <h4>Name:{hostVan.name}</h4>
            <h4>Category:{hostVan.type}</h4>
            <p>Descriotion:{hostVan.description} </p>
            <h4>Visibility: Public</h4>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DetailVanHost;
