import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Component/Layout/layout";

import Home from "./Component/Home/home";
import World from "./Component/World/world";
import Business from "./Component/Business/business";
import Politics from "./Component/Politics/politics";
import Health from "./Component/Health/health";
import Entertainment from "./Component/Entertainment/entertainment";
import Sports from "./Component/Sports/sports";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="World" element={<World />} />
          <Route path="Business" element={<Business />} />
          <Route path="Politics" element={<Politics />} />
          <Route path="Health" element={<Health />} />
          <Route path="Entertainment" element={<Entertainment />} />
          <Route path="sports" element={<Sports />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);