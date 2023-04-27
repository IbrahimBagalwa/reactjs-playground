import { Routes, Route } from "react-router-dom";
import Authentication from "./routes/auth/Authentication";
import Home from "./routes/home/Home";
import Navigation from "./routes/navigation/Navigation";
import Shop from "./routes/shop/Shop";
import Checkout from "./components/checkout/Checkout";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { checkUserSession } from "./redux/store/user/user.action";
import { getCurrentUser } from "./utils/firebase.util";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getCurrentUser().then((user) => console.log("GetCurrentUser: ", user));
    // dispatch(checkUserSession());
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
