import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const DetailVans = () => {
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
  return (
    <div className="van-detail-container">
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
