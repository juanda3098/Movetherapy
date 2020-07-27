import React from 'react';
import "./ContactUs.css";
import InstaLogo from "./InstaLogo";
import WALogo from "./WALogo";

const ContactUs = () => {
    return (
        <div className="o-contactus-tab-container">
            <div className="o-contactus-container">
                <div className="o-client-info-container">
                    <h1>Envianos un mensaje</h1>
                    <p>Nombre</p>
                    <input className="o-input" placeholder="Escriba su nombre y apellidos"></input>
                    <p>Corre Electrónico</p>
                    <input className="o-input" placeholder="Escriba su correo electronico"></input>
                    <p>Telefono</p>
                    <input className="o-input" placeholder="Numero de telefono o celular"></input>
                    <p>Mensaje</p>
                    <input className="o-input o-large-input" placeholder="Escribe aqui tu mensaje"></input>
                    <button className="o-button">Enviar</button>
                </div>
                <iframe
                    width="60%"
                    height="100%"
                    frameborder="0" style={{ border: 0 }}
                    src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDk4oy52Yq3t_cQwGCVSnxF6KyK7HNSVRw&q=Move+Therapy,Cali+Valle" allowfullscreen>
                </iframe>
            </div>
            <div className="o-contact-info-container">
                <h1 className="o-contact-title">CONTÁCTANOS</h1>
                <div>
                    <div className="o-contact-info"><InstaLogo></InstaLogo><p className="o-text">@therapymove</p></div>
                    <div className="o-contact-info"><WALogo></WALogo><p className="o-text">+57 3114536894</p></div>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;