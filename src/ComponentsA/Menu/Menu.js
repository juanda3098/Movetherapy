import React from 'react'

// import { Link, useRouteMatch } from "react-router-dom";
import { Link } from "react-router-dom";

import Logo from '../../Img/LogoHeader.png'

import './Menu.css'

function Menu() {

    // const { url } = useRouteMatch();

    return(
        <div className="o-menu-container">
            {/* <Link to={`${url}/Users`}><p>user</p></Link>
            <Link to={`${url}/Exercise`}><p>exercise</p></Link> */}

            <Link to="/Admin/Users"><p>Pacientes</p></Link>
            <Link to="/Admin/Appointment"><p>Citas</p></Link>
            <Link to="/Admin/Routine"><p>Rutinas</p></Link>
            <Link to="/Admin/Exercise"><p>Ejercicios</p></Link>
            <Link to="/Admin/Fisio"><p>Fisioterapeutas</p></Link>

        </div>
    )
}

export default Menu