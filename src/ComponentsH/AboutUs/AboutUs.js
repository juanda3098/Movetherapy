import React from "react";

import "./AboutUs.css";
import ScriptTag from 'react-script-tag';
import InstaEmbed from "./Instaembed/InstaEmbed";

import MTFront from "../../Img/MTFront-AboutUs.png"
import ProfileDiana from "../../Img/People/DianaMesa.jpg"
import ProfileLauraG from "../../Img/People/LauraGonzalez.jpg"
import ProfileCamilo from "../../Img/People/CamiloUseche.jpg"
import ProfileAndres from "../../Img/People/AndresPenagos.jpg"
import ProfileLauraV from "../../Img/People/LauraVargas.jpg"
import ProfileEider from "../../Img/People/EiderArce.jpg"

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
            <img src={ProfileDiana} className="o-aboutus-person-img" alt="" />
            <h2>Diana Mesa</h2>
            <h4>Fisioterapeuta</h4>
            <p>Escuela Nacional del Deporte</p>
          </div>
          <div className="o-aboutus-person">
            <img src={ProfileLauraG} className="o-aboutus-person-img" alt="" ></img>
            <h2>Laura Gonzáles</h2>
            <h4>Fisioterapeuta</h4>
            <p>Escuela Nacional del Deporte</p>
          </div>
          <div className="o-aboutus-person">
            <img src={ProfileCamilo} className="o-aboutus-person-img" alt="" ></img>
            <h2>Camilo Useche</h2>
            <h4>Servicio Al Cliente</h4>
            <p>Estudiante de Derecho</p>
            <p>Universidad Santiago de Cali</p>
          </div>
          <div className="o-aboutus-person">
            <img src={ProfileAndres} className="o-aboutus-person-img" alt="" ></img>
            <h2>Andrés Penagos</h2>
            <h4>Fisioterapia y Master Oficial en Fisioterapia Invasiva</h4>
            <p>Escuela Nacional del Deporte</p>
          </div>
          <div className="o-aboutus-person">
            <img src={ProfileLauraV} className="o-aboutus-person-img" alt="" ></img>
            <h2>Laura Vargas</h2>
            <h4>Nutricionista</h4>
            <p>Escuela Nacional del Deporte</p>
          </div>
          <div className="o-aboutus-person">
            <img src={ProfileEider} className="o-aboutus-person-img" alt="" ></img>
            <h2>Eider Arce</h2>
            <h4>Profesional en Deporte, Especialista en Actividad Física</h4>
            <p>Escuela Nacional del Deporte</p>
          </div>
        </div>
        <h3 className="o-bottom-text-people">
          Profesionales comprometidos con el bienestar físico y emocional de sus
          usuarios, los cuales se encuentran constantemente actualizados y a la
          vanguardia en nuevas técnicas de rehabilitación, dispuestos a
          brindarle la mejor atención y calidad en el servicio.
        </h3>
      </div>
      <div className="o-aboutus-ig"> 
        <InstaEmbed/>
      </div>
    </div>
  );
};

export default AboutUs;
