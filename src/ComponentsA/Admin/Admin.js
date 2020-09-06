import React from "react";

// import { BrowserRouter, Switch, Route, useRouteMatch } from "react-router-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Menu from "../Menu/Menu";
import Patients from "../Patients/Patients";
import Exercise from "../Exercise/Exercise";
import Header from "../Header/Header";

import "./Admin.scss";

function Admin() {
  // const { path } = useRouteMatch();

  return (
    <BrowserRouter>
      <div className="o-admin-container">
        <div className="o-admin-menu">
          <Menu />
        </div>
        <div className="o-admin-field">
          {/* <div className="o-admin-fild-header">
          </div> */}
          <Header />
          <div className="o-admin-body">
            <Switch>
              {/* <Route path={`${path}/Users`} exact component={UsersA} />
        <Route path={`${path}/Exercise`} exact component={ExerciseA} /> */}
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
