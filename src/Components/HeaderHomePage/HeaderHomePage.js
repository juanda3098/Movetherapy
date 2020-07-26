import React from 'react';
import './HeaderHomePage.css';

function HeaderHomePage() {
  return (
    <div className="o-header-container">
        <h1 className="o-header-title">Move Therapy</h1>
        <div className="o-header-buttons-container">
            <button className="o-header-button">Servicios</button>
            <button className="o-header-button">Quienes Somos</button>
            <button className="o-header-button">Contactenos</button>
            <button className="o-header-button o-header-login">Ingresar</button>
        </div>
    </div>
  );
}

export default HeaderHomePage;
