import React, { useContext } from "react";

import LoginContext from "../../Context/LoginContext";
import { useHistory, Link } from "react-router-dom";

import Logo from "../../Img/User/Logo.svg";
import Logout from "../../Img/User/logout.svg";

import "./Header.scss";

function Header() {
  const history = useHistory();
  const { user, logout } = useContext(LoginContext);

  return (
    <div className="o-header-user">
      <div className="o-header-user-link">
        <Link to="/user" className="o-link">
          <img src={Logo} alt="" className="o-header-icon" />
        </Link>
        <Link to="/user/appointment" className="o-link">
          <h4>Mis citas</h4>
        </Link>
        <Link to="/user/routine" className="o-link">
          <h4>Mis rutinas</h4>
        </Link>
      </div>
      <div className="o-header-detail-link">
        <h4>{`${user.nombre1} ${user.nombre2} ${user.apellido1} ${user.apellido2}`}</h4>
        <img
          src={Logout}
          alt=""
          className="o-exit-icon"
          onClick={() => logout(history)}
        />
      </div>
    </div>
  );
}

export default Header;
