import React from 'react';
import Service from '../Service/Service';

function ServicesTab() {
  return (
    <div className="o-services-container">
      <Service stImage="https://cdn.pixabay.com/photo/2017/10/10/22/24/wide-format-2839089_960_720.jpg" stTitle="FISIOTERAPIA" stDescription="Programa orientado a la recuperación física de
      personas con lesiones musculares, articulares,
      ligamentosa y todas las relacionadas con el
      sistema osteomuscular, de igual manera
      contamos con tratamiento pre operatorio y post
      operatorio de múltiples lesiones." numOrientation="1"></Service>
      <Service stImage="https://cdn.pixabay.com/photo/2017/10/10/22/24/wide-format-2839089_960_720.jpg" stTitle="FISIOTERAPIA INVASIVA" stDescription="Programa orientado a la recuperación física de
      personas con lesiones musculares, articulares,
      ligamentosa y todas las relacionadas con el
      sistema osteomuscular, de igual manera
      contamos con tratamiento pre operatorio y post
      operatorio de múltiples lesiones." numOrientation="-1"></Service>
      <Service stImage="https://cdn.pixabay.com/photo/2017/10/10/22/24/wide-format-2839089_960_720.jpg" stTitle="DRENAJE LINFATICO" stDescription="Terapia manual que se utiliza con el objetivo
      de estimular el sistema linfático mejorando la
      circulación de la linfa, evitando la retención de
      líquidos y edemas" numOrientation="1"></Service>
      <Service stImage="https://cdn.pixabay.com/photo/2017/10/10/22/24/wide-format-2839089_960_720.jpg" stTitle="NUTRICIÓN" stDescription="El programa se encuentra orientado a todo
      tipo de población: deportista, sedentarios y/o
      personas que desean bajar de peso o
      aumentar masa muscular, promoviendo
      educación y hábitos de vida saludable,
      contamos con:" numOrientation="-1"></Service>
    </div>
  );
}

export default ServicesTab;