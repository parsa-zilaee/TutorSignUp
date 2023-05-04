import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./NavbarStyles.css";
import logo from "../images/logo.PNG";

const NavBar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <nav className={click ? "navbar active" : "navbar"}>
      <div className="navbar-logo">
        <Link to="/">
          <img src={logo} alt="Logo" height={60} />
        </Link>
      </div>

      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="#">Find a Tutor</Link>
        </li>
        <li>
          <Link to="#">About Us</Link>
        </li>
        <li>
          <Link to="#">Contact Us</Link>
        </li>
        <li>
          <Link to="#">Sign In</Link>
        </li>
        <li>
          <Link to="#">Sign Up</Link>
        </li>
        <li>
          <Link to="#">Create a Tutor</Link>
        </li>
      </ul>

      <div className="navbar-icon" onClick={handleClick}>
        {click ? (
          <FaTimes size={15} className="icon" />
        ) : (
          <FaBars size={15} className="icon" />
        )}
      </div>
    </nav>
  );
};

export default NavBar;