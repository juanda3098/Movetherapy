import React from "react";

import { Link } from "react-router-dom";

import Logo from "../../Img/LogoHeader.png";

import "./HeaderHomePage.scss";

function HeaderHomePage() {
  return (
    <div className="o-header-container">
      <Link to="/">
        <img className="o-header-logo" src={Logo} alt="" />
      </Link>
      <div className="o-header-buttons-container">
        <Link to="/web/services">
          <button className="o-header-button">Servicios</button>
        </Link>
        <Link to="/web/aboutus">
          <button className="o-header-button">Quiénes somos</button>
        </Link>
        <Link to="/web/contactus">
          <button className="o-header-button">Contáctenos</button>
        </Link>
        <Link to="/web/login">
          <button className="o-header-button">Ingresar</button>
        </Link>
      </div>
    </div>
  );
}

export default HeaderHomePage;
