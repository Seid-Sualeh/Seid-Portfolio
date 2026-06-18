import React from "react";
import "./loader.css";

const Loader = () => {
  return (
    <div id="loader">
      <div className="loader-content">
        <div className="loader-rings">
          <div className="loader-ring ring-1"></div>
          <div className="loader-ring ring-2"></div>
          <div className="loader-ring ring-3"></div>
        </div>
        <div className="loader-logo-box">
          <span className="loader-logo-mark">S</span>
        </div>
      </div>
    </div>
  );
};

export default Loader;
