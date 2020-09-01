import React from "react";

import Img1 from "../../Img/img1.jpg";
import Img2 from "../../Img/img2.jpg";
import Img3 from "../../Img/img3.jpg";
import Img4 from "../../Img/img4.jpg";
import Img5 from "../../Img/img5.jpg";
import Img6 from "../../Img/img6.jpg";
import Img7 from "../../Img/img7.jpg";
import Img8 from "../../Img/img8.jpg";
import Img9 from "../../Img/img9.jpg";
import Img10 from "../../Img/img10.jpg";
import Img11 from "../../Img/img11.jpg";

import "./Home.css";

function Home() {
  return (
    <div>
      <div className="o-container-home">
        <div className="o-container-img">
          <img src={Img1} className="o-bg-img" alt="" />
        </div>
        <div className="o-title">
          <h1 className="o-sentence">Rehabilitación</h1>
          <h1 className="o-sentence">física con</h1>
          <h1 className="o-sentence">amor</h1>
        </div>
      </div>
      <div className="o-container-side">
        <h1 className="o-title-sentence">Instalaciones Optimas</h1>
        <h2 className="o-title-content">
          Amplias instalaciones, diseñadas pensando especialmente en sus
          necesidades.
        </h2>
        <div className="o-side-container-img">
          <img src={Img2} className="o-side-img" alt="" />
          <img src={Img3} className="o-side-img" alt="" />
        </div>
        {/* <div className="o-deg" /> */}
      </div>
      <div className="o-services">
        <h1 className="o-title-sentence">Nuestros Servicios</h1>
        <div className="o-container-services">
          <div className="o-service">
            <img className="o-icon-service" src={Img4} alt="" />
            <div className="o-container-title">
              <p className="o-home-service-title">Fisioterapia</p>
            </div>
          </div>
          <div className="o-service">
            <img className="o-icon-service" src={Img5} alt="" />
            <div className="o-container-title">
              <p className="o-home-service-title">Drenaje Linfático</p>
            </div>
          </div>
          <div className="o-service">
            <img className="o-icon-service" src={Img6} alt="" />
            <div className="o-container-title">
              <p className="o-home-service-title">Fisioterapia Invasiva</p>
            </div>
          </div>
          <div className="o-service">
            <img className="o-icon-service" src={Img7} alt="" />
            <div className="o-container-title">
              <p className="o-home-service-title">Nutrición</p>
            </div>
          </div>
          <div className="o-service">
            <img className="o-icon-service" src={Img8} alt="" />
            <div className="o-container-title">
              <p className="o-home-service-title">Readaptación Deportiva</p>
            </div>
          </div>
          <div className="o-service">
            <img className="o-icon-service" src={Img9} alt="" />
            <div className="o-container-title">
              <p className="o-home-service-title">Acondicionamiento Físico</p>
            </div>
          </div>
          <div className="o-service">
            <img className="o-icon-service" src={Img10} alt="" />
            <div className="o-container-title">
              <p className="o-home-service-title">Bienestar Laboral</p>
            </div>
          </div>
          <div className="o-service">
            <img className="o-icon-service" src={Img11} alt="" />
            <div className="o-container-title">
              <p className="o-home-service-title">Acompañamiento Deportivo</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
