import React, { useState } from "react";

// import { BrowserRouter, Switch, Route, useRouteMatch } from "react-router-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Menu from "../Menu/Menu";
import Patients from "../Patients/Patients";
import Exercise from "../Exercise/Exercise";
import Header from "../Header/Header";

// import Logo from '../../Img/Admin/Logo2.png'

import "./Admin.scss";

function Admin() {

  const [admin, setaAdmin] = useState("Diana Mesa");

  const outputEvents = () => {
    setaAdmin(admin)
  }

  return (
    <BrowserRouter>
      <div className="o-admin-container">
        <div className="o-admin-menu">
          <Menu />
        </div>
        <div className="o-admin-field">
          <Header />
          <div className="o-admin-body">
            <Switch>
              {/* <div className="o-body-welcome">
                <img src={Logo} alt="" className="o-img-welcome" />
                <h1 className="o-title-welcome">Bienvenido al panel</h1>
                <h1 className="o-title-welcome">administrativo</h1>
                <p>{admin}</p>
              </div> */}
              <Route path="/Admin/Patient" exact component={Patients} />
              <Route path="/Admin/Exercise" exact component={Exercise} />
            </Switch>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default Admin;
