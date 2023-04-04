import { useParams } from "react-router-dom";

const DetailVanHost = () => {
  const { id } = useParams();
  return <div>DetailVanHost {id}</div>;
};

export default DetailVanHost;
