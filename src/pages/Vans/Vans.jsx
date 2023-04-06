import { useEffect } from "react";
import "../../utils/mirage";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
const Vans = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [vans, setVans] = useState([]);
  const fetchVans = async () => {
    const res = await fetch("/api/vans");
    const vans = await res.json();
    setVans(vans.vans);
  };
  useEffect(() => {
    fetchVans();
  }, []);
  const tyepeFilter = searchParams.get("type");
  const displayVans = tyepeFilter
    ? vans.filter((van) => van.type.toLowerCase() === tyepeFilter)
    : vans;

  const vanElements = displayVans.map((van) => (
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
  /**
   * Challenge: add links to filter the vans by type. Use a hard-coded
   * `to` string like we just practiced. The types are "simple",
   * "luxury", and "rugged".
   *
   * For now, give the Links a className of `van-type simple` (and
   * manually replace "simple" with "luxury" and "rugged" for
   * the Links that filter by those types.)
   *
   * Include a Link to clear the filters. Its className should be
   * `van-type clear-filters`
   */

  return (
    <div className="van-list-container">
      <h1>Explore our van options</h1>
      <div className="van-list-filter-buttons">
        <button
          className="van-type simple"
          onClick={() => setSearchParams({ type: "simple" })}
        >
          Simple
        </button>
        <button
          className="van-type luxury"
          onClick={() => setSearchParams({ type: "luxury" })}
        >
          Luxury
        </button>
        <button
          className="van-type rugged"
          onClick={() => setSearchParams({ type: "rugged" })}
        >
          Rugged
        </button>
        <button
          className="van-type clear-filters"
          onClick={() => setSearchParams({})}
        >
          Clear-filters
        </button>
      </div>
      <div className="van-list">{vanElements}</div>
    </div>
  );
};

export default Vans;
