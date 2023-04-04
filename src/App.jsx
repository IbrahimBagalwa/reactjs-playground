import { Layout, HostLayout } from "./Components";
import {
  About,
  Dashboard,
  DetailVanHost,
  DetailVans,
  Home,
  Income,
  ListedVans,
  Reviews,
  Vans,
} from "./pages";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:vanID" element={<DetailVans />} />

          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="vans" element={<ListedVans />} />
            <Route path="vans/:id" element={<DetailVanHost />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
