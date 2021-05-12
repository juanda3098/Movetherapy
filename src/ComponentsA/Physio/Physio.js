import React, { useState, useEffect } from "react";

import { DeletePhysio } from "../../Utilities/PhysiotherapistFunctions";

import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

import "./Physio.scss";

function Physio(props) {
  const [name, setName] = useState("");

  useEffect(() => {
    var aux = "";
    if (props.physio.nombre1Fisio) {
      aux = `${aux} ${props.physio.nombre1Fisio}`;
    }
    if (props.physio.nombre2Fisio) {
      aux = `${aux} ${props.physio.nombre2Fisio}`;
    }
    if (props.physio.apellido1Fisio) {
      aux = `${aux} ${props.physio.apellido1Fisio}`;
    }
    if (props.physio.apellido2Fisio) {
      aux = `${aux} ${props.physio.apellido2Fisio}`;
    }
    setName(aux);
  }, [
    props.physio.nombre1Fisio,
    props.physio.nombre2Fisio,
    props.physio.apellido1Fisio,
    props.physio.apellido2Fisio,
  ]);

  return (
    <div className="o-physio-detail">
      <p style={{ width: "22vw" }}>{name}</p>
      <p style={{ width: "12vw" }}>{props.physio.celularFisio}</p>
      <p style={{ width: "20vw" }}>{props.physio.correoFisio}</p>
      <p style={{ width: "20vw" }}>{props.physio.tituloFisio}</p>
      <div style={{ width: "5vw" }} className="o-icon-content">
        <IconButton
          onClick={() => props.handleEditEvent(props.physio)}
          className="o-add-patient"
          aria-label="delete"
        >
          <EditIcon style={{ fontSize: "1.5rem" }} />
        </IconButton>
        <IconButton
          onClick={() => DeletePhysio(props.physio, props.setListPhysio)}
          className="o-add-patient"
          aria-label="delete"
        >
          <DeleteIcon style={{ fontSize: "1.5rem" }} />
        </IconButton>
      </div>
    </div>
  );
}

export default Physio;
