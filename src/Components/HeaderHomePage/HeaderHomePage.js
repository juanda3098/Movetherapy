import React from "react";

import { Link } from "react-router-dom";

import "./HeaderHomePage.css";

function HeaderHomePage() {
  return (
    <div className="o-header-container">
      <h1 className="o-header-title">Move Therapy</h1>
      <div className="o-header-buttons-container">
        <Link to="/">
          <button className="o-header-button">Servicios</button>
        </Link>
        <Link to="/">
          <button className="o-header-button">Quienes Somos</button>
        </Link>
        <Link to="/">
          <button className="o-header-button">Contactenos</button>
        </Link>
        <Link to="/">
          <button className="o-header-button">Ingresar</button>
        </Link>
      </div>
    </div>
  );
}

export default HeaderHomePage;
