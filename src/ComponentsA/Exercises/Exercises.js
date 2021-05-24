import React, { useEffect, useState } from "react";

import {
  ExerciseList,
  CreateExercise,
  EditExercise,
} from "../../Utilities/ExerciseFunctions";

import Menu from "../Menu/Menu";
import Header from "../Header/Header";
import Exercise from "../Exercise/Exercise";

import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import "./Exercises.scss";

function Exercises() {
  const [showModal, setShowModal] = useState(false);
  const [listExercises, setListExercises] = useState([]);
  const [isEdit, setIsEdit] = useState(true);
  const [actionExercise, setActionExercise] = useState([]);

  useEffect(() => {
    ExerciseList(setListExercises);
  }, []);

  const functionAction = (e) => {
    console.log(actionExercise);
    if (isEdit) {
      EditExercise(actionExercise, setListExercises);
    } else {
      CreateExercise(actionExercise, setListExercises);
    }
    setShowModal(false);
    clearForm();
    e.preventDefault();
  };

  const handleEdit = (exercise) => {
    console.log(exercise);
    setActionExercise(exercise);
    setIsEdit(true);
    setShowModal(true);
  };

  const handleCreate = () => {
    clearForm();
    setIsEdit(false);
    setShowModal(true);
    console.log(actionExercise);
  };

  const handleField = (e) => {
    setActionExercise({
      ...actionExercise,
      [e.target.id]: e.target.value,
    });
  };

  function clearForm() {
    setActionExercise([]);
  }

  return (
    <div className="o-admin-container">
      <div className="o-admin-menu">
        <Menu />
      </div>
      <div className="o-admin-field">
        <Header />
        <div className="o-admin-body">
          <div className="o-routines-container">
            <div className="o-routines-content">
              <div className="o-search-routines">
                <h3>Lista de ejercicios</h3>
                <input className="o-field-search" type="text" />
              </div>
              <div className="o-routines-field">
                <div className="o-routine-label">
                  <h4 style={{ width: "21vw" }}>Nombre</h4>
                  <h4 style={{ width: "30vw" }}>Descripción</h4>
                  <h4 style={{ width: "11vw" }}>Series</h4>
                  <h4 style={{ width: "13vw" }}>Repeticiones</h4>
                  <h4 style={{ width: "5vw" }}>Acciones</h4>
                </div>
                <div className="o-routines-list">
                  {Object.values(listExercises).map((exercise, index) => {
                    return (
                      <Exercise
                        key={index}
                        exercise={exercise}
                        handleEditEvent={handleEdit}
                        setListExercises={setListExercises}
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
              <div className="o-exercises-modal">
                <form onSubmit={functionAction} className="o-exercises-info">
                  <div className="o-info-title">
                    <h3>Ejercicio</h3>
                  </div>
                  <div className="o-row">
                    <TextField
                      margin="normal"
                      onChange={(e) => handleField(e)}
                      required
                      label="Nombre"
                      id="nombreEjercicio"
                      defaultValue={actionExercise.nombreEjercicio}
                      variant="outlined"
                      size="small"
                    />
                  </div>
                  <div className="o-row">
                    <TextField
                      required
                      margin="normal"
                      id="descripcionEjercicio"
                      onChange={(e) => handleField(e)}
                      label="Descripcion del ejercicio"
                      multiline
                      rows={6}
                      defaultValue={actionExercise.descripcionEjercicio}
                      variant="outlined"
                      style={{ width: "25rem" }}
                    />
                  </div>
                  <div className="o-row">
                    <TextField
                      margin="normal"
                      onChange={(e) => handleField(e)}
                      required
                      label="Numero de series"
                      id="seriesEjercicio"
                      defaultValue={actionExercise.seriesEjercicio}
                      variant="outlined"
                      size="small"
                    />
                    <TextField
                      margin="normal"
                      onChange={(e) => handleField(e)}
                      required
                      label="Numero de repeticiones"
                      id="repeticionesEjercicio"
                      defaultValue={actionExercise.repeticionesEjercicio}
                      variant="outlined"
                      size="small"
                    />
                  </div>
                  <div className="o-row">
                    <TextField
                      style={{ width: "20rem" }}
                      margin="normal"
                      onChange={(e) => handleField(e)}
                      required
                      label="Link del video"
                      id="linkVideo"
                      defaultValue={actionExercise.linkVideo}
                      variant="outlined"
                      size="small"
                    />
                  </div>
                  <div className="o-row-physio">
                    <div className="o-button-container-exercise">
                      <Button
                        variant="contained"
                        onClick={() => setShowModal(false)}
                        style={{ marginRight: "1rem" }}
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

export default Exercises;
