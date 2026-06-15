import "./App.css";
import Navbor from "./components/Navbor";
import Footer from "./components/Footer";

import Home from "./page/Home";
import Menu from "./page/Menu";
import About from "./page/About";
import FAQ from "./page/FAQ";
import Contact from "./page/Contact";

import { Link } from "react-router-dom";


import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>

<Link to="/http://localhost:3000/menu">
  <button className="shop-btn">Shop Now</button>
</Link>

      <Navbor />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;