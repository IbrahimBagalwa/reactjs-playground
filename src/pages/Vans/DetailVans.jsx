import { useState, useEffect } from "react";
import { useLocation, Link, useParams } from "react-router-dom";

const DetailVans = () => {
  const location = useLocation();
  const { vanID } = useParams();
  const [van, setVan] = useState({});
  const fetchSingleVan = async () => {
    const res = await fetch(`/api/vans/${vanID}`);
    const data = await res.json();
    setVan(data.vans);
  };
  useEffect(() => {
    fetchSingleVan();
  }, []);
  const typeVansPath = location.state?.search.split("=")[1] || "all";
  return (
    <div className="van-detail-container">
      <Link
        to={location.state ? `..?${location.state.search}` : ".."}
        relative="path"
        className="back-button"
      >
        &larr; <span>{`Back to ${typeVansPath} vans`}</span>
      </Link>
      {van ? (
        <div className="van-detail">
          <img src={van.imageUrl} />
          <i className={`van-type ${van.type} selected`}>{van.type}</i>
          <h2>{van.name}</h2>
          <p className="van-price">
            <span>${van.price}</span>/day
          </p>
          <p>{van.description}</p>
          <button className="link-button">Rent this van</button>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default DetailVans;
