import React from "react";

import Header from "../Header/Header";

import "./Routines.scss";

function Routine() {
  return (
    <div>
      <Header />
      <div className='o-routines-user-container'>
        <div className='o-routines-user-content'>
          <h3>Mis Rutinas</h3>
          <p>Rutina</p>
          <p>Rutina</p>
          <p>Rutina</p>
        </div>
        <div className='o-routines-exercises-content'>
          <h3>Ejercicios</h3>
          <p>Ejercicio</p>
          <p>Ejercicio</p>
          <p>Ejercicio</p>
        </div>
        <div className='o-routines-exercises-details'>
          <h3>Titulo</h3>
          <video width="320" height="240" controls>
            <source
              src="https://drive.google.com/file/d/0Bxfj8ykzIzNKeWU4cG52RXFBQ3c/view?usp=sharing"
              type="video/mp4"
            />
          </video>
          <h4>Descripción</h4>
          <p>aasdfghjklqwertyuioasdfvbnmcvbnm</p>
          <h4>Repeticiones</h4>
          <p>2 series</p>
          <p>15 repeticiones</p>
        </div>
      </div>
    </div>
  );
}

export default Routine;
