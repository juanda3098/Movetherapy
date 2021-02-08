import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "../ComponentsH/Home/Home";
import ServiceTab from "../ComponentsH/ServicesTab/ServicesTab";
import AboutUs from "../ComponentsH/AboutUs/AboutUs";
import ContactUs from "../ComponentsH/ContactUs/ContactUs";
import Login from "../ComponentsH/Login/Login";
import CreateAccount from "../ComponentsH/CreateAccount/CreateAccount";

import WelcomeU from '../ComponentsU/Welcome/Welcome';

import WelcomeA from "../ComponentsA/Welcome/Welcome";
import Patients from "../ComponentsA/Patients/Patients";
import Appointment from "../ComponentsA/Appointment/Appointment";
import Routines from "../ComponentsA/Routines/Routines";
import Exercises from "../ComponentsA/Exercises/Exercises";
import Profiles from "../ComponentsA/Profiles/Profiles";

import "./Main.scss";

function Main() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Main/Services" exact component={ServiceTab} />
        <Route path="/Main/AboutUs" exact component={AboutUs} />
        <Route path="/Main/ContactUs" exact component={ContactUs} />
        <Route path="/Main/Login" exact component={Login} />
        <Route path="/Main/CreateAccount" exact component={CreateAccount} />
        {/* <Route path="/Profile" component={() => <Profile user={this.state.user} />} /> */}

        <Route path="/User" exact component={WelcomeU} />

        <Route path="/Admin" exact component={WelcomeA} />
        <Route path="/Admin/Patient" exact component={Patients} />
        <Route path="/Admin/Appointment" exact component={Appointment} />
        <Route path="/Admin/Routine" exact component={Routines} />
        <Route path="/Admin/Exercise" exact component={Exercises} />
        <Route path="/Admin/Profile" exact component={Profiles} />
      </Switch>
    </BrowserRouter>
  );
}

export default Main;
