import React from "react";

import { Link } from "react-router-dom";

import Logo from "../../Img/LogoHeader.png";

import "./HeaderUserPage.css";

function HeaderUserPage() {
  return (
    <div className="o-header-user-container">
      <div className="o-flex">
        <Link to="/">
          <img className="o-header-user-logo" src={Logo} alt="" />
        </Link>
        <div className="o-header-user-buttons-container">
          <Link to="/Main/Services">
            <button className="o-header-user-button">Citas</button>
          </Link>
          <Link to="/Main/AboutUs">
            <button className="o-header-user-button">Rutinas</button>
          </Link>
        </div>
      </div>
      <div className="o-flex">
        <h1>UserName</h1>
        <div className="o-user-picture"></div>
      </div>
    </div>
  );
}

export default HeaderUserPage;
