import React from "react";

// import { BrowserRouter, Switch, Route, useRouteMatch } from "react-router-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Menu from "../Menu/Menu";
import Users from "../Users/Users";
import Exercise from "../Exercise/Exercise";
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

import "./Admin.css";

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
          
          <Switch>
            
            {/* <Route path={`${path}/Users`} exact component={UsersA} />
        <Route path={`${path}/Exercise`} exact component={ExerciseA} /> */}

            <Route path="/Admin/Users" exact component={Users} />
            <Route path="/Admin/Exercise" exact component={Exercise} />
          </Switch>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default Admin;
