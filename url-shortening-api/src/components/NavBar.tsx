import { useState } from "react";
import "./NavBar.css";


export const NavBar = () => {
  const [menuState, setMenuState] = useState(false);

  const showMenu = () => {
    setMenuState(!menuState);
    console.log("first");
  };

  return (
    <header>
      <div className="logo">
        <img src="./images/logo.svg" alt="" />
      </div>
      <button onClick={showMenu} className="menu-hamburger">
        {menuState ? (
          <i className="fa-solid fa-xmark"></i>
        ) : (
          <i className="fa-solid fa-bars"></i>
        )}
      </button>
      <nav className={`${menuState ? "showMenu" : ""}`}>
        <ul>
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Resources</a>
          </li>
          <hr />
          <li>
            <a href="#">Login</a>
          </li>
          <li className="btn">
            <a href="#">Sign Up</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
