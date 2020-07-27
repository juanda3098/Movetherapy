import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import HeaderHomePage from "../HeaderHomePage/HeaderHomePage";
import Home from "../Home/Home"
import ServiceTab from "../ServicesTab/ServicesTab";
import AboutUs from "../AboutUs/AboutUs";
import ContactUs from "../ContactUs/ContactUs"

import "./Main.css";

function Main() {
  return (
    <BrowserRouter>
      <HeaderHomePage />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Services" exact component={ServiceTab} />
        <Route path="/AboutUs" exact component={AboutUs} />
        <Route path="/ContactUs" exact component={ContactUs} />
        {/* <Route path="/Profile" component={() => <Profile user={this.state.user} />} /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default Main;
