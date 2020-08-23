import React from "react";

import Profile from "../../Img/person.svg";

import "./AboutUs.css";

import MTFront from "../../Img/MoveTherapyFront.png"

const AboutUs = () => {
  return (
    <div class="o-aboutus-container">
      <div class="o-aboutus-image-container">
        <img className="o-aboutus-image" src={MTFront} alt="" />
        <div class="o-info">
          <div className="o-aboutus-info-container">
          </div>
          <div className="o-aboutus-info-container">
            <h1 className="o-aboutus-title">Quienes Somos</h1>
            <div className="o-aboutus-description">Move Therapy es un centro de rehabilitación física fundada con la
            finalidad de prestar servicios en fisioterapia, basados en métodos
            diversos, buscando ofrecer calidad tanto humana como profesional,
            entendiendo que la principal necesidad de los usuarios es que un
            experto se interese por alcanzar unos objetivos junto a él, logrando
            una recuperación optima y exitosa.</div>
          </div>
        </div>
      </div>
      <div className="o-aboutus-team">
        <h1 className="o-title-sentence">Nuestro Equipo</h1>
        <div className="o-aboutus-persons">
          <div className="o-aboutus-person">
            <h2>Diana Marcela Mesa Sepúlveda</h2>
            <img src={Profile} className="o-aboutus-img" alt="" />
            <p>Fisioterapeuta</p>
            <p>Escuela Nacional del Deporte</p>
          </div>
          <div className="o-aboutus-person">
            <h2>Laura Marcela Gonzáles Sánchez</h2>
            <img src={Profile} className="o-aboutus-img" alt="" />
            <p>Fisioterapeuta</p>
            <p>Escuela Nacional del Deporte</p>
          </div>
        </div>
        <h3>
          Profesionales comprometidos con el bienestar físico y emocional de sus
          usuarios, los cuales se encuentran constantemente actualizados y a la
          vanguardia en nuevas técnicas de rehabilitación, dispuestos a
          brindarle la mejor atención y calidad en el servicio.
        </h3>
      </div>
      <div className="o-aboutus-ig">
        <h1>Nuestras Redes</h1>
        <iframe
          title="Instagram"
          width="60%"
          height="500vh"
          frameborder="0"
          style={{ border: 0 }}
          src="https://www.instagram.com/therapymove/"
          allowfullscreen
        />
      </div>
    </div>
  );
};

export default AboutUs;
