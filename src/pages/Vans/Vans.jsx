import { useEffect } from "react";
import "../../utils/mirage";
import { useState } from "react";
import { Link } from "react-router-dom";
const Vans = () => {
  const [vans, setVans] = useState([]);
  const fetchVans = async () => {
    const res = await fetch("/api/vans");
    const vans = await res.json();
    setVans(vans.vans);
  };
  useEffect(() => {
    fetchVans();
  }, []);
  const vanElements = vans.map((van) => (
    <div key={van.id} className="van-tile">
      <Link to={`/vans/${van.id}`}>
        <img src={van.imageUrl} />
        <div className="van-info">
          <h3>{van.name}</h3>
          <p>
            ${van.price}
            <span>/day</span>
          </p>
        </div>
      </Link>
      <i className={`van-type ${van.type} selected`}>{van.type}</i>
    </div>
  ));

  return (
    <div className="van-list-container">
      <h1>Explore our van options</h1>
      <div className="van-list">{vanElements}</div>
    </div>
  );
};

export default Vans;
