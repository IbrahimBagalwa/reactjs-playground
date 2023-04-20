import { Routes, Route } from "react-router-dom";
import Authentication from "./router/auth/Authentication";
import Home from "./router/home/Home";
import Navigation from "./router/navigation/Navigation";
import Shop from "./router/shop/Shop";
import Checkout from "./components/checkout/Checkout";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
