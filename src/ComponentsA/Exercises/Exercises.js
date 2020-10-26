import React, { useEffect, useState } from "react";
import axios from "axios";
import creds from "../../variables";

import Exercise from "../Exercise/Exercise";

import Add from "../../Img/Admin/add.svg";

import "./Exercises.scss";

function Exercises() {
const [listExercises, setListElistExercises] = useState([]);
  const [isSelected, setIsSelected] = useState(false);
  const [actionExercise, setActionExercise] = useState({
    linkVideo: "",
    descripcionEjercicio: "",
    nombreEjercicio: "",
    idEjercicio: ""
  });

  useEffect(() => {
    axios.get(`${creds.url}/ejercicio/lista`).then((res) => {
      setListElistExercises(res.data);
      console.log();
    });
  }, []);

  let createExercise = (event) => {
    event.preventDefault();

    axios
      .post(`${creds.url}/ejercicio/registro`, {
        actionExercise,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  let deleteExercise = (event) => {
    event.preventDefault();

    axios
      .delete(`${creds.url}/ejercicio/cedula/${actionExercise.idEjercicio}`)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  let updateExercise = (event) => {
    event.preventDefault();

    axios
      .post(`${creds.url}/paciente/editar`, {
        actionExercise,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  let handleField = (event) => {
    setActionExercise({
      ...actionExercise,
      [event.target.name]: event.target.value,
    });
  };

  let outputEvent = (param) => {
    setActionExercise(param);
    setIsSelected(true);
  };

  function clearForm() {
    setActionExercise({
      linkVideo: "",
      descripcionEjercicio: "",
      nombreEjercicio: "",
      idEjercicio: "",
    });
    setIsSelected(false);
  }

  return (
    <div className="o-routines-container">
      <div className="o-routines-content">
        <div className="o-search-routines">
          <h3>Lista de ejercicios</h3>
          <input className="o-field-search" type="text" />
        </div>
        <div className="o-routines-field">
          <div className="o-routine-label">
            <h4 style={{ width: "21vw" }}>Nombre</h4>
            <h4 style={{ width: "36vw" }}>Descripción</h4>
          </div>
          <div className="o-routines-list">
            {Object.values(listExercises).map((exercise, index) => {
              return (
                <Exercise
                  key={index}
                  exercise={exercise}
                  handleEvent={outputEvent}
                />
              );
            })}
          </div>
          <div className="o-add-container">
            <img
              src={Add}
              alt=""
              className="o-add-patient"
              onClick={clearForm}
            />{" "}
          </div>
        </div>
      </div>
      <div className="o-routine-info">
        <div className="o-info-title">
          <h3>Ejercicio</h3>
        </div>
        <div className="o-routine-field">
          <h4>Nombre</h4>
          <input
            className="o-field-routine"
            type="text"
            onChange={handleField}
            name="nombreEjercicio"
            value={actionExercise.nombreEjercicio}
          />
        </div>
        <div className="o-routine-field">
          <h4>Descripción</h4>
          <input
            className="o-field-routine"
            type="text"
            onChange={handleField}
            name="descripcionEjercicio"
            value={actionExercise.descripcionEjercicio}
          />
        </div>
        <div className="o-routine-field">
          <h4>Link de video</h4>
          <input
            className="o-field-routine"
            type="text"
            onChange={handleField}
            name="linkVideo"
            value={actionExercise.linkVideo}
          />
        </div>
        <div className="o-button-container">
          {isSelected ? (
            <div>
              <button
                className="o-button-action o-delete"
                onClick={deleteExercise}
              >
                Eliminar
              </button>
              <button
                className="o-button-action o-edit"
                onClick={updateExercise}
              >
                Editar
              </button>
            </div>
          ) : (
            <button
              className="o-button-action o-create"
              onClick={createExercise}
            >
              Agregar
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Exercises;
