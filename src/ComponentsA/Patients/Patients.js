import React, { useEffect, useState } from "react";
import Switch from "react-switch";

import { PatientList, CreatePatient, EditPatient } from "../../Utilities/PatientFunctions";

import Add from "../../Img/Admin/add.svg";

import Menu from "../Menu/Menu";
import Header from "../Header/Header";
import Patient from "../Patient/Patient";

import "./Patients.scss";

function Patients() {
  const [listPatients, setListPatients] = useState([]);
  const [isEdit, setIsEdit] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [isDeport, setIsDeport] = useState(false);
  const [actionPatient, setActionPatient] = useState({
    cedulaPaciente: "",
    nombre1Paciente: "",
    apellido1Paciente: "",
    celularPaciente: "",
    telefonoPaciente: "",
    fechaNacimientoPaciente: "",
    correoPaciente: "",
    contrasenaPaciente: "",
    practicaDeporte: isDeport,
  });

  useEffect(() => {
    PatientList(setListPatients);
  }, []);

  const createEvent = () => {
    CreatePatient(actionPatient, setListPatients);
    setShowModal(false);
    clearForm();
  };

  const handleField = (event) => {
    setActionPatient({
      ...actionPatient,
      [event.target.name]: event.target.value,
    });
  };

  const editEvent = () => {
    EditPatient(actionPatient, setListPatients);
    setShowModal(false);
    clearForm();
  }

  const handleEdit = (patient) => {
    setActionPatient(patient)
    console.log(patient.practicaDeporte);
    setIsEdit(true);
    setShowModal(true);
    //setIsSelected(true);
  };

  const openModalCreate = () => {
    clearForm();
    setIsEdit(false);
    setShowModal(true);
  };

  function clearForm() {
    setActionPatient({
      cedulaPaciente: "",
      nombre1Paciente: "",
      apellido1Paciente: "",
      celularPaciente: "",
      telefonoPaciente: "",
      fechaNacimientoPaciente: "",
      correoPaciente: "",
      contrasenaPaciente: "",
      practicaDeporte: false,
    });
  }

  const handle = () => {
    setIsDeport(!isDeport);
    setActionPatient({
      ...actionPatient,
      practicaDeporte: !isDeport,
    });
    console.log(!isDeport);
  };

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
                  <h4 style={{ width: "20vw" }}>Nombre completo</h4>
                  <h4 style={{ width: "10vw" }}>Cédula</h4>
                  <h4 style={{ width: "12vw" }}>Teléfono</h4>
                  <h4 style={{ width: "12vw" }}>Celular</h4>
                  <h4 style={{ width: "20vw" }}>Correo</h4>
                  <h4 style={{ width: "5vw" }}>Acciones</h4>
                </div>
                <div className="o-patients-list">
                  {Object.values(listPatients).map((patient, index) => {
                    return (
                      <Patient
                        key={index}
                        patient={patient}
                        handleEditEvent={handleEdit}
                        setListPatients={setListPatients}
                      />
                    );
                  })}
                </div>
                <div className="o-add-container">
                  <img
                    src={Add}
                    alt=""
                    className="o-add-patient"
                    onClick={openModalCreate}
                  />
                </div>
              </div>
            </div>
            {showModal ? (
              <div className="o-modal">
                <div className="o-patient-info">
                  <div className="o-info-title">
                    <h3>Paciente</h3>
                  </div>
                  <div className="o-row">
                    <div className="o-patient-field">
                      <h4>Primer nombre</h4>
                      <input
                        required
                        className="o-field-patient"
                        onChange={handleField}
                        type="text"
                        name="nombre1Paciente"
                        value={actionPatient.nombre1Paciente}
                      />
                    </div>
                    <div className="o-patient-field">
                      <h4>Segundo nombre</h4>
                      <input
                        className="o-field-patient"
                        onChange={handleField}
                        type="text"
                        name="nombre2Paciente"
                        value={actionPatient.nombre2Paciente}
                      />
                    </div>
                  </div>
                  <div className="o-row">
                    <div className="o-patient-field">
                      <h4>Primer apellido</h4>
                      <input
                        className="o-field-patient"
                        onChange={handleField}
                        type="text"
                        name="apellido1Paciente"
                        value={actionPatient.apellido1Paciente}
                      />
                    </div>
                    <div className="o-patient-field">
                      <h4>Segundo apellido</h4>
                      <input
                        className="o-field-patient"
                        onChange={handleField}
                        type="text"
                        name="apellido2Paciente"
                        value={actionPatient.apellido2Paciente}
                      />
                    </div>
                  </div>
                  <div className="o-row">
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
                      <h4>Fecha de nacimiento</h4>
                      <input
                        className="o-field-patient"
                        onChange={handleField}
                        type="date"
                        name="fechaNacimientoPaciente"
                        value={actionPatient.fechaNacimientoPaciente}
                      />
                    </div>
                  </div>
                  <div className="o-row">
                    <div className="o-patient-field">
                      <h4>Teléfono</h4>
                      <input
                        className="o-field-patient"
                        onChange={handleField}
                        type="text"
                        name="telefonoPaciente"
                        value={actionPatient.telefonoPaciente}
                      />
                    </div>
                    <div className="o-patient-field">
                      <h4>Celular</h4>
                      <input
                        className="o-field-patient"
                        onChange={handleField}
                        type="text"
                        name="celularPaciente"
                        value={actionPatient.celularPaciente}
                      />
                    </div>
                  </div>
                  <div className="o-row">
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
                  </div>
                  <div className="o-row">
                    <div className="o-patient-field">
                      <h4>Practica deporte</h4>
                      <Switch onChange={() => handle()} checked={isDeport} />
                    </div>
                  </div>
                  <div className="o-row">
                    <div className="o-button-container">
                      <button
                        className="o-button-action o-close"
                        onClick={() => setShowModal(false)}
                      >
                        Cerrar
                      </button>
                      {isEdit ? (
                        <button
                          className="o-button-action o-edit"
                          onClick={() => editEvent()}
                        >
                          Editar
                        </button>
                      ) : (
                        <button
                          className="o-button-action o-create"
                          onClick={() => createEvent()}
                        >
                          Crear
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Patients;
