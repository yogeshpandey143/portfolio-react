import React from "react";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">Yogesh Pandey</div>
        <div className="nav-mid">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Skills</a>
          <a href="#">Projects</a>
        </div>

        <button className="nav-btn">Download CV</button>
      </div>
    </nav>
  );
}

export default NavBar;
