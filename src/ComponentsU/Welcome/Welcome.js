import React, { useContext } from 'react';

import LoginContext from "../../Context/LoginContext";

import Header from '../Header/Header';

import Logo from '../../Img/Admin/Logo2.png'

import './Welcome.scss';

function Welcome() {
  const { user } = useContext(LoginContext);
    return (
      <div>
        <Header />
        <div className="o-admin-body">
          <div className="o-body-welcome">
            <img src={Logo} alt="" className="o-img-welcome" />
            <h1 className="o-title-welcome">Rehabilitación física con amor</h1>
            <h2 className="o-title-welcome" style={{ marginTop: "2rem" }}>
              Bienvenido
            </h2>
            <h4>{`${user.nombre1} ${user.nombre2} ${user.apellido1} ${user.apellido2}`}</h4>
          </div>
        </div>
      </div>
    );
}

export default Welcome