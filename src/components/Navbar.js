import React, { useContext, useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { BsFillCartCheckFill } from "react-icons/bs";
import { MdDarkMode } from "react-icons/md";
import NoteContext from "../context/NoteContext";

const Navbar = () => {
  const [mode, setMode] = useState('light');
  const {count,} = useContext(NoteContext);
  const handleMode = ()=>{
      if (mode=='light') {
        setMode("dark")
      } else {
        setMode("light")
      }
  }
 
 
  useEffect(() => {
    if (mode === 'light') {
      document.body.classList.add('light_mode');
      document.body.classList.remove('dark_mode');
    } else {
      document.body.classList.add('dark_mode');
      document.body.classList.remove('light_mode');
    }
  }, [mode]);
  

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
                <Link to="/Cart">
                  <BsFillCartCheckFill size="30px" color="white"/>{count}
                </Link>
              </li>
              <li>
                <Link onClick={handleMode}>{mode}
                  <MdDarkMode size="20px" color="white"/>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
