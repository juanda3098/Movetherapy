import React from "react";

import "./Exercise.scss";

function Exercise(props) {

  let handleClick = () => {
    props.handleEvent(props.exercise);
  };

  return (
    <button className="o-routine-detail" onClick={handleClick}>
      <p style={{ width: "21vw" }}>{props.exercise.nombreEjercicio}</p>
      <p style={{ width: "36vw" }}>{props.exercise.descripcionEjercicio}</p>
    </button>
  );
}

export default Exercise;
