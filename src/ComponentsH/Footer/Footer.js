import React from "react";

import "./Footer.css";
import WALogo from "./WALogo";

const Footer = () => {
  return (
    <div className="o-container-footer">
      <div className="o-footer-info">
        <h1>PIDE TU CITA</h1>
      </div>
      <div className="o-footer-contact" onClick="href">
            <WALogo />
            <a href="https://wa.link/dl0k62" target="_blank" className="o-text">+57 3117848826</a>
      </div>
    </div>
  );
};

export default Footer;
