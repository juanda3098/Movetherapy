import React from "react";

import { Link } from "react-router-dom";

import Logo from "../../Img/LogoHeader.png";

import HeaderSelect from "../HeaderSelect/HeaderSelect"

import "./HeaderHomePage.scss";

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
          <button className="o-header-button">Quiénes somos</button>
        </Link>
        <Link to="/Main/ContactUs">
          <button className="o-header-button">Contáctenos</button>
        </Link>
        <Link to="/Main/Login">
          <button className="o-header-button">Ingresar</button>
        </Link>
      </div>
      <div className="o-header-selector">
        <HeaderSelect></HeaderSelect>
      </div>
    </div>
  );
}

export default HeaderHomePage;
