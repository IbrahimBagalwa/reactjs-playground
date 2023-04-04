import { Layout } from "./Components";
import { About, DetailVans, Home, Vans } from "./pages";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
          <Route path="/vans/:vanID" element={<DetailVans />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
