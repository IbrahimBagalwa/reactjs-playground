import { useOutletContext } from "react-router-dom";
const HostVanInfo = () => {
  const [hostVan] = useOutletContext();
  return (
    <section className="host-van-detail-info">
      <h4>
        Name: <span>{hostVan.name}</span>
      </h4>
      <h4>
        Category: <span>{hostVan.type}</span>
      </h4>
      <h4>
        Descriotion: <span>{hostVan.description}</span>
      </h4>
      <h4>
        Visibility: <span>Public</span>
      </h4>
    </section>
  );
};

export default HostVanInfo;
