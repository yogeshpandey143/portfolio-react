import React from "react";
import "./MyService.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

function MyService() {
  return (
    <div id="service" className="service-container">
      <h1 className="heading">My Services</h1>
      <div className="card-container">
        <div className="card">
          <div className="card-logo">Frontend</div>
          <h5 className="card-heading"></h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
            reiciendis eos incidunt magnam a quo? Repudiandae tempora facilis
            quod porro distinctio dolorum, ducimus nobis obcaecati magnam.
            Explicabo ducimus temporibus illum?
          </p>
          <button className="card-btn">read more</button>
        </div>
        <div className="card">
          <div className="card-logo">Backend</div>
          <h5 className="card-heading"></h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
            reiciendis eos incidunt magnam a quo? Repudiandae tempora facilis
            quod porro distinctio dolorum, ducimus nobis obcaecati magnam.
            Explicabo ducimus temporibus illum?
          </p>
          <button className="card-btn">read more</button>
        </div>
        <div className="card">
          <div className="card-logo">Full Stack Dev</div>
          <h5 className="card-heading"></h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
            reiciendis eos incidunt magnam a quo? Repudiandae tempora facilis
            quod porro distinctio dolorum, ducimus nobis obcaecati magnam.
            Explicabo ducimus temporibus illum?
          </p>
          <button className="card-btn">read more</button>
        </div>
      </div>
    </div>
  );
}

export default MyService;
