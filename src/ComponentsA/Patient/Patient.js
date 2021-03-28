import React from "react";

import { DeletePatient } from "../../Utilities/PatientFunctions";

import { ReactComponent as Delete } from "../../Img/Admin/delete.svg";
import { ReactComponent as Edit } from "../../Img/Admin/pencil.svg";

import "./Patient.scss";

function Patient(props) {
  return (
    <div className="o-patient-detail">
      <p
        style={{ width: "20vw" }}
      >{`${props.patient.nombre1Paciente} ${props.patient.nombre2Paciente} ${props.patient.apellido1Paciente} ${props.patient.apellido2Paciente} `}</p>
      <p style={{ width: "10vw" }}>{props.patient.cedulaPaciente}</p>
      <p style={{ width: "12vw" }}>{props.patient.celularPaciente}</p>
      <p style={{ width: "12vw" }}>{props.patient.telefonoPaciente}</p>
      <p style={{ width: "20vw" }}>{props.patient.correoPaciente}</p>
      <div className="o-icon-content">
        <Edit
          className="o-icon-action o-icon-edit"
          onClick={() => props.handleEditEvent(props.patient)}
        />
        <Delete
          className="o-icon-action o-icon-delete"
          onClick={() => DeletePatient(props.patient, props.setListPatients)}
        />
      </div>
    </div>
  );
}

export default Patient;
