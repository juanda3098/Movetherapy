import React, { useContext, useState } from "react";
import LoginContext from "../../Context/LoginContext";

import { useHistory } from "react-router-dom";

import HeaderHomePage from "../HeaderHomePage/HeaderHomePage";
import Footer from "../Footer/Footer";

import "./Login.scss";

import MTfront from "./../../Img/MoveTherapyFront.png";

function Login() {
  const history = useHistory();

  const { login } = useContext(LoginContext);

  const [userInput, setUserInput] = useState();
  const [passwordInput, setPasswordInput] = useState();

  const usernameChange = (event) => {
    setUserInput(event.target.value);
  };

  const passwordChange = (event) => {
    setPasswordInput(event.target.value);
  };

  const isLogin = (e) => {
    e.preventDefault();
    login(userInput, passwordInput, history);
  };

  return (
    <div>
      <HeaderHomePage />
      <div className="o-contactus-tab-container">
        <div className="o-login-container">
          <form onSubmit={(e) => isLogin(e)} className="o-login-info-container">
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
              <button className="o-button" type="submit">
                Ingresar
              </button>
            </div>
          </form>
          <img className="o-login-image" src={MTfront} alt=""></img>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
