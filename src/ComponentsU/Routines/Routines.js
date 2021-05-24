import React, { useEffect, useState, useContext } from "react";
import ReactPlayer from "react-player";

import LoginContext from "../../Context/LoginContext";

import {
  RoutineListUser,
  ExerciseRoutineList,
} from "../../Utilities/RoutineFunctions";

import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

import Header from "../Header/Header";

import "./Routines.scss";

function Routine() {
  const { user } = useContext(LoginContext);

  const [listRoutinesUser, setListRoutinesUser] = useState([]);
  const [listExercisesUser, setListExercisesUser] = useState([]);
  const [selectedRoutine, setSelectedRoutine] = useState([]);
  const [selectedExercise, setSelectedExercise] = useState([]);

  useEffect(() => {
    RoutineListUser(user.cedula, setListRoutinesUser);
    // AppointmentListUser(user.cedula, setListAppointments);
  }, [user.cedula]);

  const handleRoutine = (rutina) => {
    ExerciseRoutineList(rutina.idRutina, setListExercisesUser);
    setSelectedRoutine(rutina);
  };

  const handleExercise = (ejercicio) => {
    // ExerciseRoutineList(rutina, setListExercisesUser);
    setSelectedExercise(ejercicio);
    console.log(ejercicio);
  };

  return (
    <div>
      <Header />
      <div className="o-routines-user-container">
        <div className="o-routines-user-content">
          <h3>Mis Rutinas</h3>
          {Object.values(listRoutinesUser).map((rutina, index) => {
            return (
              <div className="o-routines-user-detail">
                {rutina.nombreRutina}
                <IconButton
                  style={{ marginLeft: "0.5rem" }}
                  onClick={() => handleRoutine(rutina)}
                  className="o-add-patient"
                  aria-label="delete"
                >
                  <SearchIcon style={{ fontSize: "1.5rem" }} />
                </IconButton>
              </div>
            );
          })}
        </div>
        <div className="o-routines-exercises-content">
          {selectedRoutine?.idRutina ? (
            <>
              <h3>Descripción de la rutina</h3>
              <p>{selectedRoutine.descripcionRutina}</p>
              <h3>Ejercicios</h3>
              {Object.values(listExercisesUser).map((ejercicio, index) => {
                return (
                  <div className="o-routines-user-detail">
                    {ejercicio.nombreEjercicio}
                    <IconButton
                      style={{ marginLeft: "0.5rem" }}
                      onClick={() => handleExercise(ejercicio)}
                      className="o-add-patient"
                      aria-label="delete"
                    >
                      <SearchIcon style={{ fontSize: "1.5rem" }} />
                    </IconButton>
                  </div>
                );
              })}
            </>
          ) : (
            <p>Seleccione una rutina</p>
          )}
        </div>
        <div className="o-routines-exercises-details">
          {selectedExercise?.idEjercicio ? (
            <>
              <h3 style={{ marginBottom: "0rem" }}>Titulo</h3>
              <h2 style={{ marginBottom: "2rem", marginTop: "1rem" }}>
                {selectedExercise.nombreEjercicio}
              </h2>
              <ReactPlayer
                url={selectedExercise.linkVideo}
                config={{
                  youtube: { playerVars: { showinfo: 1 } },
                  file: { attributes: { controlsList: "nodownload" } },
                }}
                onContextMenu={(e) => e.preventDefault()}
              />
              <h4>Descripción</h4>
              <p>{selectedExercise.descripcionEjercicio}</p>
              <h4>Repeticiones</h4>
              <p>{`${selectedExercise.seriesEjercicio} series`}</p>
              <p>{`${selectedExercise.repeticionesEjercicio} repeticiones`}</p>
            </>
          ) : (
            <p>Seleccione un ejercicio</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Routine;
