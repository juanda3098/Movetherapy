import React from "react";

import Menu from "../Menu/Menu";
import Header from "../Header/Header";
import Routine from "../Routine/Routine";

import Add from "../../Img/Admin/add.svg";

import "./Routines.scss";

function Routines() {
  return (
    <div className="o-admin-container">
      <div className="o-admin-menu">
        <Menu />
      </div>
      <div className="o-admin-field">
        <Header />
        <div className="o-admin-body">
          <div className="o-routines-container">
            <div className="o-routines-content">
              <div className="o-search-routines">
                <h3>Lista de rutinas</h3>
                <input className="o-field-search" type="text" />
              </div>
              <div className="o-routines-field">
                <div className="o-routine-label">
                  <h4 style={{ width: "21vw" }}>Nombre</h4>
                  <h4 style={{ width: "36vw" }}>Descripción</h4>
                </div>
                <div className="o-routines-list">
                  <Routine />
                </div>
                <div className="o-add-container">
                  <img src={Add} alt="" className="o-add-routine" />
                </div>
              </div>
            </div>
            <div className="o-routine-info">
              <div className="o-info-title">
                <h3>Rutina</h3>
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
                <h4>Ejercicios</h4>
                <input className="o-field-routine" type="text" />
              </div>
              <div className="o-button-container">
                <button className="o-button-action">Agregar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Routines;
