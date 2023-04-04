import { useOutletContext } from "react-router-dom";

const HostVanPricing = () => {
  const [hostVan] = useOutletContext();
  return (
    <h2 className="host-van-price">
      ${hostVan.price} <span>/day</span>
    </h2>
  );
};

export default HostVanPricing;
