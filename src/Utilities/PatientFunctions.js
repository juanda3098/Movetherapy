import React, { useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import creds from "../variables";

export const PatientList = (setListPatients) => {
  axios
    .get(`${creds.url}/paciente/lista`)
    .then((res) => {
      setListPatients(res.data);
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const DeletePatient = (cedulaPaciente) => {
  axios
    .delete(`${creds.url}/paciente/cedula/${cedulaPaciente}`)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const CreatePatient = (paciente) => {
  axios
    .post(`${creds.url}/paciente/registro`, {
      paciente,
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}