import React from "react";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-items">
        <div className="footer-list">
          <h5 className="list-heading">Projects</h5>
          <ul className="list-items">
            <li className="links">
              <a href="">E-Book</a>
            </li>
            <li className="links">
              <a href="">CinePrime</a>
            </li>
            <li className="links">
              <a href="">SnapTalk</a>
            </li>
            <li className="links">
              <a href="">E-Wallet</a>
            </li>
          </ul>
        </div>
        <div className="footer-list">
          <h5 className="list-heading">My Works</h5>
          <ul className="list-items">
            <li className="links">
              <a href="">frontend</a>
            </li>
            <li className="links">
              <a href="">backend</a>
            </li>
            <li className="links">
              <a href="">fullstack</a>
            </li>
            <li className="links">
              <a href=""></a>{" "}
            </li>
          </ul>
        </div>
        <div className="footer-list">
          <h5 className="list-heading">Social Links</h5>
          <ul className="list-items">
            <li className="links">
              <a href="">LinkedIn</a>
            </li>
            <li className="links">
              <a href="">GitHub</a>
            </li>
            <li className="links">
              <a href="">Twitter</a>
            </li>
            <li className="links">
              <a href="">GeeksForGeeks</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
