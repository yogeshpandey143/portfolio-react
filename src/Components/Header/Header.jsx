import "./Header.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

import image from "../Pic/profile1.png";

function Header() {
  return (
    <div className="head-container">
      <div className="left-container">
        <div className="left-inner">
          <h5 className="greet-heading">Hi, i am...</h5>
          <h1 className="name">Yogesh Pandey</h1>
          <h5 className="greet-heading">And i am a backend Developer</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            eos vitae illo deserunt? Earum, non voluptatibus. Voluptatem quos
            facilis dolores iusto, temporibus quidem! Autem assumenda ipsam.
          </p>
          <div className="social-links">
            <a className="link" href="https://www.linkedin.com/in/yogi9956/">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a className="link" href="#">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a className="link" href="https://github.com/yogeshpandey143">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              className="link"
              href="https://www.geeksforgeeks.org/user/yogeshkf8h3/?utm_source=geeksforgeeks&utm_medium=my_profile&utm_campaign=auth_user"
            >
              gfg
            </a>
            <button className="btn">Contact me</button>
          </div>
        </div>
      </div>
      <div className="right-container">
        <div className="right-inner">
          <img className="profile-img" src={image} alt="my image" />
        </div>
      </div>
    </div>
  );
}

export default Header;
