import "./App.css";
import Navbor from "./components/Navbor";

import Home from "./page/Home";
import Menu from "./page/Menu";
import About from "./page/About";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbor />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;