import { useState } from "react";

import logo from "../assets/shared/logo.svg";
import hamburguer from "../assets/shared/icon-hamburger.svg";
import iconClose from "../assets/shared/icon-close.svg";

import "./NavBar.css";

export const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const showMenuBtn = () => {
    setShowMenu(!showMenu);
  };
  return (
    <header>
      <nav className="navbar bellefair-regular">
        <div className="navbar-header">
          <img src={logo} alt="Logo" className="logo" />
          <button
            onClick={showMenuBtn}
            className="hamburger-btn"
            aria-label="Open menu"
          >
            <img src={hamburguer} alt="hamburguer" />
          </button>
        </div>

        <ul className="nav-links">
          <li>
            <a href="#home">
              <b>00</b> HOME
            </a>
          </li>
          <li>
            <a href="#about">
              <b>01</b> DESTINATION
            </a>
          </li>
          <li>
            <a href="#services">
              <b>02</b> CREW
            </a>
          </li>
          <li>
            <a href="#contact">
              <b>03</b> TECHNOLOGY
            </a>
          </li>
        </ul>

        <ul className={`mobile-menu ${showMenu ? "show" : ""}`}>
          <div className="mobile-menu-btn">
            <button onClick={showMenuBtn}>
              <img src={iconClose} alt="iconClose" />
            </button>
          </div>

          <li>
            <a href="#home">
              <b>00</b> HOME
            </a>
          </li>
          <li>
            <a href="#about">
              <b>01</b> DESTINATION
            </a>
          </li>
          <li>
            <a href="#services">
              <b>02</b> CREW
            </a>
          </li>
          <li>
            <a href="#contact">
              <b>03</b> TECHNOLOGY
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
