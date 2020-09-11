import React from "react";

import WALogo from "./WALogo";
import InstaLogo from "./InstaLogo";

import "./Footer.scss";

const Footer = () => {
  return (
    <div className="o-container-footer">
      <div className="o-footer-info">
        <h2>Pide tu cita</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
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
