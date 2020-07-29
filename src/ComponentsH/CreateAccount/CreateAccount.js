import React from 'react';
import "./../ContactUs/ContactUs.css";
import "./../Login/Login.css"
import "./CreateAccount.css"


const CreateAccount= () => {
    return (
        <div className="o-contactus-tab-container">
            <div className="o-createaccount-container">
                <div className="o-createaccount-info-container">
                    <h1>Crear cuenta</h1>
                    <p>Nombre completo</p>
                    <input className="o-input" placeholder="Escriba su correo electronico"></input>
                    <p>Número de cédula</p>
                    <input className="o-input" type="" placeholder="Escriba su numero de cedula"></input>
                    <p>Telefono Celular</p>
                    <input className="o-input" type="number" placeholder="Escriba su telefono celular"></input>
                    <p>Fecha de nacimiento </p>
                    <input className="o-input" type="date" placeholder="Escriba su fecha de nacimiento"></input>
                </div>
                <div className="o-createaccount-info-container">
                    <p>¿Practica algun deporte?</p>
                    <select name="deporte" className="o-select">
                        <option>Si</option>
                        <option>No</option>
                    </select>
                    <p>¿Que deporte?</p>
                    <input className="o-input" placeholder="Escriba el deporte que practica"></input>
                    <p>Corre Electrónico</p>
                    <input className="o-input" placeholder="Escriba su correo electronico"></input>
                    <p>Contraseña</p>
                    <input className="o-input" type="password" placeholder="Escriba su contraseña"></input>
                    <p>Confirmar Contraseña</p>
                    <input className="o-input" type="password" placeholder="Escriba su contraseña de nuevoz"></input>
                </div>
                <button className="o-button o-createaccount-button">Crear Cuenta</button>
            </div>
        </div>
    );
}

export default CreateAccount;