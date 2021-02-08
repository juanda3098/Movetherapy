import React from "react";

import { Link } from "react-router-dom";

import Logo from "../../Img/User/Logo.svg";
import Exit from "../../Img/User/logout.svg";

import "./Header.scss";

function Header() {
  return (
    <div className="o-header-user">
      <div className="o-header-user-link">
        <Link to="/User" className="o-link">
          <img src={Logo} alt="" className="o-header-icon" />
        </Link>
        <Link to="/User/Citas" className="o-link">
          <h4>Mis citas</h4>
        </Link>
        <Link to="/User/Rutinas" className="o-link">
          <h4>Mis rutinas</h4>
        </Link>
      </div>
      <div className="o-header-detail-link">
        <h4>Juan David Posso Rengifo</h4>
        <Link to="/User/Rutinas">
          <img src={Exit} alt="" className="o-exit-icon" />
        </Link>
      </div>
    </div>
  );
}

export default Header;
