import React from "react";

// import { BrowserRouter, Switch, Route, Link} from "react-router-dom";
import { BrowserRouter} from "react-router-dom";

import HeaderUserPage from "../HeaderUserPage/HeaderUserPage";

function Main() {
  return (
    <BrowserRouter>
      <HeaderUserPage/>
      {/*<Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Main/Services" exact component={ServiceTab} />
        <Route path="/Main/AboutUs" exact component={AboutUs} />
        <Route path="/Main/ContactUs" exact component={ContactUs} />
        <Route path="/Main/Login" exact component={Login} />
        <Route path="/Main/CreateAccount" exact component={CreateAccount} />
        {/* <Route path="/Profile" component={() => <Profile user={this.state.user} />} /> 
      </Switch>*/}
    </BrowserRouter>
  );
}

export default Main;
