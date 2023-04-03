import Navigation from "./Components/layout/Navigation";
import { About, DetailVans, Home, Vans } from "./pages";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
        <Route path="/vans/:vanID" element={<DetailVans />} />
      </Routes>
    </div>
  );
}

export default App;
