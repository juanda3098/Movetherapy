import React, { useState } from "react";

import { useHistory } from "react-router-dom";

import HeaderHomePage from "../HeaderHomePage/HeaderHomePage";
import Footer from "../Footer/Footer";

import "./Login.scss";

import MTfront from "./../../Img/MoveTherapyFront.png";

function Login() {
  const [userInput, setUserInput] = useState();
  const [passwordInput, setPasswordInput] = useState();

  let history = useHistory();

  let usernameChange = (event) => {
    setUserInput(event.target.value);
  };

  let passwordChange = (event) => {
    setPasswordInput(event.target.value);
  };

  let login = () => {
    if (userInput === "Admin" && passwordInput === "Admin1") {
      alert("admin");
      history.push("/Admin");
    } else if (userInput === "User" && passwordInput === "User1") {
      alert("user");
      history.push("/User");
    }
  };

  return (
    <div>
      <HeaderHomePage />
      <div className="o-contactus-tab-container">
        <div className="o-login-container">
          <div className="o-login-info-container">
            <h1>Ingresar</h1>
            <p>Corre Electrónico</p>
            <input
              className="o-input"
              placeholder="Escribe tu correo electrónico"
              onChange={usernameChange}
            ></input>
            <p>Contraseña</p>
            <input
              className="o-input"
              type="password"
              placeholder="Escribe tu contraseña"
              onChange={passwordChange}
            ></input>
            <div className="o-button-container">
              <button className="o-button" onClick={login}>
                Ingresar
              </button>
            </div>
          </div>
          <img className="o-login-image" src={MTfront} alt=""></img>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
