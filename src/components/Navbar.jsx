import React from "react";
import { Link } from "react-scroll"; // Import from react-scroll
import "./Navbar.css"; // Make sure to include the CSS for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#home" className="logo">LAND OF AI</a>
        <ul className="nav-links">
          <li><Link to="features" smooth={true} duration={500}>Features</Link></li>
          <li><Link to="about" smooth={true} duration={500}>About</Link></li>
          <li><Link to="activities" smooth={true} duration={500}>Activities</Link></li>
          <li><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
          <li><Link to="testimonials" smooth={true} duration={500}>Testimonials</Link></li>
          <li><Link to="team" smooth={true} duration={500}>Team</Link></li>
          <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar