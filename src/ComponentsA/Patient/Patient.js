import React, { useState, useEffect } from "react";

import { DeletePatient } from "../../Utilities/PatientFunctions";

import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

import "./Patient.scss";

function Patient(props) {
  const [name, setName] = useState("");

  useEffect(() => {
    var aux = "";
    if (props.patient.nombre1Paciente) {
      aux = `${aux} ${props.patient.nombre1Paciente}`;
    }
    if (props.patient.nombre2Paciente) {
      aux = `${aux} ${props.patient.nombre2Paciente}`;
    }
    if (props.patient.apellido1Paciente) {
      aux = `${aux} ${props.patient.apellido1Paciente}`;
    }
    if (props.patient.apellido2Paciente) {
      aux = `${aux} ${props.patient.apellido2Paciente}`;
    }
    setName(aux);
  });

  return (
    <div className="o-patient-detail">
      <p style={{ width: "20vw" }}>{name}</p>
      <p style={{ width: "10vw" }}>{props.patient.cedulaPaciente}</p>
      <p style={{ width: "12vw" }}>{props.patient.celularPaciente}</p>
      <p style={{ width: "12vw" }}>{props.patient.telefonoPaciente}</p>
      <p style={{ width: "20vw" }}>{props.patient.correoPaciente}</p>
      <div className="o-icon-content">
        <IconButton
          onClick={() => props.handleEditEvent(props.patient)}
          className="o-add-patient"
          aria-label="delete"
        >
          <EditIcon style={{ fontSize: "1.5rem" }} />
        </IconButton>
        <IconButton
          onClick={() => DeletePatient(props.patient, props.setListPatients)}
          className="o-add-patient"
          aria-label="delete"
        >
          <DeleteIcon style={{ fontSize: "1.5rem" }} />
        </IconButton>
      </div>
    </div>
  );
}

export default Patient;
