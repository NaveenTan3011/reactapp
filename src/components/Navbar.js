import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { BsFillCartCheckFill } from "react-icons/bs";

const Navbar = ({count, }) => {
 

  return (
    <>
      <nav>
        <div className="container">
          <div className="logo">
            <Link to="/">Naveen</Link>
          </div>
          <div className="navigaion_list">
            <ul>
              <li><NavLink to="/">Home </NavLink></li>
              <li><NavLink to="/About">About </NavLink></li>
              <li><NavLink to="/Services">Services</NavLink></li>
              <li><NavLink to="/Contact">Contact us</NavLink></li>
              <li><NavLink to="/Shopping">Shopping </NavLink></li>
              <li>
                <NavLink to="/Cart">
                  <BsFillCartCheckFill size="30px" color="white"/>{count}
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
