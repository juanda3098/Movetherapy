import React from "react";

import HeaderHomePage from "../HeaderHomePage/HeaderHomePage";
import Footer from "../Footer/Footer";

import "./ContactUs.scss";

const ContactUs = () => {
  return (
    <div>
      <HeaderHomePage />
      <div className="o-contactus-tab-container">
        <div className="o-contactus-container">
          <div className="o-client-info-container">
            <h2>Envíanos un mensaje</h2>
            <p>Nombre</p>
            <input
              className="o-input"
              placeholder="Escribe tu nombre y apellidos"
            ></input>
            <p>Corre Electrónico</p>
            <input
              className="o-input"
              placeholder="Escribe tu correo electrónico"
            ></input>
            <p>Teléfono</p>
            <input
              className="o-input"
              placeholder="Número de teléfono o celular"
            ></input>
            <p>Mensaje</p>
            <input
              className="o-input o-large-input"
              placeholder="Escribe aquí tu mensaje"
            ></input>
            <button className="o-button">Enviar</button>
          </div>
          <iframe
            title="Ubicación"
            width="60%"
            height="100%"
            frameBorder="0"
            style={{ border: 0 }}
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDk4oy52Yq3t_cQwGCVSnxF6KyK7HNSVRw&q=Move+Therapy,Cali+Valle"
            allowFullScreen
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactUs;
