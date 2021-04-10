import React, { useEffect, useState } from "react";

import {
  PatientList,
  CreatePatient,
  EditPatient,
} from "../../Utilities/PatientFunctions";

import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import TextField from "@material-ui/core/TextField";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import Button from "@material-ui/core/Button";

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
    practicaDeporte: isDeport,
  });

  useEffect(() => {
    PatientList(setListPatients);
  }, []);

  const functionAction = (e) => {
    if (isEdit) {
      EditPatient(actionPatient, setListPatients);
    } else {
      CreatePatient(actionPatient, setListPatients);
    }
    setShowModal(false);
    clearForm();
    e.preventDefault();
  };

  const handleField = (e) => {
    setActionPatient({
      ...actionPatient,
      [e.target.id]: e.target.value,
    });
  };

  const handleDateChange = (e) => {
    setActionPatient({
      ...actionPatient,
      fechaNacimientoPaciente: e.target.value,
    });
  };

  const handleIsDeport = () => {
    setIsDeport(!isDeport);
    setActionPatient({
      ...actionPatient,
      practicaDeporte: !isDeport,
    });
  };

  const handleEdit = (patient) => {
    setActionPatient(patient);
    setIsEdit(true);
    setShowModal(true);
  };

  const handleCreate = () => {
    clearForm();
    setIsEdit(false);
    setShowModal(true);
  };

  function clearForm() {
    setActionPatient({ practicaDeporte: isDeport });
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
                  <Fab
                    onClick={handleCreate}
                    color="primary"
                    aria-label="add"
                    style={{ fontSize: "4rem" }}
                  >
                    <AddIcon />
                  </Fab>
                </div>
              </div>
            </div>
            {showModal ? (
              <div className="o-patient-modal">
                <form onSubmit={functionAction} className="o-patient-info">
                  <div className="o-info-title">
                    <h3>Paciente</h3>
                  </div>
                  <div className="o-row">
                    <TextField
                      margin="normal"
                      onChange={(e) => handleField(e)}
                      required
                      label="Primer nombre"
                      id="nombre1Paciente"
                      defaultValue={actionPatient.nombre1Paciente}
                      variant="outlined"
                      size="small"
                    />
                    <TextField
                      margin="normal"
                      onChange={(e) => handleField(e)}
                      label="Segundo nombre"
                      id="nombre2Paciente"
                      defaultValue={actionPatient.nombre2Paciente}
                      variant="outlined"
                      size="small"
                    />
                  </div>
                  <div className="o-row">
                    <TextField
                      margin="normal"
                      onChange={(e) => handleField(e)}
                      required
                      label="Primer apellido"
                      id="apellido1Paciente"
                      defaultValue={actionPatient.apellido1Paciente}
                      variant="outlined"
                      size="small"
                    />
                    <TextField
                      margin="normal"
                      onChange={(e) => handleField(e)}
                      label="Segundo apellido"
                      id="apellido2Paciente"
                      defaultValue={actionPatient.apellido2Paciente}
                      variant="outlined"
                      size="small"
                    />
                  </div>
                  <div className="o-row">
                    <TextField
                      margin="normal"
                      onChange={(e) => handleField(e)}
                      required
                      label="Cédula"
                      id="cedulaPaciente"
                      defaultValue={actionPatient.cedulaPaciente}
                      variant="outlined"
                      size="small"
                    />
                    <TextField
                      required
                      margin="normal"
                      id="fechaNacimientoPaciente"
                      label="Fecha de nacimiento"
                      type="date"
                      variant="outlined"
                      size="small"
                      onChange={handleDateChange}
                      value={actionPatient.fechaNacimientoPaciente}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </div>
                  <div className="o-row">
                    <TextField
                      margin="normal"
                      onChange={(e) => handleField(e)}
                      required
                      label="Teléfono"
                      id="telefonoPaciente"
                      defaultValue={actionPatient.telefonoPaciente}
                      variant="outlined"
                      size="small"
                    />
                    <TextField
                      margin="normal"
                      onChange={(e) => handleField(e)}
                      required
                      label="Celular"
                      id="celularPaciente"
                      defaultValue={actionPatient.celularPaciente}
                      variant="outlined"
                      size="small"
                    />
                  </div>
                  <div className="o-row">
                    <TextField
                      margin="normal"
                      onChange={(e) => handleField(e)}
                      required
                      label="Correo"
                      id="correoPaciente"
                      defaultValue={actionPatient.correoPaciente}
                      variant="outlined"
                      size="small"
                    />
                    <TextField
                      margin="normal"
                      onChange={(e) => handleField(e)}
                      required
                      label="Contraseña"
                      id="contrasenaPaciente"
                      defaultValue={actionPatient.contrasenaPaciente}
                      variant="outlined"
                      size="small"
                    />
                  </div>
                  <div className="o-row">
                    <FormControl required margin="normal" component="fieldset">
                      <FormLabel component="legend">Practica deporte</FormLabel>
                      <FormGroup>
                        <FormControlLabel
                          control={
                            <Switch
                              checked={isDeport}
                              color="primary"
                              onChange={handleIsDeport}
                              id="practicaDeporte"
                            />
                          }
                        />
                      </FormGroup>
                    </FormControl>
                  </div>
                  <div className="o-row-routines">
                    <div className="o-button-container">
                      <Button
                        variant="contained"
                        onClick={() => setShowModal(false)}
                        style={{ marginRight: "1rem" }}
                        color="secondary"
                      >
                        Cerrar
                      </Button>
                      {isEdit ? (
                        <Button
                          variant="contained"
                          type="submit"
                          color="primary"
                        >
                          Editar
                        </Button>
                      ) : (
                        <Button
                          variant="contained"
                          type="submit"
                          color="primary"
                        >
                          Crear
                        </Button>
                      )}
                    </div>
                  </div>
                </form>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Patients;
