import React from "react";

import WALogo from "../../Img/WALogo";
import InstaLogo from "../../Img/InstaLogo";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="o-container-footer">
      <div className="o-footer-info">
        <h2>Pide tu cita</h2>
        <p>
          Escribenos a nuestras redes.
        </p>
      </div>
      <div className="o-footer-contact" onClick="href">
        <h2>Nuestras redes</h2>
        <div className='o-footer-net' style={{ marginBottom: "1vh" }}>
          <WALogo />
          <a
            href="https://wa.link/dl0k62"
            target="_blank"
            rel="noopener noreferrer"
            className="o-text"
          >
            +57 3117848826
          </a>
        </div>
        <div className='o-footer-net'>
          <InstaLogo />
          <a
            href="https://www.instagram.com/therapymove/?hl=es-la"
            target="_blank"
            rel="noopener noreferrer"
            className="o-text"
          >
            @therapymove
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
