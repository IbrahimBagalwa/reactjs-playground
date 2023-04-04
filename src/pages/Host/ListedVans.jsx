import { useState } from "react";
import "../../utils/mirage";
import { useEffect } from "react";
import { Link } from "react-router-dom";
const ListedVans = () => {
  const [hostListVans, setHostListVans] = useState([]);
  const fetchHostedVans = async () => {
    const res = await fetch("/api/host/vans");
    const data = await res.json();
    setHostListVans(data.vans);
  };
  useEffect(() => {
    fetchHostedVans();
  }, []);
  return (
    <section>
      <h1 className="host-vans-title">Your listed vans</h1>
      <div className="host-vans-list">
        {hostListVans.length > 0 ? (
          hostListVans.map(({ id, imageUrl, name, price }) => {
            return (
              <section key={id}>
                <Link className="host-van-link-wrapper" to={`/host/vans/${id}`}>
                  <div className="host-van-single">
                    <img src={imageUrl} alt={name} />
                    <div className="host-van-info">
                      <h3>{name}</h3>
                      <p>${price}</p>
                    </div>
                  </div>
                </Link>
              </section>
            );
          })
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
    </section>
  );
};

export default ListedVans;
