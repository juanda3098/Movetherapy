import React from "react";

import HeaderHomePage from "../HeaderHomePage/HeaderHomePage";
import Footer from "../Footer/Footer";

import "./../ContactUs/ContactUs.scss";
import "./../Login/Login.scss";
import "./CreateAccount.scss";

const CreateAccount = () => {
  return (
    <div>
      <HeaderHomePage />
      <div className="o-contactus-tab-container">
        <div className="o-createaccount-container">
          <div className="o-createaccount-info-container">
            <h1>Crear cuenta</h1>
            <p>Nombre completo</p>
            <input
              className="o-input"
              placeholder="Escribe tu correo electrónico"
            ></input>
            <p>Número de cédula</p>
            <input
              className="o-input"
              type=""
              placeholder="Escribe tu número de cédula"
            ></input>
            <p>Teléfono celular</p>
            <input
              className="o-input"
              type="number"
              placeholder="Escribe tu teléfono celular"
            ></input>
            <p>Fecha de nacimiento </p>
            <input
              className="o-input"
              type="date"
              placeholder="Escribe tu fecha de nacimiento"
            ></input>
          </div>
          <div className="o-createaccount-info-container">
            <p>¿Practicas algún deporte?</p>
            <select name="deporte" className="o-select">
              <option>Si</option>
              <option>No</option>
            </select>
            <p>¿Qué deporte?</p>
            <input
              className="o-input"
              placeholder="Escribe el deporte que practica"
            ></input>
            <p>Corre electrónico</p>
            <input
              className="o-input"
              placeholder="Escribe su correo electrónico"
            ></input>
            <p>Contraseña</p>
            <input
              className="o-input"
              type="password"
              placeholder="Escribe tu contraseña"
            ></input>
            <p>Confirmar Contraseña</p>
            <input
              className="o-input"
              type="password"
              placeholder="Escribe tu contraseña de nuevo"
            ></input>
          </div>
          <button className="o-button o-createaccount-button">
            Crear Cuenta
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CreateAccount;
