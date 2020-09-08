import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Page from "../ComponentsH/Page/Page";
import Admin from '../ComponentsA/Admin/Admin';
import UserPage from "../ComponentsU/UserMain/UserMain";

import "./Main.css";

const Main = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Page} />
        <Route path="/Admin" component={Admin} />
        <Route path="/User" exact component={UserPage}/>
        {/* <Route path="/User" exact component={User} /> */}
        {/* <Route path="/Profile" component={() => <Profile user={this.state.user} />} /> */}
      </Switch>
    </BrowserRouter>
  );
};

export default Main;
