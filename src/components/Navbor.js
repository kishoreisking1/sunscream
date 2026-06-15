import React from "react";
import { Link } from "react-router-dom";

function Navbor() {
  return (
    <nav className="navbar">
      <div className="logo">
        ☀ SUNSCREAM
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/menu">Products</Link>
        <Link to="/about">About</Link>
        <Link to="/faq">FAQ</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbor;