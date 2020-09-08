// import React, { useState } from "react";
import React from "react";

// import { BrowserRouter, Switch, Route, useRouteMatch } from "react-router-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Menu from "../Menu/Menu";
import Welcome from '../Welcome/Welcome';
import Header from "../Header/Header";
import Patients from "../Patients/Patients";
import Appointment from "../Appointment/Appointment";
import Routines from "../Routines/Routines"
import Exercises from "../Exercises/Exercises";
import Profiles from "../Profiles/Profiles";

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
              <Route path="/Admin/Appointment" exact component={Appointment} />
              <Route path="/Admin/Routine" exact component={Routines} />
              <Route path="/Admin/Exercise" exact component={Exercises} />
              <Route path="/Admin/Profile" exact component={Profiles} />
            </Switch>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default Admin;
