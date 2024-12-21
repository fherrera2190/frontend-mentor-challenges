import { Link } from "react-router-dom";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import ThemeContext from "../context/ThemeContext";
import { useContext } from "react";
export const Navbar = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <header>
      <div className="navbar">
        <Link to="/" className="nav-link">
          <div className="title">Where is the World?</div>
        </Link>
        <button className="mode" onClick={toggleTheme}>
          {isDarkMode ? (
            <FontAwesomeIcon icon={faSun} />
          ) : (
            <FontAwesomeIcon icon={faMoon} />
          )}
          <p>Dark Mode</p>
        </button>
      </div>
    </header>
  );
};
