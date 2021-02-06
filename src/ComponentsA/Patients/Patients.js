import React, { useEffect, useState } from "react";
import axios from "axios";
import creds from "../../variables";

import Add from "../../Img/Admin/add.svg";

import Menu from "../Menu/Menu";
import Header from "../Header/Header";
import Patient from "../Patient/Patient";

import "./Patients.scss";

function Patients() {
  const [listPatients, setListPatients] = useState([]);
  const [isSelected, setIsSelected] = useState(false);
  const [actionPatient, setActionPatient] = useState({
    cedulaPaciente: "",
    nombre1Paciente: "",
    apellido1Paciente: "",
    celularPaciente: "",
    fechaNacimientoPaciente: "",
    correoPaciente: "",
    contrasenaPaciente: "",
    practicaDeporte: "",
    idPaciente: "",
  });

  useEffect(() => {
    axios.get(`${creds.url}/paciente/lista`).then((res) => {
      setListPatients(res.data);
      console.log();
    });
  }, []);

  let createPatient = (event) => {
    event.preventDefault();

    axios
      .post(`${creds.url}/paciente/registro`, {
        actionPatient,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    window.location.reload(true);
  };

  let deletePatient = (event) => {
    event.preventDefault();

    axios
      .delete(`${creds.url}/paciente/cedula/${actionPatient.cedulaPaciente}`)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    window.location.reload(true);
  };

  let updatePatient = (event) => {
    event.preventDefault();

    axios
      .post(`${creds.url}/paciente/editar`, {
        actionPatient,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    window.location.reload(true);
  };

  let handleField = (event) => {
    setActionPatient({
      ...actionPatient,
      [event.target.name]: event.target.value,
    });
  };

  let outputEvent = (param) => {
    setActionPatient(param);
    setIsSelected(true);
  };

  function clearForm() {
    setActionPatient({
      cedulaPaciente: "",
      nombre1Paciente: "",
      apellido1Paciente: "",
      celularPaciente: "",
      fechaNacimientoPaciente: "",
      correoPaciente: "",
      contrasenaPaciente: "",
      practicaDeporte: "",
      idPaciente: "",
    });
    setIsSelected(false);
  }

  return (
    <div className="o-admin-container">
      <div className="o-admin-menu">
        <Menu />
      </div>
      <div className="o-admin-field">
        <Header />
        <div className="o-admin-body">
          <div className="o-patients-container">
            <div className="o-patients-content">
              <div className="o-search-patients">
                <h3>Lista de pacientes</h3>
                <input className="o-field-search" type="text" />
              </div>
              <div className="o-patients-field">
                <div className="o-patient-label">
                  <h4 style={{ width: "21vw" }}>Nombre</h4>
                  <h4 style={{ width: "14vw" }}>Cédula</h4>
                  <h4 style={{ width: "22vw" }}>Correo</h4>
                </div>
                <div className="o-patients-list">
                  {Object.values(listPatients).map((patient, index) => {
                    return (
                      <Patient
                        key={index}
                        patient={patient}
                        handleEvent={outputEvent}
                      />
                    );
                  })}
                </div>
                <div className="o-add-container">
                  <img
                    src={Add}
                    alt=""
                    className="o-add-patient"
                    onClick={clearForm}
                  />
                </div>
              </div>
            </div>
            <div className="o-patient-info">
              <div className="o-info-title">
                <h3>Paciente</h3>
              </div>
              <div className="o-patient-field">
                <h4>Cédula</h4>
                <input
                  className="o-field-patient"
                  onChange={handleField}
                  type="text"
                  name="cedulaPaciente"
                  value={actionPatient.cedulaPaciente}
                />
              </div>
              <div className="o-patient-field">
                <h4>Nombre</h4>
                <input
                  className="o-field-patient"
                  onChange={handleField}
                  type="text"
                  name="nombre1Paciente"
                  value={actionPatient.nombre1Paciente}
                />
              </div>
              <div className="o-patient-field">
                <h4>Apellido</h4>
                <input
                  className="o-field-patient"
                  onChange={handleField}
                  type="text"
                  name="apellido1Paciente"
                  value={actionPatient.apellido1Paciente}
                />
              </div>
              <div className="o-patient-field">
                <h4>Teléfono</h4>
                <input
                  className="o-field-patient"
                  onChange={handleField}
                  type="text"
                  name="celularPaciente"
                  value={actionPatient.celularPaciente}
                />
              </div>
              <div className="o-patient-field">
                <h4>Fecha de nacimiento</h4>
                <input
                  className="o-field-patient"
                  onChange={handleField}
                  type="text"
                  name="fechaNacimientoPaciente"
                  value={actionPatient.fechaNacimientoPaciente}
                />
              </div>
              <div className="o-patient-field">
                <h4>Correo</h4>
                <input
                  className="o-field-patient"
                  onChange={handleField}
                  type="text"
                  name="correoPaciente"
                  value={actionPatient.correoPaciente}
                />
              </div>
              <div className="o-patient-field">
                <h4>Contraseña</h4>
                <input
                  className="o-field-patient"
                  onChange={handleField}
                  type="text"
                  name="contrasenaPaciente"
                  value={actionPatient.contrasenaPaciente}
                />
              </div>
              <div className="o-patient-field">
                <h4>Practica deporte</h4>
                <input
                  className="o-field-patient"
                  onChange={handleField}
                  type="text"
                  name="practicaDeporte"
                  value={actionPatient.practicaDeporte}
                />
              </div>
              <div className="o-button-container">
                {isSelected ? (
                  <div>
                    <button
                      className="o-button-action o-delete"
                      onClick={deletePatient}
                    >
                      Eliminar
                    </button>
                    <button
                      className="o-button-action o-edit"
                      onClick={updatePatient}
                    >
                      Editar
                    </button>
                  </div>
                ) : (
                  <button
                    className="o-button-action o-create"
                    onClick={createPatient}
                  >
                    Agregar
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Patients;
