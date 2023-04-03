import Navigation from "./Components/layout/Navigation";
import { About, Home, Vans } from "./pages";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
