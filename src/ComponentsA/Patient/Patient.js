import React from "react";

import "./Patient.scss";

function Patient(props) {

  let handleClick = () => {
    props.handleEvent(props.patient)
  }

  return (
    <button className="o-patient-detail" onClick={handleClick}>
      <p
        style={{ width: "21vw" }}
      >{`${props.patient.nombre1Paciente} ${props.patient.apellido1Paciente}`}</p>
      <p style={{ width: "14vw" }}>{props.patient.cedulaPaciente}</p>
      <p style={{ width: "22vw" }}>{props.patient.correoPaciente}</p>
    </button>
  );
}

export default Patient;
