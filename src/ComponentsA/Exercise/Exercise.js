import React from "react";

import { DeleteExercise } from "../../Utilities/ExerciseFunctions";

import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

import "./Exercise.scss";

function Exercise(props) {
  return (
    <div className="o-exercise-detail">
      <p style={{ width: "21vw" }}>{props.exercise.nombreEjercicio}</p>
      <p style={{ width: "30vw" }}>{props.exercise.descripcionEjercicio}</p>
      <p style={{ width: "11vw" }}>{props.exercise.seriesEjercicio}</p>
      <p style={{ width: "13vw" }}>{props.exercise.repeticionesEjercicio}</p>
      <div style={{ width: "5vw" }} className="o-icon-content">
        <IconButton
          onClick={() => props.handleEditEvent(props.exercise)}
          className="o-add-patient"
          aria-label="edit"
        >
          <EditIcon style={{ fontSize: "1.5rem" }} />
        </IconButton>
        <IconButton
          onClick={() => DeleteExercise(props.exercise, props.setListExercises)}
          className="o-add-patient"
          aria-label="delete"
        >
          <DeleteIcon style={{ fontSize: "1.5rem" }} />
        </IconButton>
      </div>
    </div>
  );
}

export default Exercise;
