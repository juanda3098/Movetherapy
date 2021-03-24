import React from "react";

import { LoginProvider } from "../Context/LoginContext";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "../ComponentsH/Home/Home";
import ServiceTab from "../ComponentsH/ServicesTab/ServicesTab";
import AboutUs from "../ComponentsH/AboutUs/AboutUs";
import ContactUs from "../ComponentsH/ContactUs/ContactUs";
import Login from "../ComponentsH/Login/Login";
import CreateAccount from "../ComponentsH/CreateAccount/CreateAccount";

import WelcomeU from "../ComponentsU/Welcome/Welcome";
import AppointmentU from "../ComponentsU/Appointment/Appointment";
import RoutineU from "../ComponentsU/Routines/Routines";

import WelcomeA from "../ComponentsA/Welcome/Welcome";
import Patients from "../ComponentsA/Patients/Patients";
import AppointmentA from "../ComponentsA/Appointment/Appointment";
import RoutineA from "../ComponentsA/Routines/Routines";
import Exercises from "../ComponentsA/Exercises/Exercises";
import Profiles from "../ComponentsA/Profiles/Profiles";

import "./Main.scss";

function Main() {
  return (
    <BrowserRouter>
      <Switch>
        <LoginProvider>
          {/* Página */}
          <Route path="/" exact component={Home} />
          <Route path="/web/services" exact component={ServiceTab} />
          <Route path="/web/aboutus" exact component={AboutUs} />
          <Route path="/web/contactus" exact component={ContactUs} />
          <Route path="/web/login" exact component={Login} />
          <Route path="/web/createaccount" exact component={CreateAccount} />
          {/* Usuario */}
          <Route path="/user" exact component={WelcomeU} />
          <Route path="/user/appointment" exact component={AppointmentU} />
          <Route path="/user/routine" exact component={RoutineU} />
          {/* Administrador */}
          <Route path="/admin" exact component={WelcomeA} />
          <Route path="/admin/patient" exact component={Patients} />
          <Route path="/admin/appointment" exact component={AppointmentA} />
          <Route path="/admin/routine" exact component={RoutineA} />
          <Route path="/admin/exercise" exact component={Exercises} />
          <Route path="/admin/profile" exact component={Profiles} />
        </LoginProvider>

        {/* <Route path="/Profile" component={() => <Profile user={this.state.user} />} /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default Main;
