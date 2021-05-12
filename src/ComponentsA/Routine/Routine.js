import React from "react";

import { DeleteRoutine } from "../../Utilities/RoutineFunctions";

import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

import "./Routine.scss";

function Routine(props) {
  return (
    <div className="o-routine-detail">
      <p style={{ width: "21vw" }}>{props.routine.nombreRutina}</p>
      <p style={{ width: "53vw" }}>{props.routine.descripcionRutina}</p>
      <div style={{ width: "5vw" }} className="o-icon-content">
        <IconButton
          onClick={() => props.handleEditEvent(props.routine)}
          className="o-add-patient"
          aria-label="delete"
        >
          <EditIcon style={{ fontSize: "1.5rem" }} />
        </IconButton>
        <IconButton
          onClick={() => DeleteRoutine(props.routine, props.setListRoutines)}
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
