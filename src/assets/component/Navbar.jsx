import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false); // state for menu toggle

  return (
    <nav className="navbar">
      {/* Logo */}
      <h1 className="logo" onClick={() => navigate("/")}>
        <i className="fas fa-film"></i> CineScope
      </h1>

      {/* Hamburger Icon */}
      <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>

      {/* Links */}
      <ul className={isOpen ? "nav-links open" : "nav-links"}>
        <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
        <li><Link to="/movies/top_rated"  onClick={() => setIsOpen(false)}>Top Rated</Link></li>
        <li><Link to="/movies/upcoming" onClick={() => setIsOpen(false)}>Upcoming</Link></li> 
      </ul>
    </nav>
  );
}

export default Navbar;
