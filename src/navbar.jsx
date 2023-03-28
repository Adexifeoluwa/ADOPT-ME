import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
//import { Link } from "react-router-dom";
import "./style.css";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header className="nav-header">
      <nav>
        <a href="/#" className="home_nav" style={{ fontSize: "20px" }}>
          Home
        </a>
        <a href="/#" style={{ fontSize: "20px" }}>
          Pets
        </a>
        <a href="/#" style={{ fontSize: "20px" }}>
          About us
        </a>
        <a href="/#" className="contact_nav" style={{ fontSize: "20px" }}>
          Contact
        </a>
        <button className="nav-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
      <button></button>
      {/* <Link to="/"> Adopt Me!</Link> */}
    </header>
  );
}

export default Navbar;
