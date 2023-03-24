import { Category } from "../../components/category-item";
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
