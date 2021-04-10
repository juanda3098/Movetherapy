import React, { useState } from "react";

import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

import "./Routine.scss";

function Routine(props) {

  return (
    <div className="o-routine-detail">
      <p style={{ width: "13vw" }}>Juan David Posso Rengifo</p>
      <p style={{ width: "50vw"}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <div style={{ width: "5vw" }} className="o-icon-content">
        <IconButton
          onClick={() => props.handleEditEvent(props.patient)}
          className="o-add-patient"
          aria-label="delete"
        >
          <EditIcon style={{ fontSize: "1.5rem" }} />
        </IconButton>
        <IconButton
          /* onClick={() => DeletePatient(props.patient, props.setListPatients)} */
          className="o-add-patient"
          aria-label="delete"
        >
          <DeleteIcon style={{ fontSize: "1.5rem" }} />
        </IconButton>
      </div>
    </div>
  );
}

export default Routine;
