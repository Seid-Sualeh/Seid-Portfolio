import React from "react";
import "./loader.css";
import favicon from "../../../assets/image/favicon.ico";
const Loader = () => {
  return (
    <div id="loader">
      <div className="spinner"></div>
      <img src={favicon} alt="Logo" className="logoRotate" />
    </div>
  );
};

export default Loader;
