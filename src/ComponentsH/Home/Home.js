import React from "react";

import Img1 from "../../Img/Img1.png";
import Img2 from "../../Img/Img2.png";
import Img3 from "../../Img/Img3.png";
import Img4 from "../../Img/Img4.png";

import Icon1 from "../../Img/healthy.svg";
import Icon2 from "../../Img/kneepad.svg";
import Icon3 from "../../Img/bandage.svg";
import Icon4 from "../../Img/basketball.svg";
import Icon5 from "../../Img/worker.svg";
import Icon6 from "../../Img/massage.svg";

import "./Home.css";

function Home() {
  return (
    <div>
      <div className="o-container-home">
        <div className="o-title">
          <h1 className="o-sentence">Reabilitación</h1>
          <h1 className="o-sentence">física con</h1>
          <h1 className="o-sentence">amor</h1>
        </div>
        <div className="o-container-img">
          <img src={Img1} alt="" />
          <img src={Img2} alt="" />
        </div>
      </div>
      <div className="o-container-in">
        <h1 className="o-title-sentence">Instalaciones Optimas</h1>
        <h2>
          Amplias instalaciones, diseñadas pensando especialmente en sus
          necesidades.
        </h2>
        <img src={Img3} alt="" />
        <img src={Img4} alt="" />
      </div>
      <div className="o-services">
        <h1>Nuestros Servicios</h1>
        <div className="o-container-services">
          <div className="o-service">
            <h2>Acondicionamiento Físico</h2>
            <img className="o-icon-service" src={Icon1} alt="" />
          </div>
          <div className="o-service">
            <h2>Fisioterapia o terapia física</h2>
            <img className="o-icon-service" src={Icon2} alt="" />
          </div>
          <div className="o-service">
            <h2>Aplicación de vendaje elástico</h2>
            <img className="o-icon-service" src={Icon3} alt="" />
          </div>
          <div className="o-service">
            <h2>Acompañamiento deportivo</h2>
            <img className="o-icon-service" src={Icon4} alt="" />
          </div>
          <div className="o-service">
            <h2>Programas empresariales</h2>
            <img className="o-icon-service" src={Icon5} alt="" />
          </div>
          <div className="o-service">
            <h2>Kineticxer</h2>
            <img className="o-icon-service" src={Icon6} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
