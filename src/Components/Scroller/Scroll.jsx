import React from "react";

import "./Scroll.css";

function Scroll() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling
    });
  };
  return (
    <div>
      <button className="scroll-btn" onClick={scrollToTop}>
        Top
      </button>
    </div>
  );
}

export default Scroll;
