import { useOutletContext } from "react-router-dom";
const HostVanPhoto = () => {
  const [hostVan] = useOutletContext();
  return (
    <img
      src={hostVan.imageUrl}
      alt={hostVan.name}
      className="host-van-detail-image"
    />
  );
};

export default HostVanPhoto;
