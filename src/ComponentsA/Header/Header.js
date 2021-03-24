import React, { useState, useContext } from "react";
import LoginContext from "../../Context/LoginContext";

import { useHistory } from "react-router-dom";

import Logout from "../../Img/Admin/logout.svg";

import "./Header.scss";

function Header() {
  const history = useHistory();

  const [title] = useState("Panel de control");

  const { user, logout } = useContext(LoginContext);

  return (
    <div className="o-headerA-container">
      <h2 className="o-title-headerA">{title}</h2>
      <div className="o-label-headerA">
        <p style={{ textTransform: "capitalize" }}>{`${user.nombre} ${user.apellido}`}</p>
        <img
          src={Logout}
          alt=""
          className="o-headerA-logout"
          onClick={() => logout(history)}
        />
      </div>
    </div>
  );
}

export default Header;
