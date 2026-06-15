import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/sunscream.png";

function Navbor() {
  return (
    <nav className="Navbor">
      <div className="leftSide">
        <img src={logo} alt="Logo" />
      </div>

      <div className="rightSide">
        <Link to="/">Home</Link>
        <Link to="/menu">Products</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
}

export default Navbor;