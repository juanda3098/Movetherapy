import React from "react";

import Exercise from "../Exercise/Exercise";

import Add from "../../Img/Admin/add.svg";

import "./Exercises.scss";

function Exercises() {
  return (
    <div className="o-routines-container">
      <div className="o-routines-content">
        <div className="o-search-routines">
          <h3>Lista de ejercicios</h3>
          <input className="o-field-search" type="text" />
        </div>
        <div className="o-routines-field">
          <div className="o-routine-label">
            <h4 style={{ width: "21vw" }}>Nombre</h4>
            <h4 style={{ width: "36vw" }}>Descripción</h4>
          </div>
          <div className="o-routines-list">
            <Exercise />
            <Exercise />
          </div>
          <div className="o-add-container">
            <img src={Add} alt="" className="o-add-routine" />
          </div>
        </div>
      </div>
      <div className="o-routine-info">
        <div className="o-info-title">
          <h3>Ejercicio</h3>
        </div>
        <div className="o-routine-field">
          <h4>Nombre</h4>
          <input className="o-field-routine" type="text" />
        </div>
        <div className="o-routine-field">
          <h4>Descripción</h4>
          <input className="o-field-routine" type="text" />
        </div>
        <div className="o-routine-field">
          <h4>Link de video</h4>
          <input className="o-field-routine" type="text" />
        </div>
        <div className="o-button-container">
          <button className="o-button-action">Agregar</button>
        </div>
      </div>
    </div>
  );
}

export default Exercises;
