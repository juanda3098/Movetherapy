import React, {useEffect, useState} from "react";
import axios from "axios";
import creds from "../../variables";

import Profile from "../Profile/Profile";

import Add from "../../Img/Admin/add.svg";

import "./Profiles.scss";

function Profiles() {
    const [listProfiles, setListProfiles] = useState([]);
    const [isSelected, setIsSelected] = useState(false);
    const [actionProfile, setActionProfile] = useState({
      cedulaPaciente: "",
      nombre1Paciente: "",
      apellido1Paciente: "",
      celularPaciente: "",
      fechaNacimientoPaciente: "",
      correoPaciente: "",
      contrasenaPaciente: "",
      practicaDeporte: "",
      idPaciente: "",
    });

    useEffect(() => {
      axios.get(`${creds.url}/paciente/lista`).then((res) => {
        setListProfiles(res.data);
        console.log();
      });
    }, []);

    let createProfile = (event) => {
      event.preventDefault();

      axios
        .post(`${creds.url}/paciente/registro`, {
          actionProfile,
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    };

    let deleteProfile = (event) => {
      event.preventDefault();

      axios
        .delete(`${creds.url}/paciente/cedula/${actionProfile.cedulaPaciente}`)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    };

    let updateProfile = (event) => {
      event.preventDefault();

      axios
        .post(`${creds.url}/paciente/editar`, {
          actionProfile,
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    };

    let handleField = (event) => {
      setActionProfile({
        ...actionProfile,
        [event.target.name]: event.target.value,
      });
    };

    let outputEvent = (param) => {
      setActionProfile(param);
      setIsSelected(true);
    };

    function clearForm() {
      setActionProfile({
        cedulaPaciente: "",
        nombre1Paciente: "",
        apellido1Paciente: "",
        celularPaciente: "",
        fechaNacimientoPaciente: "",
        correoPaciente: "",
        contrasenaPaciente: "",
        practicaDeporte: "",
        idPaciente: "",
      });
      setIsSelected(false);
    }
  return (
    <div className="o-profiles-container">
      <div className="o-profiles-content">
        <div className="o-search-profiles">
          <h3>Lista de rutinas</h3>
          <input className="o-field-search" type="text" />
        </div>
        <div className="o-profiles-field">
          <div className="o-profile-label">
            <h4 style={{ width: "21vw" }}>Nombre</h4>
            <h4 style={{ width: "36vw" }}>Descripción</h4>
          </div>
          <div className="o-profiles-list">
            <Profile />
            <Profile />
            <Profile />
          </div>
          <div className="o-add-container">
            <img src={Add} alt="" className="o-add-profile" />
          </div>
        </div>
      </div>
      <div className="o-profile-info">
        <div className="o-info-title">
          <h3>Rutina</h3>
        </div>
        <div className="o-profile-field">
          <h4>Nombre</h4>
          <input className="o-field-profile" type="text" />
        </div>
        <div className="o-profile-field">
          <h4>Descripción</h4>
          <input className="o-field-profile" type="text" />
        </div>
        <div className="o-button-container">
          <button className="o-button-action">Agregar</button>
        </div>
      </div>
    </div>
  );
}

export default Profiles;
