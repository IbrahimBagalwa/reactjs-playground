import { useEffect } from "react";
import "../../utils/mirage";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { fetchVans } from "../../utils/api";
const Vans = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [vans, setVans] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getVans() {
      setLoading(true);
      try {
        const data = await fetchVans();
        setVans(data.vans);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    getVans();
  }, []);

  const tyepeFilter = searchParams.get("type");
  const displayVans = tyepeFilter
    ? vans.filter((van) => van.type.toLowerCase() === tyepeFilter)
    : vans;
  const vanElements = displayVans.map((van) => (
    <div key={van.id} className="van-tile">
      <Link to={van.id} state={{ search: searchParams.toString() }}>
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
  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>The was an error: {error.message}</h1>;
  }
  return (
    <div className="van-list-container">
      <h1>Explore our van options</h1>
      <div className="van-list-filter-buttons">
        <button
          className={`van-type simple ${
            tyepeFilter === "simple" && "selected"
          }`}
          onClick={() => setSearchParams({ type: "simple" })}
        >
          Simple
        </button>
        <button
          className={`van-type luxury ${
            tyepeFilter === "luxury" && "selected"
          }`}
          onClick={() => setSearchParams({ type: "luxury" })}
        >
          Luxury
        </button>
        <button
          className={`van-type rugged ${
            tyepeFilter === "rugged" && "selected"
          }`}
          onClick={() => setSearchParams({ type: "rugged" })}
        >
          Rugged
        </button>
        {tyepeFilter && (
          <button
            className="van-type clear-filters"
            onClick={() => setSearchParams({})}
          >
            Clear-filters
          </button>
        )}
      </div>
      <div className="van-list">{vanElements}</div>
    </div>
  );
};

export default Vans;
