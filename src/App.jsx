import { Routes, Route } from "react-router-dom";
import Home from "./router/home/Home";
import Navigation from "./router/navigation/Navigation";
const App = () => {
  const Shop = () => {
    return (
      <div>
        <h1>I'm rendering the Shop</h1>
      </div>
    );
  };
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
