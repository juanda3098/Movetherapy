import React from "react";

// import { BrowserRouter, Switch, Route, useRouteMatch } from "react-router-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Menu from "../MenuA/MenuA";
import Users from "../UsersA/UsersA";
import Exercise from "../ExerciseA/ExerciseA";

import "./Admin.css";

function Admin() {
  // const { path } = useRouteMatch();

  return (
    <BrowserRouter>
      <Menu />
      <Switch>
        {/* <Route path={`${path}/Users`} exact component={UsersA} />
        <Route path={`${path}/Exercise`} exact component={ExerciseA} /> */}

        <Route path="/Admin/Users" exact component={Users} />
        <Route path="/Admin/Exercise" exact component={Exercise} />

      </Switch>
    </BrowserRouter>
  );
}

export default Admin;
