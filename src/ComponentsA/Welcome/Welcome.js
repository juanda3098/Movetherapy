import React, { useContext } from "react";
import LoginContext from "../../Context/LoginContext";

import Menu from "../Menu/Menu";
import Header from "../Header/Header";

import Logo from "../../Img/Admin/Logo2.png";

import "./Welcome.scss";

function Welcome() {
  const { user } = useContext(LoginContext);

  return (
    <div className="o-admin-container">
      <div className="o-admin-menu">
        <Menu />
      </div>
      <div className="o-admin-field">
        <Header />
        <div className="o-admin-body">
          <div className="o-body-welcome">
            <img src={Logo} alt="" className="o-img-welcome" />
            <h1 className="o-title-welcome">Bienvenido al panel</h1>
            <h1 className="o-title-welcome">administrativo</h1>
            <p style={{ textTransform: 'capitalize'}}>{`${user.nombre} ${user.apellido}`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
