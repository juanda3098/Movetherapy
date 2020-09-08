// import React, { useState } from "react";
import React from "react";

// import { BrowserRouter, Switch, Route, useRouteMatch } from "react-router-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Menu from "../Menu/Menu";
import Welcome from '../Welcome/Welcome';
import Patients from "../Patients/Patients";
import Exercise from "../Exercise/Exercise";
import Header from "../Header/Header";

import "./Admin.scss";

function Admin() {
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
              <Route path="/Admin" exact component={Welcome} />
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
