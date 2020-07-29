import React from 'react';
import "./../ContactUs/ContactUs.css";
import "./Login.css"
import MTfront from "./../../Img/MoveTherapyFront.png"
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="o-contactus-tab-container">
            <div className="o-login-container">
                <div className="o-login-info-container">
                    <h1>Ingresar</h1>
                    <p>Corre Electrónico</p>
                    <input className="o-input" placeholder="Escriba su correo electronico"></input>
                    <p>Contraseña</p>
                    <input className="o-input" type="password" placeholder="Escriba su contraseña"></input>
                    <div className="o-button-container">
                        <button className="o-button">Enviar</button>
                        <Link to="/CreateAccount">
                            <button className="o-create-account-button">Crear Cuenta</button>
                        </Link>
                    </div>
                </div>
                <img className="o-login-image" src={MTfront}></img>
            </div>
        </div>
    );
}

export default Login;