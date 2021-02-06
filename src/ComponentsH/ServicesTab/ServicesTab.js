import React from 'react';

import HeaderHomePage from "../HeaderHomePage/HeaderHomePage";
import Footer from "../Footer/Footer";
import Service from '../Service/Service';

import Img4 from "../../Img/Page/img4.jpg";
import Img5 from "../../Img/Page/img5.jpg";
import Img6 from "../../Img/Page/img6.jpg";
import Img7 from "../../Img/Page/img7.jpg";
import Img8 from "../../Img/Page/img8.jpg";
import Img9 from "../../Img/Page/img9.jpg";
import Img10 from "../../Img/Page/img10.jpg";
import Img11 from "../../Img/Page/img11.jpg";

function ServicesTab() {
  return (
    <div>
      <HeaderHomePage />
      <div className="o-services-container">
        <Service
          stImage={Img4}
          stTitle="FISIOTERAPIA"
          stDescription="Programa orientado a la recuperación física de
      personas con lesiones musculares, articulares,
      ligamentosa y todas las relacionadas con el
      sistema osteomuscular, de igual manera
      contamos con tratamiento pre operatorio y post
      operatorio de múltiples lesiones."
          numOrientation="1"
        ></Service>
        <Service
          stImage={Img5}
          stTitle="DRENAJE LINFATICO"
          stDescription="Terapia manual que se utiliza con el objetivo
      de estimular el sistema linfático mejorando la
      circulación de la linfa, evitando la retención de
      líquidos y edemas."
          numOrientation="-1"
        ></Service>
        <Service
          stImage={Img6}
          stTitle="FISIOTERAPIA INVASIVA"
          stDescription="Programa orientado a la recuperación física de
      personas con lesiones musculares, articulares,
      ligamentosa y todas las relacionadas con el
      sistema osteomuscular, de igual manera
      contamos con tratamiento pre operatorio y post
      operatorio de múltiples lesiones."
          numOrientation="1"
        ></Service>
        <Service
          stImage={Img7}
          stTitle="NUTRICIÓN"
          stDescription="El programa se encuentra orientado a todo
      tipo de población: deportista, sedentarios y/o
      personas que desean bajar de peso o
      aumentar masa muscular, promoviendo
      educación y hábitos de vida saludable."
          numOrientation="-1"
        ></Service>
        <Service
          stImage={Img8}
          stTitle="READAPTACIÓN DEPORTIVA"
          stDescription="Programa direccionado a la fase 3 y 4 de
      rehabilitación donde el objetivo es permitir al
      usuario volver a sus actividades deportivas de tipo
      recreativo o competitivo en óptimas condiciones
      tanto de manera física como en técnica."
          numOrientation="1"
        ></Service>
        <Service
          stImage={Img9}
          stTitle="ACONDICIONAMIENTO FÍSICO"
          stDescription="Programa dirigido a personas que desean cambiar
      su estilo de vida, mejorar o potencializar sus
      capacidades físicas, coordinativas o mejorar su
      gesto deportivo de las diferentes disciplinas."
          numOrientation="-1"
        ></Service>
        <Service
          stImage={Img11}
          stTitle="ACOMPAÑAMIENTO DEPORTIVO"
          stDescription="Es un programa orientado a la prevención,
      vigilancia y recuperación física del deportista
      antes, durante y posterior a la competencia."
          numOrientation="1"
        ></Service>
        <Service
          stImage={Img10}
          stTitle="BIENESTAR LABORAL"
          stDescription="Programa dirigido a pequeñas, medianas y
      grandes empresas de diferentes sectores que
      buscan capacitar a sus colaboradores en
      temas de salud como: hábitos de vida
      saludable, alimentación, actividad física entre
      otros; de igual manera contamos con
      programas dirigidos al bienestar de los
      colaboradores tales como: pausas activas,
      clases de stretching, actividades de relajación
      y actividades físicas."
          numOrientation="-1"
        ></Service>
      </div>
      <Footer />
    </div>
  );
}

export default ServicesTab;