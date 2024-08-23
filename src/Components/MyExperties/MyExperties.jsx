import React from "react";

import "./MyExperties.css";

function MyExperties() {
  return (
    <div className="ex-container">
      <div className="ex-head">
        <h5 className="heading">My Experties</h5>
      </div>
      <div className="ex-desc">
        <div className="right-ex">
          <div className="inner-right">
            <div className="experties-links">
              <a className="ex-link" href="">
                Java
              </a>
              <a className="ex-link" href="">
                Spring Boot
              </a>
              <a className="ex-link" href="">
                React Js
              </a>
              <a className="ex-link" href="">
                JavaScript
              </a>
              <a className="ex-link" href="">
                HTML
              </a>
              <a className="ex-link" href="">
                CSS
              </a>
              <a className="ex-link" href="">
                BootStrap
              </a>
              <a className="ex-link" href="">
                SQL
              </a>
            </div>
          </div>
        </div>
        <div className="left-ex">
          <div className="inner-left">
            <h5 className="ex-heading">I love these technologies..</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              eos vitae illo deserunt? Earum, non voluptatibus. Voluptatem quos
              facilis dolores iusto, temporibus quidem! Autem assumenda ipsam.
            </p>
            <button className="ex-btn">Hire me</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyExperties;
