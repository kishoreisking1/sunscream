import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/sunscream.png';

function Navbor() {
  return (
    <div className="Navbor">
      <div className="leftSide">
        <img src={logo} alt="Logo" />
      </div>

      <div className="rightSide">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About</Link>
        
      </div>
    </div>
  );
}

export default Navbor;