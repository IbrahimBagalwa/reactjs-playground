import { Category } from "../../components/directory-item";
import { Outlet } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <Outlet />
      <Category />
    </div>
  );
};
export default Home;
