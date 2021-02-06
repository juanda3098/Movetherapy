import React from "react";

import HeaderHomePage from "../HeaderHomePage/HeaderHomePage";
import Footer from "../Footer/Footer";

import "./Login.scss";

import MTfront from "./../../Img/MoveTherapyFront.png";

function Login() {
  // usernameChange = (event) => {
  //   this.setState({ username: event.target.value });
  // };

  // passwordChange = (event) => {
  //   this.setState({ password: event.target.value });
  // };

  // login = () => {
  //   if (this.state.username === "Admin" && this.state.password === "Admin1") {
  //     this.props.changeAdmin();
  //   } else if (
  //     this.state.username === "User" &&
  //     this.state.password === "User1"
  //   ) {
  //     this.props.changeUser();
  //   }
  // };

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
              // onChange={this.usernameChange}
            ></input>
            <p>Contraseña</p>
            <input
              className="o-input"
              type="password"
              placeholder="Escribe tu contraseña"
              // onChange={this.passwordChange}
            ></input>
            <div className="o-button-container">
              <button className="o-button">
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
