import React, { useState, useEffect } from "react";

import Menu from "../Menu/Menu";
import Header from "../Header/Header";
import Routine from "../Routine/Routine";

import {
  RoutineList,
  CreateRoutine,
  EditRoutine,
  ExerciseRoutineList,
} from "../../Utilities/RoutineFunctions";

import { ExerciseList } from "../../Utilities/ExerciseFunctions";

import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Checkbox from "@material-ui/core/Checkbox";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";

import "./Routines.scss";

function Routines() {
  const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
  const checkedIcon = <CheckBoxIcon fontSize="small" />;

  const [showModal, setShowModal] = useState(false);
  const [actionRoutine, setActionRoutine] = useState([]);
  const [isEdit, setIsEdit] = useState(true);
  const [listRoutines, setListRoutines] = useState([]);
  const [listExerciseRoutine, setListExerciseRoutine] = useState([]);
  const [listExercises, setListExercises] = useState([]);

  useEffect(() => {
    RoutineList(setListRoutines);
    ExerciseList(setListExercises);
  }, []);

  const functionAction = (e) => {
    // console.log(actionRoutine);
    if (isEdit) {
      EditRoutine(actionRoutine, setListRoutines);
    } else {
      CreateRoutine(actionRoutine, setListRoutines);
    }
    setShowModal(false);
    clearForm();
    e.preventDefault();
  };

  const handleExerciseSelected = (list) => {
    setActionRoutine({ ...actionRoutine, listaEjercicios: list });
  };

  const handleField = (e) => {
    setActionRoutine({
      ...actionRoutine,
      [e.target.id]: e.target.value,
    });
  };

  const handleEdit = (routine) => {
    ExerciseRoutineList(routine.idRutina, setListExerciseRoutine);
    setActionRoutine(routine);
    setIsEdit(true);
    setShowModal(true);
  };

  function clearForm() {
    setActionRoutine([]);
  }

  const handleCreate = () => {
    clearForm();
    setIsEdit(false);
    setShowModal(true);
  };

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
                <h3>Lista de rutinas</h3>
                <input className="o-field-search" type="text" />
              </div>
              <div className="o-routines-field">
                <div className="o-routine-label">
                  <h4 style={{ width: "21vw" }}>Nombre</h4>
                  <h4 style={{ width: "53vw" }}>Descripción</h4>
                  <h4 style={{ width: "5vw" }}>Acciones</h4>
                </div>
                <div className="o-routines-list">
                  {Object.values(listRoutines).map((routine, index) => {
                    return (
                      <Routine
                        key={index}
                        routine={routine}
                        handleEditEvent={handleEdit}
                        setListRoutines={setListRoutines}
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
              <div className="o-routine-modal">
                <form onSubmit={functionAction} className="o-routine-info">
                  <div className="o-info-title">
                    <h3>Rutina</h3>
                  </div>
                  <div className="o-row">
                    <TextField
                      margin="normal"
                      onChange={(e) => handleField(e)}
                      required
                      label="Nombre"
                      id="nombreRutina"
                      defaultValue={actionRoutine.nombreRutina}
                      variant="outlined"
                      size="small"
                    />
                  </div>
                  <div className="o-row">
                    <TextField
                      required
                      margin="normal"
                      id="descripcionRutina"
                      label="Descripcion de la rutina"
                      onChange={(e) => handleField(e)}
                      defaultValue={actionRoutine.descripcionRutina}
                      multiline
                      rows={6}
                      variant="outlined"
                      style={{ width: "25rem" }}
                    />
                  </div>
                  <div className="o-row">
                    <Autocomplete
                      multiple
                      id="listaEjercicios"
                      options={listExercises}
                      onChange={(event, value) => handleExerciseSelected(value)}
                      disableCloseOnSelect
                      getOptionLabel={(option) => option.nombreEjercicio}
                      defaultValue={isEdit ? listExerciseRoutine : []}
                      renderOption={(option, { selected }) => (
                        <React.Fragment>
                          <Checkbox
                            icon={icon}
                            checkedIcon={checkedIcon}
                            style={{ marginRight: 8 }}
                            checked={selected}
                          />
                          {option.nombreEjercicio}
                        </React.Fragment>
                      )}
                      style={{ width: 500 }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          margin="normal"
                          variant="outlined"
                          label="Ejercicios"
                          placeholder="Selecciona los ejercicios"
                        />
                      )}
                    />
                  </div>

                  <div className="o-row">
                    <div className="o-button-container">
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

export default Routines;
