import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
// import Logo from "../logo.png";

function Header() {
  const [showMenu, setshowMenu] = useState(false);

  const handleShowMenu = () => {
    setshowMenu(!showMenu);
  };

  return (
    <header>
      <div className="logo">
        {/* <img src={Logo} alt={Logo} /> */}
        <h1>Rotz Empire</h1>
      </div>
      <FontAwesomeIcon icon={faBars} onClick={handleShowMenu} />
      <nav className={`nav ${showMenu ? "visible" : ""}`}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/prices">Prices</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
