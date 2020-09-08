import React from "react";

import { Link } from "react-router-dom";

import Logo from "../../Img/Admin/Logo.svg";
import Patient from '../../Img/Admin/patient.svg';
import Appointment from '../../Img/Admin/appointment.svg';
import Routine from '../../Img/Admin/routine.svg';
import Exercise from '../../Img/Admin/exercise.svg';
// import Physio from '../../Img/Admin/physio.svg';
import Profile from '../../Img/Admin/profile.svg';

import "./Menu.scss";

function Menu() {
  // const { url } = useRouteMatch();

  return (
    <div className="o-menuA-container">
      {/* <Link to={`${url}/Users`}><p>user</p></Link>
            <Link to={`${url}/Exercise`}><p>exercise</p></Link> */}

      <img src={Logo} alt="" className="o-img-logo" />

      <Link to="/Admin/Patient" className="o-link-menu">
        <img src={Patient} alt="" className="o-img-menu" />
        <p className="o-label-menu">Pacientes</p>
      </Link>
      <Link to="/Admin/Appointment" className="o-link-menu">
        <img src={Appointment} alt="" className="o-img-menu" />
        <p className="o-label-menu">Citas</p>
      </Link>
      <Link to="/Admin/Routine" className="o-link-menu">
        <img src={Routine} alt="" className="o-img-menu" />
        <p className="o-label-menu">Rutinas</p>
      </Link>
      <Link to="/Admin/Exercise" className="o-link-menu">
        <img src={Exercise} alt="" className="o-img-menu" />
        <p className="o-label-menu">Ejercicios</p>
      </Link>
      {/* <Link to="/Admin/Physio">
        <img src={Physio} alt="" className="o-img-menu" />
        <p>Fisioterapeutas</p>
      </Link> */}
      <Link to="/Admin/Profile" className="o-link-menu">
        <img src={Profile} alt="" className="o-img-menu" />
        <p className="o-label-menu">Perfiles</p>
      </Link>
    </div>
  );
}

export default Menu;
