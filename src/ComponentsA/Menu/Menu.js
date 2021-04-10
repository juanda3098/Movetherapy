import React from "react";

import { Link } from "react-router-dom";

import Logo from "../../Img/Admin/Logo.svg";
import Patient from '../../Img/Admin/patient.svg';
import Appointment from '../../Img/Admin/appointment.svg';
import Routine from '../../Img/Admin/routine.svg';
import Exercise from '../../Img/Admin/exercise.svg';
import Physio from '../../Img/Admin/physio.svg';
//import Profile from '../../Img/Admin/profile.svg';

import "./Menu.scss";

function Menu() {
  // const { url } = useRouteMatch();

  return (
    <div className="o-menuA-container">
      <img src={Logo} alt="" className="o-img-logo" />

      <Link to="/admin/patient" className="o-link-menu">
        <img src={Patient} alt="" className="o-img-menu" />
        <p className="o-label-menu">Pacientes</p>
      </Link>
      <Link to="/admin/appointment" className="o-link-menu">
        <img src={Appointment} alt="" className="o-img-menu" />
        <p className="o-label-menu">Citas</p>
      </Link>
      <Link to="/admin/routine" className="o-link-menu">
        <img src={Routine} alt="" className="o-img-menu" />
        <p className="o-label-menu">Rutinas</p>
      </Link>
      <Link to="/admin/exercise" className="o-link-menu">
        <img src={Exercise} alt="" className="o-img-menu" />
        <p className="o-label-menu">Ejercicios</p>
      </Link>
      <Link to="/admin/physio" className="o-link-menu">
        <img src={Physio} alt="" className="o-img-menu" />
        <p className="o-label-menu">Fisio</p>
      </Link>
      {/* <Link to="/admin/profile" className="o-link-menu">
        <img src={Profile} alt="" className="o-img-menu" />
        <p className="o-label-menu">Perfiles</p>
      </Link> */}
    </div>
  );
}

export default Menu;
