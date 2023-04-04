import { useState, useEffect } from "react";
import { Link, useParams, Outlet } from "react-router-dom";
import { HostLayoutDetail } from "../../Components";

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
          <HostLayoutDetail />
          <Outlet context={[hostVan]} />
        </div>
      </section>
    </div>
  );
};

export default DetailVanHost;
