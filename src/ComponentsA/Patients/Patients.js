import React from "react";

import Add from "../../Img/Admin/add.svg";

import Patient from "../Patient/Patient";

import "./Patients.scss";

function Patients() {
  return (
    <div className="o-patients-container">
      <div className="o-patients-content">
        <div className="o-search-patients">
          <h3>Lista de pacientes</h3>
          <input className="o-field-search" type="text" />
        </div>
        <div className="o-patients-field">
          <div className="o-patient-label">
            <h4>Nombre</h4>
            <h4>Cédula</h4>
            <h4 style={{marginRight:'1.2vw'}}>Problema</h4>
          </div>
          <div className="o-patients-list">
            <Patient />
            <Patient />
            <Patient />
            <Patient />
            <Patient />
            <Patient />
            <Patient />
            <Patient />
            <Patient />
            <Patient />
            <Patient />
            <Patient />
            <Patient />
            <Patient />
          </div>
          <div className="o-add-container">
            <img src={Add} alt="" className="o-add-patient" />
          </div>
        </div>
      </div>
      <div className="o-patient-info">
        <div className="o-info-title">
          <h3>Paciente</h3>
        </div>
        <div className="o-patient-field">
          <h4>Cédula</h4>
          <input className="o-field-patient" type="text" />
        </div>
        <div className="o-patient-field">
          <h4>Nombre</h4>
          <input className="o-field-patient" type="text" />
        </div>
        <div className="o-patient-field">
          <h4>Apellido</h4>
          <input className="o-field-patient" type="text" />
        </div>
        <div className="o-patient-field">
          <h4>Teléfono</h4>
          <input className="o-field-patient" type="text" />
        </div>
        <div className="o-patient-field">
          <h4>Fecha de nacimiento</h4>
          <input className="o-field-patient" type="text" />
        </div>
        <div className="o-patient-field">
          <h4>Correo</h4>
          <input className="o-field-patient" type="text" />
        </div>
        <div className="o-patient-field">
          <h4>Contraseña</h4>
          <input className="o-field-patient" type="text" />
        </div>
        <div className="o-patient-field">
          <h4>Practica deporte</h4>
          <input className="o-field-patient" type="text" />
        </div>
        <div className="o-button-container">
          <button className="o-button-action">Agregar</button>
        </div>
      </div>
    </div>
  );
}

export default Patients;
