import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import HeaderHomePage from "..//HeaderHomePage/HeaderHomePage";
import Footer from "../Footer/Footer";

import Home from "../Home/Home"
import ServiceTab from "../ServicesTab/ServicesTab";
import AboutUs from "../AboutUs/AboutUs";
import ContactUs from "../ContactUs/ContactUs"
import Login from "../Login/Login"
import CreateAccount from "../CreateAccount/CreateAccount"

import "./Page.css";

function Page() {
  return (
    <BrowserRouter>
      <HeaderHomePage />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Services" exact component={ServiceTab} />
        <Route path="/AboutUs" exact component={AboutUs} />
        <Route path="/ContactUs" exact component={ContactUs} />
        <Route path="/Login" exact component={Login} />
        <Route path="/CreateAccount" exact component={CreateAccount} />
        {/* <Route path="/Profile" component={() => <Profile user={this.state.user} />} /> */}
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default Page;
