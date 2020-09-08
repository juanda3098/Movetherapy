import React from "react";

import Profile from "../Profile/Profile";

import Add from "../../Img/Admin/add.svg";

import "./Profiles.scss";

function Profiles() {
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
