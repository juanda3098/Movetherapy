import React from "react";

import { Link } from "react-router-dom";

import Logo from "../../Img/LogoHeader.png";

import "./HeaderHomePage.css";

function HeaderHomePage() {
  return (
    <div className="o-header-container">
      <Link to="/">
        <img className="o-header-logo" src={Logo} alt="" />
      </Link>
      <div className="o-header-buttons-container">
        <Link to="/Main/Services">
          <button className="o-header-button">Servicios</button>
        </Link>
        <Link to="/Main/AboutUs">
          <button className="o-header-button">Quienes Somos</button>
        </Link>
        <Link to="/Main/ContactUs">
          <button className="o-header-button">Contactenos</button>
        </Link>
        <Link to="/Main/Login">
          <button className="o-header-button">Ingresar</button>
        </Link>
      </div>
    </div>
  );
}

export default HeaderHomePage;
