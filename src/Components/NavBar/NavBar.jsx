import React from "react";
import "./NavBar.css";

function NavBar() {
  function handleDownload() {
    window.location.href =
      "https://drive.google.com/file/d/1B0SEcl5C1zycZDOgCJqBeGmPphxvOx8n/view?usp=sharing";
  }

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">Yogesh Pandey</div>
        <div className="nav-mid">
          <a href="#">Home</a>
          <a href="#header">About</a>
          <a href="#experties">Skills</a>
          <a href="#project">Projects</a>
        </div>

        <button className="nav-btn" onClick={handleDownload}>
          Download CV
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
