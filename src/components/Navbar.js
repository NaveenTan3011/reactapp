import React from "react";
import { NavLink, Link} from "react-router-dom";

const Navbar = () => {
  return (
    <>
    <nav>
      <div className="container">
      <div className="logo">
        <Link to= "/">Naveen</Link>
      </div>
      <div className="navigaion_list">
        <ul>
          <li><NavLink to="/" >Home</NavLink></li>
          <li><NavLink to="/About" >About</NavLink></li>
          <li><NavLink to="/Services" >Services</NavLink></li>
          <li><NavLink to="/Contact" >Contact us</NavLink></li>
        </ul>
      </div>
      </div>
    </nav>
    </>
  );
};

export default Navbar;
